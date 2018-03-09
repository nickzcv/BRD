'use strict';

/*******************************************************************************
 APP
 *******************************************************************************/
/**
 * Declare the application object
 *
 * @class app
 */
moment.locale('ru');

var app = function () {

  var objApp = {
    collections: {},
    models: {},
    router: {},
    views: {},
    user: null
  };

  objApp.init = function () {
    // console.log('app.init');
    var App = Mn.Application.extend({

      region: '#app',

      onBeforeStart: function onBeforeStart(application, options) {
        // Check If user already logged in
        if (brd.controllers.isLoggedIn()) {
          var useId = brd.controllers.getUserId();
          app.user = new app.models.UserModel({ _id: useId });
          // Store user profile data into the app
          app.user.fetch().then(function () {
            //console.log('SUCCESS');
            //console.log(app.user.attributes);
          }, function () {
            console.log('FAIL');
            console.log(app.user.attributes);
          });
        }

        // Init router
        brd.router = new app.router();
      },

      onStart: function onStart(application, options) {
        // Save main region namespace
        brd.regions.mainRegion = this.getRegion();

        Backbone.history.start();
      }

    });

    var application = new App();
    application.start();
  };

  return objApp;
}();

/*****************************************
 Initialize the application
 ******************************************/
$(document).ready(function () {
  app.init();
});
'use strict';

var brd = {

  model: {},
  router: {},
  regions: {},
  controllers: {

    /*
     * Fully hide modal window
     *
     */
    hideModalFully: function hideModalFully() {
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
    },

    /*
     * Save token in localStorage
     *
     */
    saveToken: function saveToken(token) {
      localStorage.setItem('token', token);
    },

    /*
     * Get token from localStorage
     *
     */
    getToken: function getToken() {
      return localStorage.getItem('token');
    },

    /*
     * Remove token from localStorage
     *
     */
    logout: function logout() {
      localStorage.removeItem('token');
    },

    /*
     * Check token validity
     *
     */
    isLoggedIn: function isLoggedIn() {
      var token = this.getToken();
      var payload = void 0;

      if (token) {
        try {
          payload = token.split('.')[1];
          // TODO: fix
          // DOMException: Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.
          payload = atob(payload);
          payload = JSON.parse(payload);
        } catch (e) {
          console.log(e);
          return false;
        }
        return payload.exp > Date.now() / 1000;
      } else {
        return false;
      }
    },

    /*
     * Get current user id
     *
     */
    getUserId: function getUserId() {
      var token = this.getToken();
      var payload = void 0;

      if (token) {
        try {
          payload = token.split('.')[1];
          payload = atob(payload);
          payload = JSON.parse(payload);
          return payload._id;
        } catch (e) {
          console.log(e);
          return false;
        }
      }
    }

  }

};
'use strict';

app.router = Marionette.AppRouter.extend({

  /**
   * Ordered priority list for determining which route the URL matches
   *
   */
  routes: {
    // Default route for at most 5 page levels
    '(:page1)(/:page2)(/:page3)(/:page4)(/:page5)(/)': 'handleRouteChange'
  },

  /**
   * Route change handler which runs on every navigation event
   *
   * @param {String} page1 Page1 from URL
   * @param {String} page2 Page2 from URL
   * @param {String} page3 Page3 from URL
   * @param {String} page4 Page4 from URL
   * @param {String} page5 Page5 from URL
   * @memberOf app.router
   */
  handleRouteChange: function handleRouteChange(page1, page2, page3, page4, page5) {
    // scroll to the top if a new page
    window.scrollTo(0, 0);

    // if a new page then empty the main region
    if (brd.regions.mainRegion) {
      brd.regions.mainRegion.show(new app.views.SpinnerView());
      brd.regions.mainRegion.show(new app.views.MainView());
    }

    switch (page1) {
      // Home page route
      case 'home':
        brd.regions.bodyRegion.show(new app.views.HomeView());
        break;
      // Forbidden page
      case 'forbidden':
        brd.regions.bodyRegion.show(new app.views.ForbiddenView());
        break;
      // FAQ page route
      case 'faq':
        brd.regions.bodyRegion.show(new app.views.FaqView());
        break;
      // Calculator
      case 'calc':
        brd.regions.bodyRegion.show(new app.views.CalcView({
          model: new app.models.CalcModel()
        }));
        break;
      // Profile routing
      case 'profile':
        {
          // Check if user logged in
          if (brd.controllers.isLoggedIn()) {
            switch (page2) {
              // Dashboard
              case 'dashboard':
                brd.regions.bodyRegion.show(new app.views.DashboardView());
                brd.regions.leftNavRegion.show(new app.views.LeftNavigation({ page: page2 }));
                break;
              // Settings
              case 'settings':
                brd.regions.bodyRegion.show(new app.views.SettingsView());
                brd.regions.leftNavRegion.show(new app.views.LeftNavigation({ page: page2 }));
                break;
              // Ads
              case 'ads':
                if (page3 && page3 === 'new') {
                  // Add new ad form
                  brd.regions.bodyRegion.show(new app.views.AddAdView({ model: new app.models.AdModel() }));
                } else {
                  // Main ads page
                  brd.regions.bodyRegion.show(new app.views.AdsView());
                }
                brd.regions.leftNavRegion.show(new app.views.LeftNavigation({ page: page2 }));
                break;
              // Default redirect to home
              default:
                this.navigateToRoute('home');
            }
          } else {
            // If not logged in - redirect to forbidden page
            this.navigateToRoute('forbidden');
          }
          break;
        }
      // Default redirect to home
      default:
        this.navigateToRoute('home');
    }
  },

  /**
   * Navigate to the specific route
   *
   * @param {String} page1 Page to navigate
   * @param {String} page2 2nd level page to to navigate
   * @param {String} [page3] 3d level page to to navigate
   * @param {String} [page4] 4d level page to to navigate
   * @param {Boolean} [replace_history] Set to true if we need to replace history
   * @memberOf app.router
   * @instance
   */
  navigateToRoute: function navigateToRoute(page1, page2, page3, page4, replace_history) {
    var route = '';
    // Set default values if values passed in are null/false
    replace_history = replace_history || false;
    // Create the route for each page passed
    $.each(arguments, function () {
      if ($.type(this) === "string") {
        route += '/' + this;
      }
    });
    // navigate to the new route
    Backbone.history.navigate(route, {
      replace: replace_history,
      trigger: true
    });
  }

});
"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Compare two values
 *
 * @param {Number} lvalue Left value to compare
 * @param {String} operator Operator to apply while comparing
 * @param {Number} rvalue Right value to compare
 * @param {Object} options
 * @property {Function} options.fn
 * @property {Function} options.inverse
 *
 * @todo Clarify parameters' types and descriptions.
 * @function external:HandlebarsHelper#compare
 */
Handlebars.registerHelper('compare', function (lvalue, operator, rvalue, options) {
  var operators = void 0,
      result = void 0;
  if (arguments.length < 3) {
    throw new Error("Handlerbars Helper 'compare' needs 2 parameters");
  }
  if (options === undefined) {
    options = rvalue;
    rvalue = operator;
    operator = "===";
  }
  operators = {
    '==': function _(l, r) {
      return l == r;
    },
    '===': function _(l, r) {
      return l === r;
    },
    '!=': function _(l, r) {
      return l != r;
    },
    '!==': function _(l, r) {
      return l !== r;
    },
    '<': function _(l, r) {
      return l < r;
    },
    '>': function _(l, r) {
      return l > r;
    },
    '<=': function _(l, r) {
      return l <= r;
    },
    '>=': function _(l, r) {
      return l >= r;
    },
    'typeof': function _typeof(l, r) {
      return (typeof l === "undefined" ? "undefined" : _typeof2(l)) == r;
    }
  };
  if (!operators[operator]) {
    throw new Error("Handlerbars Helper 'compare' doesn't know the operator " + operator);
  }
  result = operators[operator](lvalue, rvalue);
  if (result) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

/*
 * Formatting date before show
 */
Handlebars.registerHelper('formatDate', function (datetime, format) {
  if (moment) {
    return moment(datetime).format(format);
  } else {
    return datetime;
  }
});

/*
 *
 */
Handlebars.registerHelper('getSelected', function (context, options) {
  if (context) {
    return context.map(function (item) {
      if (item.selected) {
        return options.fn(item);
      }
    }).join(",");
  } else {
    return 'NOTHING';
  }
});

/*
 * For calculator
 */
Handlebars.registerHelper('cutFloat', function (value, dec) {
  if (value) {
    var string = value.toString();
    // remove zeros from end of value
    while (string.substring(0, string.indexOf('.') + dec).slice(-1) === '0' && dec > 2) {
      dec--;
    }
    return string.substring(0, string.indexOf('.') + dec);
  } else {
    return 0;
  }
});
'use strict';

app.collections.AdsCollection = Backbone.Collection.extend({

  url: function url() {
    return 'api/ads/' + brd.controllers.getUserId();
  },

  comparator: function comparator(m) {
    return -Date.parse(m.get('updated_at'));
  }

});
'use strict';

app.collections.AdsHomeCollection = Backbone.Collection.extend({

  initialize: function initialize(options) {
    if (options) {
      var params = {};
      // Category
      if (options.parameters.selectedCategoryId) {
        params.category = options.parameters.selectedCategoryId;
      }
      // Country
      if (options.parameters.country) {
        params.country = options.parameters.country.id;
      }
      // City
      if (options.parameters.city) {
        params.city = options.parameters.city.id;
      }
      // Type
      if (options.parameters.type) {
        params.type = options.parameters.type;
      }
      // Object
      if (options.parameters.object) {
        params.object = options.parameters.object;
      }
      // Save params object
      this.parameters = params;
    }
  },

  url: function url() {
    if (this.parameters) {
      return 'api/ads?' + $.param(this.parameters, true);
    } else {
      return 'api/ads';
    }
  }

});
'use strict';

app.models.AdModel = Backbone.Model.extend({

  urlRoot: 'api/ads',

  defaults: {
    countriesModel: null,
    type: null,
    object: null,
    category: null,
    selectedCategoryId: null,
    title: null,
    country: null,
    city: null,
    contacts: {
      takeFrom: 'profile',
      phones: []
    }
  },

  initialize: function initialize() {
    var thisModel = this;

    thisModel.on('invalid', function (model, error) {
      //console.log(error);
    });

    // Init child Countries model
    thisModel.set({ countriesModel: new app.models.CountriesPickerModel() });
    // Init child Filters model under categories
    thisModel.set({ categoryModel: new app.models.FiltersModel() });
    var categoryModel = thisModel.get('categoryModel');

    // console.log(categoryModel);

    thisModel.set({ categories: categoryModel.attributes.categories });

    // get countries Model
    var countriesModel = thisModel.get('countriesModel');
    // Listen to country change
    countriesModel.on('change:country', function () {
      thisModel.set({ country: countriesModel.get('country') });
    });
    // Listen to city change
    countriesModel.on('change:city', function () {
      thisModel.set({ city: countriesModel.get('city') });
    });
  },

  validate: function validate(attr) {
    if (!attr.type || !attr.category || !attr.title || !attr.country) {
      return 'empty one of the required fields.';
    }
  },

  setCategoryObject: function setCategoryObject() {
    var category = _.findWhere(this.get('categories'), { id: this.get('selectedCategoryId') });
    this.set({ category: category });
  }

});
'use strict';

app.models.AdsHomeModel = Backbone.Model.extend({

  defaults: {},

  initialize: function initialize() {
    console.log('initialize adsHomeModel');
  }

});
"use strict";

app.models.AdsListModel = Backbone.Model.extend({

  defaults: {
    isItemsExist: false
  },

  initialize: function initialize() {
    //console.log('initialize AdsListModel');
    //console.log(this.attributes);

  }

});
"use strict";

/**
 * Get a deep copy of an object, to ensure Backbone doesn't think it's identical
 * to the original object
 *
 * @param {Object} object Object to clone
 * @return {Object}
 * @function external:"Backbone.Model"#deepClone
 */
Backbone.Model.prototype.deepClone = function (object) {
  return JSON.parse(JSON.stringify(object));
};
'use strict';

app.models.FiltersHomeModel = Backbone.Model.extend({

  defaults: {
    countriesModel: null,
    type: null,
    object: null,
    category: null,
    selectedCategoryId: null,
    country: null,
    city: null
  },

  initialize: function initialize() {
    var _this = this;

    // Init child Countries model
    this.set({ countriesModel: new app.models.CountriesPickerModel() });
    // Init child Filters model under categories
    this.set({ categoryModel: new app.models.FiltersModel() });

    var categoryModel = this.get('categoryModel');
    this.set({ categories: categoryModel.attributes.categories });

    // get countries Model
    var countriesModel = this.get('countriesModel');
    // Listen to country change
    countriesModel.on('change:country', function () {
      _this.set({ country: countriesModel.get('country') });
    });
    // Listen to city change
    countriesModel.on('change:city', function () {
      _this.set({ city: countriesModel.get('city') });
    });
  }

});
"use strict";

app.models.HeaderModel = Backbone.Model.extend({

  defaults: {
    user: null
  },

  initialize: function initialize() {
    if (app.user) {
      this.updateUser();
    }
  },

  updateUser: function updateUser() {
    this.set({ user: app.user.attributes });
  }

});
"use strict";

app.models.HomeContentModel = Backbone.Model.extend({

  initialize: function initialize() {}

});
'use strict';

app.models.LoginModel = Backbone.Model.extend({

  defaults: {
    email: null,
    password: null
  },

  initialize: function initialize() {
    // console.log('initialize Login Model');
    this.on('invalid', function (model, error) {
      //console.log(error);
    });
  },

  validate: function validate(attributes) {
    if (!attributes.email) {
      return 'empty email.';
    }
    if (!attributes.password) {
      return 'empty password.';
    }
  },

  /*
   * Login request
   *
   */
  login: function login() {
    return $.ajax({
      url: 'api/login/',
      method: 'POST',
      data: {
        email: this.get('email'),
        password: this.get('password')
      }
    });
  }

});
'use strict';

app.models.RegistrationModel = Backbone.Model.extend({

  urlRoot: 'api/users',

  defaults: {
    email: null,
    password: null,
    confirmPassword: null
  },

  initialize: function initialize() {
    this.on('invalid', function (model, error) {
      //console.log(error);
    });
  },

  validate: function validate(attributes) {
    if (!attributes.email) {
      return 'empty email.';
    }
    if (!attributes.password) {
      return 'empty password.';
    }
  },

  /*
  * Check by email if user exist
  *
  */
  isEmailExist: function isEmailExist(email) {
    return $.ajax({
      url: 'api/user-email-check/',
      data: {
        email: email
      }
    });
  }

});
'use strict';

app.models.UserModel = Backbone.Model.extend({

  defaults: {
    countriesModel: null
  },

  urlRoot: 'api/user/',

  idAttribute: '_id',

  initialize: function initialize() {
    var thisModel = this;
    // when a model has been successfully synced with the server.
    thisModel.on('sync', function () {
      // Init countries model
      thisModel.set({ countriesModel: new app.models.CountriesPickerModel({
          country: thisModel.get('country'),
          city: thisModel.get('city')
        }) });
      // get countries Model
      var countriesModel = thisModel.get('countriesModel');
      // Listen to country change
      countriesModel.on('change:country', function () {
        thisModel.set({ country: countriesModel.get('country') });
      });
      // Listen to city change
      countriesModel.on('change:city', function () {
        thisModel.set({ city: countriesModel.get('city') });
      });
    });
  }

});
'use strict';

app.models.CalcModel = Backbone.Model.extend({

  defaults: {
    tolshina: undefined,
    shirina: undefined,
    dlina: undefined,
    count: undefined,
    volume: 0,
    square: 0,
    resultV: 0,
    resultP: 0
  },

  initialize: function initialize() {
    console.log('test model');
  },

  calculateResult: function calculateResult(t, s, d, c) {
    var tolshina = parseInt(t),
        shirina = parseInt(s),
        dlina = parseInt(d),
        count = parseInt(c);

    this.set({
      tolshina: tolshina,
      shirina: shirina,
      dlina: dlina,
      volume: tolshina * shirina * dlina * 0.000000001,
      square: shirina * dlina * 0.000001,
      count: count
    });

    this.set({
      resultV: this.get('volume') * count,
      resultP: Math.floor(count * dlina * 0.001)
    });
  }

});

app.collections.CalcCollection = Backbone.Collection.extend({

  model: app.models.CalcModel,

  initialize: function initialize() {
    console.log('test collection');
    console.log(this);

    this.add([{}]);
  }

});
'use strict';

app.models.CountriesPickerModel = Backbone.Model.extend({

  defaults: {
    country: null,
    city: null,
    countries: null,
    cities: null
  },

  initialize: function initialize() {
    var model = this;
    // Get countries from VK api
    model.loadCountries().then(function (countries) {
      model.set({ countries: countries.response.items });
    }, function (error) {
      console.log(error);
    });
  },

  loadCountries: function loadCountries() {
    return $.ajax({
      method: 'GET',
      dataType: 'jsonp',
      url: 'http://api.vk.com/method/database.getCountries?v=5.5&need_all=1&count=300'
    });
  },

  searchCities: function searchCities(countryId, searchString) {
    return $.ajax({
      method: 'GET',
      dataType: 'jsonp',
      url: 'http://api.vk.com/method/database.getCities?v=5.5&country_id=' + countryId + '&need_all=1&count=10&q=' + searchString
    });
  },

  setCountry: function setCountry(id) {
    var thisModel = this;
    // Find selected country from the list
    var selectedCountry = thisModel.get('countries').filter(function (obj) {
      return obj.id == id;
    });
    // Save country object into the model
    thisModel.set({ country: Object.assign({}, selectedCountry[0]) });
  },

  setCity: function setCity(id) {
    var thisModel = this;
    // Find selected city from the list
    var selectedCity = thisModel.get('cities').filter(function (obj) {
      return obj.id == id;
    });
    // Save city object into the model
    thisModel.set({ city: Object.assign({}, selectedCity[0]) });
  }

});
'use strict';

app.models.FiltersModel = Backbone.Model.extend({

  defaults: {
    categories: [{
      id: 1,
      title: 'Пиломатериалы',
      filters: [{
        label: null,
        title: '',
        level: 'child',
        type: 'checkbox',
        items: [{
          label: 'brus',
          value: 'Брус'
        }, {
          label: 'brusok',
          value: 'Брусок'
        }, {
          label: 'doska',
          value: 'Доска'
        }, {
          label: 'shpaly',
          value: 'Шпалы'
        }]
      }, {
        label: null,
        title: 'Порода',
        level: 'parent',
        items: [{
          label: 'hvoya',
          title: 'Хвойные',
          level: 'child',
          type: 'checkbox',
          items: [{
            label: 'el',
            value: 'Ель'
          }, {
            label: 'kedr',
            value: 'Кедр'
          }, {
            label: 'listvenica',
            value: 'Лиственница'
          }, {
            label: 'pihta',
            value: 'Пихта'
          }, {
            label: 'sosna',
            value: 'Сосна'
          }]
        }, {
          label: 'listva',
          title: 'Лиственные',
          level: 'child',
          type: 'checkbox',
          items: [{
            label: 'bereza',
            value: 'Береза'
          }, {
            label: 'buk',
            value: 'Бук'
          }, {
            label: 'vyaz',
            value: 'Вяз'
          }, {
            label: 'dub',
            value: 'Дуб'
          }, {
            label: 'klen',
            value: 'Клен'
          }, {
            label: 'lipa',
            value: 'Липа'
          }, {
            label: 'olha',
            value: 'Ольха'
          }, {
            label: 'osina',
            value: 'Осина'
          }, {
            label: 'topol',
            value: 'Тополь'
          }, {
            label: 'yasen',
            value: 'Ясень'
          }]
        }]
      }, {
        label: null,
        title: 'Влажность, %',
        level: 'child',
        type: 'checkbox',
        items: [{
          type: 'input',
          label: '',
          id: 'vlazhnost',
          from: null,
          to: null
        }, {
          label: 'tehn_sushka',
          value: 'Техническая сушка'
        }, {
          label: 'est_vlazhnost',
          value: 'Естественная влажность'
        }]
      }, {
        label: null,
        title: 'Характер обработки',
        level: 'child',
        type: 'checkbox',
        separator: true,
        items: [{
          label: 'obreznoi',
          value: 'Обрезной'
        }, {
          label: 'neobrabot',
          value: 'Необрезной'
        }, {
          label: 'stroganyi',
          value: 'Строганый'
        }]
      }, {
        label: null,
        title: 'Сорт',
        level: 'child',
        type: 'checkbox',
        items: [{
          label: 'otbornyi',
          value: 'Отборный'
        }, {
          label: 'pervyi',
          value: 'Первый'
        }, {
          label: 'vtoroi',
          value: 'Второй'
        }, {
          label: 'treti',
          value: 'Третий'
        }, {
          label: 'chetvertyi',
          value: 'Четвертый'
        }]
      }, {
        label: null,
        title: 'Размеры, мм',
        level: 'child',
        items: [{
          type: 'input-sizes',
          label: 'Толщина x Ширина x Длина',
          values: [{
            t: 0,
            s: 0,
            d: 0
          }]
        }]
      }]
    }, {
      id: 2,
      title: 'Лесоматериалы',
      filters: [{
        label: null,
        title: '',
        type: 'checkbox',
        items: [{
          label: 'delovaya',
          value: 'Деловая древесина'
        }, {
          label: 'drova',
          value: 'Дрова'
        }, {
          label: 'tehn_syrie',
          value: 'Технологическое сырье'
        }]
      }, {
        label: null,
        title: 'Порода',
        level: 'parent',
        separator: true,
        items: [{
          label: 'hvoya',
          title: 'Хвойные',
          level: 'child',
          type: 'checkbox',
          items: [{
            label: 'el',
            value: 'Ель'
          }, {
            label: 'kedr',
            value: 'Кедр'
          }, {
            label: 'listvenica',
            value: 'Лиственница'
          }, {
            label: 'pihta',
            value: 'Пихта'
          }, {
            label: 'sosna',
            value: 'Сосна'
          }]
        }, {
          label: 'listva',
          title: 'Лиственные',
          level: 'child',
          type: 'checkbox',
          items: [{
            label: 'bereza',
            value: 'Береза'
          }, {
            label: 'buk',
            value: 'Бук'
          }, {
            label: 'vyaz',
            value: 'Вяз'
          }, {
            label: 'dub',
            value: 'Дуб'
          }, {
            label: 'klen',
            value: 'Клен'
          }, {
            label: 'lipa',
            value: 'Липа'
          }, {
            label: 'olha',
            value: 'Ольха'
          }, {
            label: 'osina',
            value: 'Осина'
          }, {
            label: 'topol',
            value: 'Тополь'
          }, {
            label: 'yasen',
            value: 'Ясень'
          }]
        }]
      }, {
        label: null,
        subtitle: 'Размеры',
        title: 'Толщина(диаметр)',
        level: 'child',
        type: 'checkbox',
        items: [{
          label: 'from2to13',
          value: 'от 2 до 13 см'
        }, {
          label: 'from14to24',
          value: 'от 14 до 24 см'
        }, {
          label: '25more',
          value: 'более 26 см'
        }]
      }, {
        label: null,
        title: 'Длина',
        level: 'child',
        type: 'checkbox',
        items: [{
          label: 'do2',
          value: 'до 2 м'
        }, {
          label: 'ot2do6',
          value: 'от 2 до 6 м'
        }, {
          label: '6more',
          value: 'более 6 м'
        }]
      }, {
        label: null,
        title: 'Сорт',
        level: 'child',
        type: 'checkbox',
        items: [{
          label: 'pervi',
          value: 'Первый'
        }, {
          label: 'vtoroi',
          value: 'Второй'
        }, {
          label: 'treti',
          value: 'Третий'
        }, {
          label: 'chetverti',
          value: 'Четвертый'
        }]
      }]
    }, {
      id: 3,
      title: 'Древесные отходы',
      filters: [{
        label: null,
        title: '',
        level: 'child',
        type: 'checkbox',
        separator: true,
        items: [{
          label: 'gorbil',
          value: 'Горбыль'
        }, {
          label: 'struzhka',
          value: 'Стружка'
        }, {
          label: 'obapol',
          value: 'Обапол'
        }, {
          label: 'obrezki',
          value: 'Обрезки'
        }, {
          label: 'opilki',
          value: 'Опилки'
        }, {
          label: 'kora',
          value: 'Кора'
        }, {
          label: 'shepa',
          value: 'Щепа'
        }]
      }, {
        label: null,
        title: 'Порода',
        level: 'parent',
        items: [{
          label: 'hvoya',
          title: 'Хвойные',
          level: 'child',
          type: 'checkbox',
          items: [{
            label: 'el',
            value: 'Ель'
          }, {
            label: 'kedr',
            value: 'Кедр'
          }, {
            label: 'listvenica',
            value: 'Лиственница'
          }, {
            label: 'pihta',
            value: 'Пихта'
          }, {
            label: 'sosna',
            value: 'Сосна'
          }]
        }, {
          label: 'listva',
          title: 'Лиственные',
          level: 'child',
          type: 'checkbox',
          items: [{
            label: 'bereza',
            value: 'Береза'
          }, {
            label: 'buk',
            value: 'Бук'
          }, {
            label: 'vyaz',
            value: 'Вяз'
          }, {
            label: 'dub',
            value: 'Дуб'
          }, {
            label: 'klen',
            value: 'Клен'
          }, {
            label: 'lipa',
            value: 'Липа'
          }, {
            label: 'olha',
            value: 'Ольха'
          }, {
            label: 'osina',
            value: 'Осина'
          }, {
            label: 'topol',
            value: 'Тополь'
          }, {
            label: 'yasen',
            value: 'Ясень'
          }]
        }]
      }]
    }, {
      id: 4,
      title: 'Изделия из древесины',
      filters: [{
        label: null,
        title: '',
        level: 'parent',
        separator: true,
        items: [{
          label: 'materialy_dlya_pola',
          title: 'Материалы для покрытия пола',
          level: 'child',
          type: 'checkbox',
          items: [{
            label: 'doska_pola',
            value: 'Доска пола'
          }, {
            label: 'terrasnaya_doska',
            value: 'Террасная доска'
          }, {
            label: 'parket_doska',
            value: 'Паркетная доска'
          }]
        }, {
          label: 'obshiv_materialy',
          title: 'Обшивочные материалы',
          level: 'child',
          type: 'checkbox',
          items: [{
            label: 'vagonka',
            value: 'Вагонка'
          }, {
            label: 'evrovagonka',
            value: 'Евровагонка'
          }, {
            label: 'block_house',
            value: 'Блок-хаус'
          }, {
            label: 'imitaciya_brusa',
            value: 'Имитация бруса'
          }, {
            label: 'planken',
            value: 'Планкен'
          }]
        }, {
          label: 'pogon_izdeliya',
          title: 'Погонажные изделия',
          level: 'child',
          type: 'checkbox',
          items: [{
            label: 'nalichnik',
            value: 'Наличник'
          }, {
            label: 'plintus',
            value: 'Плинтус'
          }, {
            label: 'raskladka',
            value: 'Раскладка'
          }, {
            label: 'der_ugolok',
            value: 'Деревянный уголок'
          }, {
            label: 'dvernaya_korobka',
            value: 'Дверная коробка'
          }, {
            label: 'shtapiki',
            value: 'Штапики'
          }, {
            label: 'reiki',
            value: 'Рейки'
          }]
        }, {
          label: 'kleenyi_brus',
          title: 'Клееный брус',
          level: 'child',
          type: 'checkbox'
        }, {
          label: 'fanera_dsp_dvp_mdf_osp',
          title: 'Фанера, ДСП, ДВП, МДФ, ОСП',
          level: 'child',
          type: 'checkbox'
        }, {
          label: 'mebelnyi_shit',
          title: 'Мебельный щит',
          level: 'child',
          type: 'checkbox'
        }, {
          label: 'podokonnaya_doska',
          title: 'Подоконная доска',
          level: 'child',
          type: 'checkbox'
        }, {
          label: 'element_lestnic',
          title: 'Элементы лестниц',
          level: 'child',
          type: 'checkbox'
        }]
      }, {
        label: null,
        title: 'Порода',
        level: 'parent',
        items: [{
          label: 'hvoya',
          title: 'Хвойные',
          level: 'child',
          type: 'checkbox',
          items: [{
            label: 'el',
            value: 'Ель'
          }, {
            label: 'kedr',
            value: 'Кедр'
          }, {
            label: 'listvenica',
            value: 'Лиственница'
          }, {
            label: 'pihta',
            value: 'Пихта'
          }, {
            label: 'sosna',
            value: 'Сосна'
          }]
        }, {
          label: 'listva',
          title: 'Лиственные',
          level: 'child',
          type: 'checkbox',
          items: [{
            label: 'bereza',
            value: 'Береза'
          }, {
            label: 'buk',
            value: 'Бук'
          }, {
            label: 'vyaz',
            value: 'Вяз'
          }, {
            label: 'dub',
            value: 'Дуб'
          }, {
            label: 'klen',
            value: 'Клен'
          }, {
            label: 'lipa',
            value: 'Липа'
          }, {
            label: 'olha',
            value: 'Ольха'
          }, {
            label: 'osina',
            value: 'Осина'
          }, {
            label: 'topol',
            value: 'Тополь'
          }, {
            label: 'yasen',
            value: 'Ясень'
          }]
        }]
      }]
    }]

  },

  /*
  * Handler for choosing any filter
  *
  * @param filterLabel - unique label of the selected filter
  * @param type - checkbox or input
  * @param value - value of the selected filter
  * @param dataset - id of the row for sizes inputs
  *
   */
  setFilter: function setFilter(filterLabel, type, value, dataset) {
    var _this = this;

    var category = this.get('category');
    // For checkboxes
    if (type === 'checkbox') {
      // Iterate over all filters in current category
      category.filters.forEach(function (currentValue) {
        // Retrive array of inner filter items
        var items = _this.retriveItems(currentValue);
        // Process inner items
        if (items) {
          items.forEach(function (currentValue) {
            if (currentValue.label === filterLabel) {
              // Mark selected filter
              currentValue.selected = value;
            } else {
              var _items = _this.retriveItems(currentValue);
              if (_items) {
                _items.forEach(function (currentValue) {
                  if (currentValue.label === filterLabel) {
                    currentValue.selected = value;
                  }
                });
              }
            }
          });
        }
      });
    } else if (type === 'input-sizes') {
      //Input sizes
      category.filters.forEach(function (currentValue) {
        // Retrive array of inner filter items
        var items = _this.retriveItems(currentValue);
        // Process inner items
        if (items) {
          items.forEach(function (currentValue) {
            if (currentValue.type === 'input-sizes') {

              for (var i = 0; i < currentValue.values.length; i++) {
                if (parseInt(dataset) === i) {
                  currentValue.values[i][filterLabel] = value;
                }
              }
            }
          });
        }
      });
    } else {
      //Input from-to
      // Retrive Id and Destination
      var filterLabelArray = filterLabel.split('-'),
          id = filterLabelArray[0],
          destination = filterLabelArray[1];
      // Iterate over all filters in current category
      category.filters.forEach(function (currentValue) {
        // Retrive array of inner filter items
        var items = _this.retriveItems(currentValue);
        // Process inner items
        if (items) {
          items.forEach(function (currentValue) {
            if (currentValue.id === id) {
              currentValue[destination] = value;
              currentValue.selected = true;
            }
          });
        }
      });
    }
  },

  /*
   * Get object and return array if items or false
   *
   */
  retriveItems: function retriveItems(object) {
    if (object.hasOwnProperty('items')) {
      return object.items;
    } else {
      return false;
    }
  },

  showFilters: function showFilters() {
    var catId = this.get('catId');
    var categories = this.get('categories');
    var category = _.findWhere(categories, { id: catId });
    // Selected filters category
    this.set({ category: category });
  },

  addSize: function addSize() {
    var _this2 = this;

    var category = this.get('category'),
        sizeRow = {
      t: 0,
      s: 0,
      d: 0
    };

    category.filters.forEach(function (currentValue) {
      // Retrive array of inner filter items
      var items = _this2.retriveItems(currentValue);
      // Process inner items
      if (items) {
        items.forEach(function (currentValue) {
          if (currentValue.type === 'input-sizes') {
            currentValue.values.push(sizeRow);
          }
        });
      }
    });
    this.trigger('change', this);
  },

  removeSize: function removeSize(position) {
    var _this3 = this;

    var category = this.get('category'),
        sizeRow = {
      t: 0,
      s: 0,
      d: 0
    };

    category.filters.forEach(function (currentValue) {
      // Retrive array of inner filter items
      var items = _this3.retriveItems(currentValue);
      // Process inner items
      if (items) {
        items.forEach(function (currentValue) {
          if (currentValue.type === 'input-sizes') {
            currentValue.values.splice(position, 1);
          }
        });
      }
    });
    this.trigger('change', this);
  }

});
'use strict';

app.views.adView = Mn.View.extend({

  template: tpl.templates.ad_item,

  regions: {
    message: '.message'
  },

  ui: {
    arrow: '.arrow',
    item: '.ad-item',
    sendMessage: '.send-form',
    categoryBlock: '.category',
    message: '.message',
    close: '.close',
    table: '.left-border',
    tab: '.tab',
    star: '.star',
    adDescription: '.ad-description',
    backBtn: '.back'
  },

  events: {
    'click @ui.arrow': 'changeAdView',
    'click @ui.tab': 'newTab',
    'click @ui.star': 'addStar',
    'click @ui.sendMessage': 'showMessageForm',
    'click @ui.close': function clickUiClose() {
      this.getRegion('message').empty();
      this.ui.message.addClass('hidden');
      this.ui.table.removeClass('hidden');
    },
    'click @ui.backBtn': function clickUiBackBtn() {
      this.getRegion('message').empty();
      this.ui.message.addClass('hidden');
      this.ui.table.removeClass('hidden');
    }
  },

  initialize: function initialize(options) {
    this.model.set({
      isLoggedIn: options.isLoggedIn,
      currentUserId: options.currentUserId
    }, { silent: true });
  },

  /*
  *   Expanded/hide filter section
  */
  changeAdView: function changeAdView() {
    this.ui.item.toggleClass('expanded');
    // toggle ad description for mobile
    this.ui.adDescription.toggleClass('hidden-xs');
  },

  /*
   *  Show send message form
   */
  showMessageForm: function showMessageForm() {
    this.ui.table.addClass('hidden');
    this.ui.message.removeClass('hidden');
    this.showChildView('message', new app.views.SendMessageFormView({ userId: this.model.get('userId') }));
  },

  /*
   *  Go to full page view
   */
  newTab: function newTab() {
    //console.log('newTab');
    //console.log(this.model.get('_id'));
  },

  addStar: function addStar() {
    var favorites = this.model.get('favorites');
    // If array not empty
    if (favorites.length) {
      var userId = brd.controllers.getUserId();
      // If not favorited before
      if (!favorites.includes(userId)) {
        // Add to favorite
        // TODO: run service request
      } else {
          // TODO: remove from favorite
        }
    } else {
        // Add to favorite
        // TODO: run service request
      }
  }

});
"use strict";

app.views.FaqView = Mn.View.extend({

  template: tpl.templates.faq,

  ui: {},

  events: {}

});
"use strict";

app.views.FooterView = Mn.View.extend({
  template: tpl.templates.footer
});
'use strict';

app.views.ForbiddenView = Mn.View.extend({

  template: tpl.templates.forbidden,

  regions: {
    modalSection: '.modal-section'
  },

  ui: {
    'login': '.login',
    'register': '.register'
  },

  events: {
    'click @ui.login': 'showLoginView',
    'click @ui.register': 'showRegistrationView'
  },

  showLoginView: function showLoginView() {
    this.showChildView('modalSection', new app.views.LoginView({
      model: new app.models.LoginModel()
    }));
  },

  showRegistrationView: function showRegistrationView() {
    this.showChildView('modalSection', new app.views.RegistrationView({
      model: new app.models.RegistrationModel()
    }));
  }

});
'use strict';

app.views.HeaderView = Mn.View.extend({

  template: tpl.templates.header,

  regions: {
    modalSection: '.modal-section'
  },

  ui: {
    hamburger: '.hamburger',
    navigation: '.navigation',
    registrationBtn: '.registration',
    loginBtn: '.login',
    logout: '.logout',
    userProfile: '.user-profile'
  },

  events: {
    'click @ui.hamburger': 'toggleMobileMenu',
    'click @ui.registrationBtn': 'showRegistrationView',
    'click @ui.loginBtn': 'showLoginView',
    'click @ui.logout': function clickUiLogout() {
      brd.controllers.logout();
      app.user = null;
      brd.router.navigateToRoute('home');
      window.location.reload();
    },
    'click @ui.userProfile': function clickUiUserProfile() {
      brd.router.navigateToRoute('profile', 'dashboard');
    }
  },

  initialize: function initialize() {
    var thisView = this;
    thisView.listenTo(app.user, 'change', function () {
      thisView.model.updateUser();
      thisView.render();
    });
  },

  showRegistrationView: function showRegistrationView() {
    this.showChildView('modalSection', new app.views.RegistrationView({
      model: new app.models.RegistrationModel()
    }));
  },

  showLoginView: function showLoginView() {
    this.showChildView('modalSection', new app.views.LoginView({
      model: new app.models.LoginModel()
    }));
  },

  /*
   * Mobile navigation handler (hamburger)
   *
   */
  toggleMobileMenu: function toggleMobileMenu() {
    this.ui.hamburger.toggleClass('closeBtn');
    this.ui.navigation.toggleClass('hidden');
  }

});
'use strict';

app.views.MainView = Mn.View.extend({

  template: tpl.templates.main,

  regions: {
    headerRegion: 'header',
    bodyRegion: '.content',
    footerRegion: 'footer'
  },

  initialize: function initialize() {
    // Initialize main content region
    brd.regions.bodyRegion = this.getRegion('bodyRegion');
  },

  onRender: function onRender() {
    this.showChildView('headerRegion', new app.views.HeaderView({ model: new app.models.HeaderModel() }));
    this.showChildView('footerRegion', new app.views.FooterView());
  }

});
'use strict';

app.views.CalcTableView = Mn.View.extend({

  template: tpl.templates.calc_table,

  onRender: function onRender() {

    console.log('CalcTableView');
  }
});
'use strict';

app.views.CalcView = Mn.View.extend({

  template: tpl.templates.calc,

  regions: {
    tableRegion: '.table-region'
  },

  ui: {
    form: 'form',
    tolshina: '#tolshina',
    shirina: '#shirina',
    dlina: '#dlina',
    tsdc: '#tolshina, #shirina, #dlina, #count',
    count: '#count',
    addBtn: '.add-to-table'
  },

  events: {
    'change @ui.tsdc': 'calculateResult',
    'click @ui.addBtn': 'addToTable'
  },

  modelEvents: {
    'change': 'render'
  },

  onAttach: function onAttach() {
    this.showChildView('tableRegion', new app.views.CalcTableView({
      model: this.model
    }));
  },

  onRender: function onRender() {
    if (this.model.get('resultV') > 0) {
      this.ui.addBtn.removeAttr('disabled');
    } else {
      this.ui.addBtn.attr('disabled');
    }
  },

  calculateResult: function calculateResult() {
    var t = this.ui.tolshina.val(),
        s = this.ui.shirina.val(),
        d = this.ui.dlina.val(),
        c = this.ui.count.val();

    this.model.calculateResult(t, s, d, c);
  },

  addToTable: function addToTable() {
    console.log('addBtn');
  }

});
"use strict";

app.views.AdsHomeCollectionView = Mn.CollectionView.extend({

  childView: app.views.adView,

  initialize: async function initialize(options) {
    var parameters = null;

    if (options.filters) {
      parameters = options.filters;
      // After changing filter model will exist
      this.collection = new app.collections.AdsHomeCollection({ parameters: parameters });
    } else {
      this.collection = new app.collections.AdsHomeCollection();
    }
    this.childViewOptions = { isLoggedIn: brd.controllers.isLoggedIn() };
    // Reset collection to show spinner when filtering
    this.collection.reset();
    this.emptyView = app.views.SpinnerView;

    // Start fetching collection data
    try {
      await this.collection.fetch();
      // If nothing found
      if (!this.collection.length) {
        this.emptyView = app.views.EmptyView;
        this.render();
      }
    } catch (error) {
      console.log(error);
    }
  }

});
'use strict';

app.views.CompaniesHomeView = Mn.View.extend({

  template: tpl.templates.companies_home,

  initialize: function initialize() {
    console.log('initialize - CompaniesHomeView');
  }

});
'use strict';

app.views.FiltersHomeView = Mn.View.extend({

  template: tpl.templates.filter_home,

  regions: {
    countriesPicker: '.country-picker'
  },

  ui: {
    addNewBtn: '.add-new',
    toggleMobileFilters: '.show-mobile-filters',
    filters: '.filters-wrapper',
    closeFiltersBtn: '.close-btn',
    categorySelect: '#category',
    type: 'input[name=type]',
    object: 'input[name=object]',
    dropFilter: '.drop-filter'
  },

  events: {
    'click @ui.addNewBtn': 'addNew',
    'click @ui.toggleMobileFilters': 'toggleFilters',
    'click @ui.closeFiltersBtn': 'toggleFilters'
  },

  modelEvents: {
    'change:country': function changeCountry() {
      this.triggerMethod('select:country', this);
    },
    'change:city': function changeCity() {
      this.triggerMethod('select:city', this);
    }
  },

  triggers: {
    'change @ui.categorySelect': 'select:category',
    'change @ui.type': 'select:type',
    'change @ui.object': 'select:object',
    'click @ui.dropFilter': 'clear:filter'
  },

  onSelectCategory: function onSelectCategory(view, event) {
    var selectedCategoryId = parseInt(event.target.value);
    this.model.set({ selectedCategoryId: selectedCategoryId });
  },

  onSelectType: function onSelectType(view, event) {
    var type = this.model.get('type');
    var arr = [];
    // copy existed array into new one
    if (type && type.length) {
      arr = type.slice(0);
    }
    // on select checkbox
    if (event.target.checked) {
      arr.push(event.target.value);
    } else {
      // on deselect checkbox
      var index = arr.indexOf(event.target.value);
      arr.splice(index, 1);
    }
    // set type to NULL if empty array
    arr = arr.length ? arr : null;
    // Save type
    this.model.set({
      type: arr
    });
  },

  onSelectObject: function onSelectObject(view, event) {
    var object = this.model.get('object');
    var arr = [];
    // copy existed array into new one
    if (object && object.length) {
      arr = object.slice(0);
    }
    // on select checkbox
    if (event.target.checked) {
      arr.push(event.target.value);
    } else {
      // on deselect checkbox
      var index = arr.indexOf(event.target.value);
      arr.splice(index, 1);
    }
    // set object to NULL if empty array
    arr = arr.length ? arr : null;
    // Save object
    this.model.set({
      object: arr
    });
  },

  addNew: function addNew() {
    // Check is user logged in
    if (brd.controllers.isLoggedIn()) {
      // Redirect to add view
      brd.router.navigateToRoute('profile', 'ads', 'new');
    } else {
      // Show forbidden view
      brd.router.navigateToRoute('forbidden');
    }
  },

  toggleFilters: function toggleFilters() {
    this.ui.toggleMobileFilters.toggleClass('opened');
    this.ui.filters.toggleClass('visible');
  },

  initialize: function initialize() {
    // Show country picker
    this.showChildView('countriesPicker', new app.views.CountriesPickerView({ model: this.model.get('countriesModel') }));
  }

});
'use strict';

app.views.HomeContentView = Mn.View.extend({

  template: tpl.templates.home_content,

  ui: {
    listRegion: '.ads-list'
  },

  regions: {
    adsList: '@ui.listRegion'
  },

  onRender: function onRender() {
    // Main ads section
    if (this.model.get('filters')) {
      this.reRenderCollection();
    } else {
      this.showChildView('adsList', new app.views.AdsHomeCollectionView({}));
    }
  },

  reRenderCollection: function reRenderCollection() {
    this.showChildView('adsList', new app.views.AdsHomeCollectionView({
      filters: this.model.get('filters')
    }));
  }

});
'use strict';

app.views.HomeView = Mn.View.extend({

  template: tpl.templates.home,

  ui: {
    mobileFilterBtn: '.mobile-filter-btn .btn',
    closeFilter: 'a.close-btn',
    homeContent: '.home-content',
    upBtn: '.up',
    companies: '.companies-home'
  },

  regions: {
    filter: '.filter-home',
    adsFilter: '.content-filter',
    homeContentRegion: '@ui.homeContent',
    companiesList: '@ui.companies'
  },

  events: {
    'click @ui.mobileFilterBtn': function clickUiMobileFilterBtn() {
      $('.filters').toggleClass('visible');
    },
    'click @ui.closeFilter': function clickUiCloseFilter() {
      $('.filters').removeClass('visible');
    },
    'click @ui.upBtn': function clickUiUpBtn() {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
    }
  },

  childViewEvents: {
    'select:category': 'reRenderCollection',
    'select:country': 'reRenderCollection',
    'select:city': 'reRenderCollection',
    'select:type': 'reRenderCollection',
    'select:object': 'reRenderCollection',
    'clear:filter': 'render'
  },

  onRender: function onRender() {
    // Filter section
    this.showChildView('filter', new app.views.FiltersHomeView({
      model: new app.models.FiltersHomeModel()
    }));
    // Content
    this.showChildView('homeContentRegion', new app.views.HomeContentView({
      model: new app.models.HomeContentModel({ filters: null })
    }));
    // Companies on home
    this.showChildView('companiesList', new app.views.CompaniesHomeView());
  },

  reRenderCollection: function reRenderCollection(childView) {
    var filtersModel = childView.model.attributes;
    // Re-render content view if filters has been selected
    this.showChildView('homeContentRegion', new app.views.HomeContentView({
      model: new app.models.HomeContentModel({ filters: filtersModel })
    }));
  }

});
'use strict';

app.views.AddAvatarView = Mn.View.extend({

  template: tpl.templates.avatar,

  ui: {
    avatarModal: '#avatar',
    uploader: '#upload',
    uploadPreview: '#upload-preview'
  },

  events: {
    'hide.bs.modal': function hideBsModal() {
      this.destroy();
    },
    'change @ui.uploader': 'uploadImage'
  },

  onRender: function onRender() {
    this.ui.avatarModal.modal('show');
  },

  uploadImage: function uploadImage(event) {
    // Clear preview div
    this.ui.uploadPreview.empty();
    // Init croppie
    var $uploadCrop = this.ui.uploadPreview.croppie({
      viewport: {
        width: 200,
        height: 200,
        type: 'circle'
      },
      boundary: {
        width: 300,
        height: 300
      },
      mouseWheelZoom: true
    });
    // Preview image
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = function (event) {
        $uploadCrop.croppie('bind', {
          url: event.target.result
        }).then(function () {
          // console.log('jQuery bind complete');
        });
      };
      reader.readAsDataURL(event.target.files[0]);
    } else {
      console.log("Sorry - you're browser doesn't support the FileReader API");
    }

    // Bind upload event action
    $('.upload-avatar').on('click', function () {
      $uploadCrop.croppie('result', {
        type: 'canvas',
        size: 'viewport'
      }).then(function (resp) {
        $.ajax({
          url: 'api/upload/profile',
          method: 'POST',
          contentType: 'application/json',
          dataType: 'json',
          data: JSON.stringify({
            'user': brd.controllers.getUserId(),
            'image': resp
          })
        }).done(function () {
          $("[data-dismiss=modal]").trigger({ type: "click" });
          var message = '\u0424\u043E\u0442\u043E \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E. \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0438 \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0447\u0442\u043E\u0431\u044B \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442.';
          $('.alert').addClass('alert-success').text(message).show();
        }).fail(function () {
          $("[data-dismiss=modal]").trigger({ type: "click" });
          $('.alert').addClass('alert-danger').text('Ошибка загрузки изображения.').show();
        });
      });
    });
  }

});
'use strict';

app.views.LoginView = Mn.View.extend({

  template: tpl.templates.login,

  ui: {
    loginModal: '#login',
    loginForm: '#login-form',
    email: '#email',
    password: '#password',
    loader: '.loader-wrapper',
    danger: '.alert-danger'
  },

  events: {
    'hide.bs.modal': function hideBsModal() {
      this.destroy();
    },
    'click .forgot-password': function clickForgotPassword() {
      this.ui.loginModal.modal('hide');
      this.destroy();
      this.showForgotView();
    }
  },

  onRender: function onRender() {
    var thisView = this;
    thisView.ui.loginModal.modal('show');
    thisView.formAddValidation();
  },

  /*
   * Validation rules for the Login form.
   *
   */
  formAddValidation: function formAddValidation() {
    var thisView = this;
    thisView.ui.loginForm.validate({
      rules: {
        email: {
          required: true,
          email: true,
          maxlength: 120,
          minlength: 4
        },
        password: {
          required: true,
          maxlength: 100,
          minlength: 5
        }
      },
      messages: {
        email: {
          required: 'Введите e-mail',
          email: 'Проверьте правильность ввода e-mail',
          maxlength: jQuery.validator.format('E-mail не должен превышать {0} символов'),
          minlength: jQuery.validator.format('E-mail должен содержать минимум {0} символов')
        },
        password: {
          required: 'Введите пароль',
          maxlength: jQuery.validator.format('Пароль не должен превышать {0} символов'),
          minlength: jQuery.validator.format('Пароль должен содержать минимум {0} символов')
        }
      },

      submitHandler: function submitHandler() {
        thisView.loginHandler();
      }
    });
  },

  loginHandler: function loginHandler() {
    var thisView = this;
    // Show loader
    thisView.ui.loginForm.hide();
    thisView.ui.loader.show();
    thisView.model.set({
      email: thisView.ui.email.val(),
      password: thisView.ui.password.val()
    });
    // Login request to the server
    thisView.model.login().then(function (data) {
      // Destroy modal
      thisView.destroy();
      brd.controllers.hideModalFully();
      // Save token
      brd.controllers.saveToken(data.token);
      // Duplicate from app.js ---
      // Open setting page
      if (brd.controllers.isLoggedIn()) {
        var useId = brd.controllers.getUserId();
        app.user = new app.models.UserModel({ _id: useId });
        app.user.fetch().then(function () {
          // console.log('SUCCESS');
          //console.log(app.user.attributes);
        }, function () {
          // console.log('FAIL');
          //console.log(app.user.attributes);
        });
      }
      // Navigate to user dashboard after login successful
      brd.router.navigateToRoute('profile', 'dashboard');
    }, function () {
      thisView.ui.loader.hide();
      thisView.ui.loginForm.fadeIn();
      thisView.ui.danger.html('Ошибка! Неверный email или пароль.').fadeIn();
    });
  },

  showForgotView: function showForgotView() {
    // this.showChildView('modalSection', new app.views.ForgotView());
  }

});
'use strict';

app.views.RegistrationView = app.views.HeaderView.extend({

  template: tpl.templates.registration,

  ui: {
    registrationModal: '#registration',
    email: '#email',
    password: '#password',
    confirmPassword: '#confirm_password',
    form: '#registration-form',
    loader: '.loader-wrapper',
    danger: '.alert-danger',
    success: '.alert-success',
    checkmark: '.checkmark'
  },

  events: {
    'hide.bs.modal': function hideBsModal() {
      this.destroy();
    },
    'click @ui.checkmark': function clickUiCheckmark() {
      this.ui.registrationModal.modal('hide');
      this.destroy();
    }
  },

  onRender: function onRender() {
    this.ui.registrationModal.modal('show');
    this.formAddValidation();
  },

  /*
   * Validation rules for the Registration form.
   *
   */
  formAddValidation: function formAddValidation() {
    var thisView = this;
    thisView.ui.form.validate({
      rules: {
        email: {
          required: true,
          email: true,
          maxlength: 120,
          minlength: 4
        },
        password: {
          required: true,
          maxlength: 100,
          minlength: 5
        },
        confirm_password: {
          required: true,
          equalTo: '#password',
          maxlength: 100,
          minlength: 5
        },
        confirm: {
          required: true
        }
      },
      messages: {
        email: {
          required: 'Введите e-mail',
          email: 'Проверьте правильность ввода e-mail',
          maxlength: jQuery.validator.format('E-mail не должен превышать {0} символов'),
          minlength: jQuery.validator.format('E-mail должен содержать минимум {0} символов')
        },
        password: {
          required: 'Введите пароль',
          maxlength: jQuery.validator.format('Пароль не должен превышать {0} символов'),
          minlength: jQuery.validator.format('Пароль должен содержать минимум {0} символов')
        },
        confirm_password: {
          required: 'Введите пароль еще раз',
          equalTo: 'Пароль не совпадает с введеным выше значением',
          maxlength: jQuery.validator.format('Пароль не должен превышать {0} символов'),
          minlength: jQuery.validator.format('Пароль должен содержать минимум {0} символов')
        },
        confirm: {
          required: 'Ознакомьтесь с правилами'
        }
      },

      submitHandler: function submitHandler() {
        thisView.handleSubmitClick();
      }
    });
  },

  /*
   * Check form data before save
   *
   */
  handleSubmitClick: function handleSubmitClick() {
    var thisView = this;
    // Show loader
    thisView.ui.form.hide();
    thisView.ui.loader.show();
    // Check if email already exist
    thisView.model.isEmailExist(thisView.ui.email.val()).then(function (data) {
      if (data.exist) {
        thisView.ui.loader.hide();
        thisView.ui.form.fadeIn();
        thisView.ui.danger.html('E-mail занят.').fadeIn();
      } else {
        thisView.saveUser();
      }
    }, function (error) {
      thisView.ui.loader.hide();
      thisView.ui.form.fadeIn();
      thisView.ui.danger.html('Ошибка! Поробуйте еще раз чуть позже.').fadeIn();
    });
  },

  /*
   * Save user
   *
   */
  saveUser: function saveUser() {
    var thisView = this;

    thisView.model.set({
      email: thisView.ui.email.val(),
      password: thisView.ui.password.val(),
      confirmPassword: thisView.ui.confirmPassword.val()
    });

    thisView.model.save(null, {
      success: function success() {
        thisView.ui.loader.hide();
        thisView.ui.danger.hide();
        thisView.ui.success.html('Для завершения регистрации пройдите по ссылке в письме.').fadeIn();
        thisView.ui.checkmark.fadeIn(1000);
      },
      error: function error() {
        thisView.ui.loader.hide();
        thisView.ui.danger.html('Ошибка! Поробуйте еще раз чуть позже.').fadeIn();
        thisView.ui.form.fadeIn();
      }
    });
  }

});
'use strict';

app.views.AddAdView = Mn.View.extend({

  template: tpl.templates.add_ad,

  regions: {
    leftNavRegion: '.left-navigation',
    countriesPicker: '.country-picker',
    filters: '.filters'
  },

  ui: {
    addAdForm: '#add-ad-form',
    type: 'input[name=type]',
    object: 'input[name=object]',
    photoInput: '.photo-input',
    category: '#category',
    title: '#title',
    description: '#description',
    price: '#price',
    expirationDate: '#expirationDate',
    getContacts: 'input[name=getContacts]',
    profileRadio: '#profileRadio',
    companyRadio: '#companyRadio',
    otherRadio: '#otherRadio',
    otherPhoneWrapper: '.otherPhoneWrapper',
    otherPhone: '#otherPhone',
    backBtn: '.back',
    marker: '.marker',
    buyMarker: '.buy',
    sellMarker: '.sell'
  },

  events: {
    'change @ui.getContacts': 'setContacts',
    'change @ui.category': 'setFilter',
    'change @ui.type': 'changeType',
    'change @ui.object': 'changeObject',
    'click @ui.backBtn': function clickUiBackBtn() {
      brd.router.navigateToRoute('profile', 'ads');
    },
    'change @ui.photoInput': 'addPhoto'
  },

  initialize: function initialize() {
    var thisView = this;
    // Initialize left navigation region
    brd.regions.leftNavRegion = thisView.getRegion('leftNavRegion');
    // Show country picker
    thisView.showChildView('countriesPicker', new app.views.CountriesPickerView({ model: thisView.model.get('countriesModel') }));
    // Disable radio btns by default
    thisView.ui.otherPhoneWrapper.hide();
    thisView.ui.companyRadio.prop('disabled', true);
    brd.controllers.imageName = null;
  },

  onRender: function onRender() {
    this.formAddValidation();
  },

  /*
   * Validation rules for the add Ad form.
   *
   */
  formAddValidation: function formAddValidation() {
    var thisView = this;
    thisView.ui.addAdForm.validate({
      rules: {
        type: {
          required: true
        },
        object: {
          required: true
        },
        category: {
          required: true
        },
        title: {
          required: true,
          maxlength: 120
        },
        otherPhone: {
          required: true
        },
        country: {
          required: true
        },
        city: {
          required: true
        }
      },
      messages: {
        type: {
          required: 'Укажите тип объявления'
        },
        object: {
          required: 'Укажите объект объявления'
        },
        category: {
          required: 'Выберите раздел'
        },
        title: {
          required: 'Введите заголовок',
          maxlength: jQuery.validator.format('Заголовок не должен превышать {0} символов')
        },
        otherPhone: {
          required: 'Введите контактный телефон'
        },
        country: {
          required: 'Выберите страну'
        },
        city: {
          required: 'Введите название города'
        },
        inputFilter: {
          number: '',
          min: ''
        }
      },

      errorPlacement: function errorPlacement(error, element) {
        if (element.attr('name') === 'type') error.insertAfter('.typeError');else if (element.attr('name') === 'object') error.insertAfter('.objectError');else if (element.attr('id') === 'otherPhone') error.insertAfter('.otherPhoneError');else error.insertAfter(element);
      },

      submitHandler: function submitHandler() {
        thisView.saveAd();
      }
    });
  },

  /*
   * Save Ad
   *
   */
  saveAd: function saveAd() {
    var thisView = this,
        contacts = thisView.model.get('contacts') || [];
    // Set selected filters
    this.model.setCategoryObject();
    // Set model to save it to the server
    thisView.model.set({
      title: thisView.ui.title.val().trim(),
      description: thisView.ui.description.val().trim(),
      price: thisView.ui.price.val().trim(),
      expirationDate: thisView.returnExpirationDate(thisView.ui.expirationDate.val()),
      userId: app.user.get('_id')
    });
    // Check if image uploaded
    if (brd.controllers.imageName) {
      thisView.model.set({
        photo: brd.controllers.imageName + '.png'
      });
    } else {
      thisView.model.set({ photo: null });
    }
    // Set name if exist
    if (app.user.get('name') || app.user.get('lastName') || app.user.get('middleName')) {
      thisView.model.set({
        userName: {
          name: app.user.get('name'),
          lastName: app.user.get('lastName'),
          middleName: app.user.get('middleName')
        }
      });
    } else {
      thisView.model.set({
        userName: null
      });
    }
    // Set contacts
    switch (contacts.takeFrom) {
      case 'profile':
        var phone1 = app.user.get('phone1'),
            phone2 = app.user.get('phone2');
        // check if profile phones are exist
        if (phone1 || phone2) {
          contacts.phones.push(phone1, phone2);
          // Set contacts to the model
          thisView.model.set({ contacts: contacts });
        }
        break;
      case 'other':
        contacts.phones.push(thisView.ui.otherPhone.val().trim());
        // Set contacts to the model
        thisView.model.set({ contacts: contacts });
        break;
      default:
        console.log('default');
    }
    // Save the model into database
    thisView.model.save(null, {
      headers: {
        'Authorization': 'Bearer ' + brd.controllers.getToken()
      },
      success: function success() {
        // Redirect to Ads profile page
        brd.router.navigateToRoute('profile', 'ads');
      },
      error: function error() {
        console.log('error');
      }
    });
  },

  /*
   * Set contacts based on user selection
   *
   */
  setContacts: function setContacts(event) {
    var thisView = this;
    if (event.target.value === 'other') {
      thisView.ui.otherPhoneWrapper.show();
      thisView.model.set('contacts', {
        takeFrom: 'other',
        phones: []
      });
    } else {
      thisView.ui.otherPhoneWrapper.hide();
      thisView.model.set('contacts', {
        takeFrom: 'profile',
        phones: []
      });
    }
  },

  /*
   * Show filter section for selected category
   *
   */
  setFilter: function setFilter(event) {
    var selectedCategoryId = parseInt(event.target.value);
    // If selected some item
    if (selectedCategoryId) {
      var categoryModel = this.model.get('categoryModel');
      // Show filters in child view
      this.showChildView('filters', new app.views.FiltersView({
        model: new app.models.FiltersModel({ catId: selectedCategoryId })
      }));
      this.model.set({ selectedCategoryId: selectedCategoryId });
    } else {
      // Clear region
      this.getRegion('filters').empty();
      this.model.set({ selectedCategoryId: null });
    }
  },

  /*
   * Count Expiration date
   *
   * @param days - plus to current date
   */
  returnExpirationDate: function returnExpirationDate(days) {
    var result = new Date();
    result.setDate(result.getDate() + parseInt(days));
    return result;
  },

  /*
   * Handle change type checkbox
   *
   */
  changeType: function changeType(event) {
    // Hide both first
    this.ui.marker.addClass('hidden');
    switch (event.target.value) {
      case 'buy':
        this.ui.buyMarker.removeClass('hidden');
        break;
      case 'sell':
        this.ui.sellMarker.removeClass('hidden');
        break;
    }
    this.model.set({
      type: event.target.value
    });
  },

  /*
   * Handle change object checkbox
   *
   */
  changeObject: function changeObject(event) {
    this.model.set({
      object: event.target.value
    });
  },

  addPhoto: function addPhoto(event) {
    // Prepare new name for uploaded image
    brd.controllers.imageName = brd.controllers.getUserId() + '-' + Date.now();

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = function (event) {
        // Check size of the uploaded image
        var image = new Image();
        image.src = event.target.result;
        image.onload = function () {
          $('#preview').css('background', 'url(' + event.target.result + ')').css('background-size', 'cover');
          $('#preview .ion-image').hide();
          $('.image-error-message').hide();
          // Prepare formData object
          var input = document.getElementById('photo');
          var formData = new FormData();
          formData.append('newfilename', brd.controllers.imageName);
          formData.append('photo', input.files[0]);
          // Upload image
          $.ajax({
            url: 'api/upload/ad',
            method: 'POST',
            data: formData,
            processData: false,
            contentType: false
          }).done(function (response) {
            if (!response.imageUploaded) {
              $('.image-error-message').text('Ошибка загрузки изображения.');
              $('.image-error-message').removeClass('hidden');
              $('.image-error-message').show();
            }
          }).fail(function () {
            $('.image-error-message').text('Ошибка загрузки изображения.');
            $('.image-error-message').removeClass('hidden');
            $('.image-error-message').show();
          });
        };
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }

});
'use strict';

app.views.AdsCollectionView = Mn.CollectionView.extend({

  collection: new app.collections.AdsCollection(),

  childView: app.views.adView,

  initialize: function initialize() {
    var _this = this;

    this.childViewOptions = {
      isLoggedIn: brd.controllers.isLoggedIn(),
      currentUserId: brd.controllers.getUserId()
    };
    this.emptyView = app.views.SpinnerView;

    this.collection.fetch().then(function () {
      if (!_this.collection.length) {
        // Show message if no items
        _this.emptyView = app.views.MessageView;
        _this.emptyViewOptions = {
          message: 'Список пуст.',
          placeholder: true
        };
        _this.render();
      }
    }, function () {
      _this.emptyView = app.views.MessageView;
      _this.emptyViewOptions = {
        message: 'Ошибка сервиса. Попробуйте обновить страницу.',
        placeholder: false
      };
      _this.render();
    });
  }

});
'use strict';

app.views.AdsView = Mn.View.extend({

  template: tpl.templates.ads,

  ui: {
    leftNavRegion: '.left-navigation',
    listRegion: '.ads-list',
    addButton: '.add-button',
    showArchive: '.go-to-archive'
  },

  regions: {
    leftNav: '@ui.leftNavRegion',
    adsList: '@ui.listRegion'
  },

  events: {
    'click @ui.addButton': function clickUiAddButton() {
      brd.router.navigateToRoute('profile', 'ads', 'new');
    },
    'click @ui.showArchive': function clickUiShowArchive() {
      // TODO: show archive in case any ads axist in archive
    }
  },

  initialize: function initialize() {
    // Initialize left navigation region
    brd.regions.leftNavRegion = this.getRegion('leftNav');
  },

  onRender: function onRender() {
    this.showChildView('adsList', new app.views.AdsCollectionView({
      model: new app.models.AdsListModel()
    }));
  }

});
'use strict';

app.views.DashboardView = Mn.View.extend({

  template: tpl.templates.dashboard,

  regions: {
    leftNavRegion: '.left-navigation'
  },

  ui: {},

  events: {},

  initialize: function initialize() {
    // Initialize left navigation region
    brd.regions.leftNavRegion = this.getRegion('leftNavRegion');
  }

});
'use strict';

app.views.LeftNavigation = Mn.View.extend({

  template: tpl.templates.left_navigation,

  templateContext: function templateContext() {
    return {
      activePage: this.getOption('page')
    };
  }

});
'use strict';

app.views.SettingsAccountSectionView = Mn.View.extend({

  template: tpl.templates.settings_account_section,

  regions: {},

  initialize: function initialize() {},

  onRender: function onRender() {},

  templateContext: function templateContext() {
    return {
      email: this.getOption('email')
    };
  }

});
'use strict';

app.views.SettingsProfileSectionView = Mn.View.extend({

  template: tpl.templates.settings_profile_section,

  regions: {
    countriesPicker: '.countries-picker',
    modalSection: '.modal-avatar-section'
  },

  ui: {
    alert: '.alert',
    form: 'form',
    photo: '.avatar',
    lastName: '#lastName',
    name: '#name',
    middleName: '#middleName',
    work: '#work',
    position: '#position',
    workEmail: '#workEmail',
    phone1: '#phone1',
    phone2: '#phone2',
    saveProfile: '.saveProfile'
  },

  events: {
    'click @ui.saveProfile': 'saveProfileData',
    'click @ui.photo': 'showAddAvatarView'
  },

  initialize: function initialize() {
    var thisView = this;
    // Get user data from server
    thisView.model.fetch().then(function () {
      thisView.render();
      // Show countries picker
      thisView.showChildView('countriesPicker', new app.views.CountriesPickerView({ model: thisView.model.get('countriesModel') }));
    }, function () {
      console.log('FAIL: Get user data from server');
    });
  },

  showAddAvatarView: function showAddAvatarView() {
    this.showChildView('modalSection', new app.views.AddAvatarView());
  },

  saveProfileData: function saveProfileData(event) {
    var thisView = this;
    event.preventDefault();
    // Update model
    thisView.model.set({
      lastName: thisView.ui.lastName.val().trim(),
      name: thisView.ui.name.val().trim(),
      middleName: thisView.ui.middleName.val().trim(),
      work: thisView.ui.work.val().trim(),
      position: thisView.ui.position.val().trim(),
      phone1: thisView.ui.phone1.val().trim(),
      phone2: thisView.ui.phone2.val().trim()
    });
    // Save data on server
    thisView.model.save(null, {
      headers: {
        'Authorization': 'Bearer ' + brd.controllers.getToken()
      },
      success: function success() {
        app.user.fetch();
        brd.router.navigateToRoute('profile', 'dashboard');
      }
    });
  }

});
'use strict';

app.views.SettingsView = Mn.View.extend({

  template: tpl.templates.settings,

  regions: {
    leftNavRegion: '.left-navigation',
    page: '.page'
  },

  ui: {
    profileSettings: '.profile-settings-link',
    accountSettings: '.account-settings-link'
  },

  events: {
    'click @ui.profileSettings': function clickUiProfileSettings() {
      var useId = brd.controllers.getUserId();
      this.showChildView('page', new app.views.SettingsProfileSectionView({ model: new app.models.UserModel({ _id: useId }) }));
      this.ui.profileSettings.addClass('active');
      this.ui.accountSettings.removeClass('active');
    },
    'click @ui.accountSettings': function clickUiAccountSettings() {
      this.showChildView('page', new app.views.SettingsAccountSectionView({ email: app.user.get('email') }));
      this.ui.accountSettings.addClass('active');
      this.ui.profileSettings.removeClass('active');
    }
  },

  initialize: function initialize() {
    // Initialize left navigation region
    brd.regions.leftNavRegion = this.getRegion('leftNavRegion');
  },

  onRender: function onRender() {
    var useId = brd.controllers.getUserId();
    this.showChildView('page', new app.views.SettingsProfileSectionView({ model: new app.models.UserModel({ _id: useId }) }));
    this.ui.profileSettings.addClass('active');
    this.ui.accountSettings.removeClass('active');
  }

});
'use strict';

app.views.CountriesPickerView = Mn.View.extend({

  template: tpl.templates.countries_picker,

  ui: {
    country: '#country',
    city: '#city',
    cityDropdown: '.cityDropdown',
    cityDropdownElement: '.city'
  },

  events: {
    'change @ui.country': 'selectCountry',
    'input @ui.city': 'searchCity',
    'click @ui.cityDropdownElement': 'selectCity',
    'change @ui.city': 'checkCity'
  },

  modelEvents: {
    'change': 'render'
  },

  selectCountry: function selectCountry(event) {
    var thisView = this,
        countryId = event.target.value;
    // Check if county selected
    if (countryId) {
      // Save country object into the model
      thisView.model.setCountry(countryId);
      thisView.model.set({ city: null });
    } else {
      thisView.model.set({
        country: null,
        city: null
      });
    }
  },

  searchCity: function searchCity() {
    var thisView = this,
        country = thisView.model.get('country'),
        value = thisView.ui.city.val();
    // Get cities by country id
    thisView.model.searchCities(country.id, value).then(function (cities) {
      // Display dropdown
      thisView.model.set({ cities: cities.response.items });
      thisView.ui.cityDropdown.addClass('show');
      // return focus and value after render
      thisView.ui.city.val(value);
      thisView.ui.city.focus();
    });
  },

  selectCity: function selectCity(event) {
    var thisView = this,
        cityId = event.currentTarget.getAttribute('data-id');

    if (cityId) {
      this.model.setCity(cityId);
    }
  },

  // Check if city exist
  // Do not allow enter random text
  checkCity: function checkCity() {
    var thisView = this,
        isVisible = thisView.ui.cityDropdown.is(":visible"),
        city = thisView.model.get('city'),
        inputValue = thisView.ui.city.val();
    // If cities dropdown visible
    if (isVisible && city && !inputValue) {
      thisView.ui.cityDropdown.removeClass('show');
      thisView.model.set({ city: null });
    } else if (isVisible && city) {
      thisView.ui.cityDropdown.removeClass('show');
      thisView.ui.city.val(city.title);
    } else if (isVisible && !city) {
      thisView.ui.cityDropdown.removeClass('show');
      thisView.ui.city.val('');
    }
  }

});
"use strict";

/**
 *
 *
 *
 * @extends Marionette.View
 * @memberOf app.views
 */
app.views.EmptyView = Marionette.View.extend({

  /**
   * @see Marionette.View#template
   * @instance
   * @memberOf app.views.EmptyView
   */
  template: tpl.templates.empty
});
'use strict';

app.views.FiltersView = Mn.View.extend({

  template: tpl.templates.filters,

  ui: {
    parent: '.parent',
    sizes: '.subtitle',
    checkbox: 'input[type="checkbox"]',
    number: 'input[type="number"]',
    addSize: '.add-size',
    removeSize: '.remove-size'
  },

  events: {
    // Handle parent checkbox
    'change @ui.parent': function changeUiParent(event) {
      var $element = $(event.target);
      // Toggle hidden class
      if ($element.prop('checked')) {
        $element.parent().parent().next().removeClass('hidden');
      } else {
        $element.parent().parent().next().addClass('hidden');
      }
    },
    'change #delovaya': function changeDelovaya(event) {
      var $element = $(event.target);
      if ($element.prop('checked')) {
        this.ui.sizes.removeClass('hidden');
      } else {
        this.ui.sizes.addClass('hidden');
      }
    },
    'change @ui.checkbox': 'changeFilter',
    'change @ui.number': 'changeFilter',
    'click @ui.addSize': 'addSize',
    'click @ui.removeSize': 'removeSize'
  },

  modelEvents: {
    'change': 'render'
  },

  addSize: function addSize() {
    this.model.addSize();
  },

  removeSize: function removeSize(event) {
    this.model.removeSize(event.target.dataset.id);
  },

  changeFilter: function changeFilter(event) {
    var type = event.target.type,
        label = event.target.value,
        value = label;
    // Checkboxes
    if (type === 'checkbox') {
      value = event.target.checked;
    } else {
      // Inputs
      label = event.target.id;
      value = event.target.value;
      // Add additional param for sizes input
      if (event.target.dataset.id) {
        this.model.setFilter(label, 'input-sizes', value, event.target.dataset.id);
        return;
      }
    }
    this.model.setFilter(label, type, value);
  },

  initialize: function initialize() {
    this.model.showFilters();
  }

});
'use strict';

app.views.MessageView = Marionette.View.extend({

  template: tpl.templates.message,

  templateContext: function templateContext() {
    return {
      message: this.getOption('message'),
      placeholder: this.getOption('placeholder')
    };
  }

});
'use strict';

app.views.SendMessageFormView = Mn.View.extend({

  template: tpl.templates.send_message_form,

  initialize: function initialize() {},

  templateContext: function templateContext() {
    return {
      userId: this.getOption('userId')
    };
  }

});
"use strict";

/**
 * Spinner view
 *
 *
 * @extends Marionette.View
 * @memberOf app.views
 */
app.views.SpinnerView = Marionette.View.extend({

  /**
   * @see Marionette.View#template
   * @instance
   * @memberOf app.views.SpinnerView
   */
  template: tpl.templates.spinner
});