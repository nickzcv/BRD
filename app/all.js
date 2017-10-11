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
    var App = Backbone.Marionette.Application.extend({

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

  routes: {
    '': 'showMainPage',
    'dashboard': 'showDashboardPage',
    'ads': 'showAdsPage',
    'ads/new': 'showAdNewForm',
    'settings': 'showSettingsPage'
  },

  initialize: function initialize() {},

  // Main
  showMainPage: function showMainPage() {
    brd.regions.mainRegion.show(new app.views.MainView());
    brd.regions.bodyRegion.show(new app.views.HomeView());
  },

  // Dashboard
  showDashboardPage: function showDashboardPage() {
    if (brd.controllers.isLoggedIn()) {
      brd.regions.mainRegion.show(new app.views.MainView());
      brd.regions.bodyRegion.show(new app.views.DashboardView());
      brd.regions.leftNavRegion.show(new app.views.LeftNavigation({ page: 'dashboard' }));
    } else {
      brd.regions.mainRegion.show(new app.views.MainView());
      brd.regions.bodyRegion.show(new app.views.ForbiddenView());
    }
  },

  // Ads
  showAdsPage: function showAdsPage() {
    if (brd.controllers.isLoggedIn()) {
      brd.regions.mainRegion.show(new app.views.MainView());
      brd.regions.bodyRegion.show(new app.views.AdsView());
      brd.regions.leftNavRegion.show(new app.views.LeftNavigation({ page: 'ads' }));
    } else {
      brd.regions.mainRegion.show(new app.views.MainView());
      brd.regions.bodyRegion.show(new app.views.ForbiddenView());
    }
  },

  // New Add
  showAdNewForm: function showAdNewForm() {
    if (brd.controllers.isLoggedIn()) {
      brd.regions.mainRegion.show(new app.views.MainView());
      brd.regions.bodyRegion.show(new app.views.AddAdView({ model: new app.models.AdModel() }));
      brd.regions.leftNavRegion.show(new app.views.LeftNavigation({ page: 'ads' }));
    } else {
      brd.regions.mainRegion.show(new app.views.MainView());
      brd.regions.bodyRegion.show(new app.views.ForbiddenView());
    }
  },

  // Settings
  showSettingsPage: function showSettingsPage() {
    if (brd.controllers.isLoggedIn()) {
      brd.regions.mainRegion.show(new app.views.MainView());
      brd.regions.bodyRegion.show(new app.views.SettingsView());
      brd.regions.leftNavRegion.show(new app.views.LeftNavigation({ page: 'settings' }));
    } else {
      brd.regions.mainRegion.show(new app.views.MainView());
      brd.regions.bodyRegion.show(new app.views.ForbiddenView());
    }
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
      console.log(error);
    });

    // Init child Countries model
    thisModel.set({ countriesModel: new app.models.CountriesPickerModel() });
    // Init child Filters model under categories
    thisModel.set({ categoryModel: new app.models.FiltersModel() });
    var categoryModel = thisModel.get('categoryModel');
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

app.models.AdsListModel = Backbone.Model.extend({

  defaults: {
    loading: true,
    noAds: true
  },

  initialize: function initialize() {
    console.log('initialize AdsListModel');
  }

});
'use strict';

app.models.HeaderModel = Backbone.Model.extend({

  defaults: {
    user: null
  },

  initialize: function initialize() {
    //console.log('initialize Header Model');

    if (app.user) {
      this.updateUser();
    } else {
      console.log('NO app user');
    }
  },

  updateUser: function updateUser() {
    this.set({ user: app.user.attributes });
  }

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
      console.log(error);
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
      console.log(error);
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
        title: 'Сортимент',
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
        title: 'Размеры',
        level: 'child',
        items: [{
          type: 'input',
          id: 'dlina',
          label: 'Длина, мм',
          from: null,
          to: null
        }, {
          type: 'input',
          id: 'shirina',
          label: 'Ширина, мм',
          from: null,
          to: null
        }, {
          type: 'input',
          id: 'tolshina',
          label: 'Толщина, мм',
          from: null,
          to: null
        }]
      }]
    }, {
      id: 2,
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
      id: 3,
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
          label: '',
          value: 'до 2 м'
        }, {
          label: '',
          value: 'от 2,1 до 6,5 м'
        }, {
          label: '',
          value: 'более 6,5 м'
        }]
      }, {
        label: null,
        title: 'Сорт',
        level: 'child',
        type: 'checkbox',
        items: [{
          label: '',
          value: 'Первый'
        }, {
          label: '',
          value: 'Второй'
        }, {
          label: '',
          value: 'Третий'
        }, {
          label: '',
          value: 'Четвертый'
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
  *
   */
  setFilter: function setFilter(filterLabel, type, value) {
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
    } else {
      // For inputs
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
'use strict';

app.views.adsCollectionView = Backbone.Marionette.CollectionView.extend({

  collection: new app.collections.AdsCollection(),

  modelEvents: {
    //'change': 'render'
  },

  /**
   * @see Marionette.Object#initialize
   *
   * @memberOf app.views.RecommendedChannelsTableView
   * @instance
   */
  initialize: function initialize() {
    var _this = this;

    this.childView = app.views.adView;
    this.collection.fetch().then(function () {
      console.log('Done');
      if (_this.collection.length) {
        console.log(_this.collection.length);
        _this.model.set({ noAds: false });
      }
      _this.emptyView = app.views.SpinnerView;
      _this.model.set({ loading: false });
      console.log(_this.model);
    }, function () {
      _this.model.set({
        loading: false,
        isError: true,
        errorMessage: 'Unable to get service data. Please try later.'
      });
    });
  }

});
'use strict';

app.views.adView = Backbone.Marionette.View.extend({

  template: tpl.templates.ad_item,

  regions: {
    phones: '.phones'
  },

  ui: {
    arrow: '.arrow',
    item: '.ad-item',
    showPhone: '.see-phone',
    categoryBlock: '.category',
    phones: '.phones'
  },

  events: {
    'click @ui.arrow': 'changeAdView',
    'click @ui.showPhone': 'showPhone',
    'click @ui.phones': function clickUiPhones() {
      this.getRegion('phones').empty();
      this.ui.phones.addClass('hidden');
    }
  },

  /*
  *   Expanded/hide filter section
  */
  changeAdView: function changeAdView() {
    this.ui.item.toggleClass('expanded');
  },

  /*
   *   Show phones section
   */
  showPhone: function showPhone() {
    this.ui.phones.toggleClass('hidden');
    this.showChildView('phones', new app.views.PhonesView({ model: this.model }));
  }

});
"use strict";

app.views.FooterView = Backbone.Marionette.View.extend({
  template: tpl.templates.footer
});
'use strict';

app.views.ForbiddenView = Backbone.Marionette.View.extend({

  template: tpl.templates.forbidden,

  regions: {
    modalSection: '.modal-section'
  },

  ui: {
    'login': '.login'
  },

  events: {
    'click @ui.login': 'showLoginView'
  },

  showLoginView: function showLoginView() {
    this.showChildView('modalSection', new app.views.LoginView({
      model: new app.models.LoginModel()
    }));
  }

});
'use strict';

app.views.HeaderView = Backbone.Marionette.View.extend({

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
    homeLink: '.home-link',
    userProfile: '.user-profile'
  },

  events: {
    'click @ui.hamburger': 'toggleMobileMenu',
    'click @ui.registrationBtn': 'showRegistrationView',
    'click @ui.loginBtn': 'showLoginView',
    'click @ui.homeLink': function clickUiHomeLink() {
      brd.router.navigate('#', { trigger: true });
    },
    'click @ui.logout': function clickUiLogout() {
      brd.controllers.logout();
      app.user = null;
      brd.router.navigate('#', { trigger: true });
    },
    'click @ui.userProfile': function clickUiUserProfile() {
      brd.router.navigate('#dashboard', { trigger: true });
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

app.views.MainView = Backbone.Marionette.View.extend({

  template: tpl.templates.main,

  regions: {
    headerRegion: 'header',
    bodyRegion: '.content',
    footerRegion: 'footer'
  },

  initialize: function initialize() {
    var thisView = this;
    // Initialize main content region
    brd.regions.bodyRegion = thisView.getRegion('bodyRegion');
  },

  onRender: function onRender() {
    var thisView = this;
    thisView.showChildView('headerRegion', new app.views.HeaderView({ model: new app.models.HeaderModel() }));
    thisView.showChildView('footerRegion', new app.views.FooterView());
  }

});
"use strict";

app.views.FilterView = Backbone.Marionette.View.extend({

  template: tpl.templates.filter

});
'use strict';

app.views.HomeView = Backbone.Marionette.View.extend({

  template: tpl.templates.home,

  regions: {
    filter: '.filter',
    adsFilter: '.content-filter',
    adsList: '.ads-list'
  },

  ui: {
    mobileFilterBtn: '.mobile-filter-btn .btn',
    closeFilter: 'a.close-btn'
  },

  events: {
    'click @ui.mobileFilterBtn': function clickUiMobileFilterBtn() {
      $('.filters').toggleClass('visible');
    },
    'click @ui.closeFilter': function clickUiCloseFilter() {
      $('.filters').removeClass('visible');
    }
  },

  onRender: function onRender() {
    var thisView = this;
    thisView.showChildView('filter', new app.views.FilterView());
  }

});
'use strict';

app.views.ForgotView = app.views.HeaderView.extend({

  template: tpl.templates.forgot,

  ui: {
    forgotPasswordModal: '#forgot'
  },

  events: {},

  onRender: function onRender() {
    //console.log('onRender forgotPasswordModal');
    //this.ui.forgotPasswordModal.modal('show');
  }

});
'use strict';

app.views.LoginView = app.views.HeaderView.extend({

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
          console.log('SUCCESS');
          //console.log(app.user.attributes);
        }, function () {
          console.log('FAIL');
          //console.log(app.user.attributes);
        });
      }
      // Navigate to user dashboard after login successful
      brd.router.navigate('#dashboard', { trigger: true });
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

app.views.AddAdView = Backbone.Marionette.View.extend({

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
    backBtn: '.back'
  },

  events: {
    'change @ui.getContacts': 'setContacts',
    'change @ui.category': 'setFilter',
    'click @ui.backBtn': function clickUiBackBtn() {
      brd.router.navigate('#ads', { trigger: true });
    }
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
        contacts = thisView.model.get('contacts') || [],
        error = false;
    // Set selected filters
    this.model.setCategoryObject();
    // Set model to save it to the server
    thisView.model.set({
      type: thisView.ui.type.val(),
      object: thisView.ui.object.val(),
      title: thisView.ui.title.val().trim(),
      description: thisView.ui.description.val().trim(),
      price: thisView.ui.price.val().trim(),
      //photo: thisView.ui.photo.val(),
      expirationDate: thisView.returnExpirationDate(thisView.ui.expirationDate.val()),
      userId: app.user.get('_id'),
      userName: {
        name: app.user.get('name'),
        lastName: app.user.get('lastName')
      }
    });
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
        } else {
          error = true;
          console.log('No profile phones');
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
    // If no Errors - Save the model
    if (!error) {
      thisView.model.save(null, {
        headers: {
          'Authorization': 'Bearer ' + brd.controllers.getToken()
        },
        success: function success() {
          // Redirect to Ads profile page
          brd.router.navigate('#ads', { trigger: true });
        },
        error: function error() {
          console.log('error');
        }
      });
    }
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
  }

});
'use strict';

app.views.AdsView = Backbone.Marionette.View.extend({

  template: tpl.templates.ads,

  ui: {
    'leftNavRegion': '.left-navigation',
    'listRegion': '.ads-list',
    'addButton': '.add-button',
    'showArchive': '.go-to-archive'
  },

  regions: {
    leftNav: '@ui.leftNavRegion',
    adsList: '@ui.listRegion'
  },

  events: {
    'click @ui.addButton': function clickUiAddButton() {
      brd.router.navigate('#ads/new', { trigger: true });
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
    this.showChildView('adsList', new app.views.adsCollectionView({ model: new app.models.AdsListModel() }));
  }

});
'use strict';

app.views.DashboardView = Backbone.Marionette.View.extend({

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

app.views.LeftNavigation = Backbone.Marionette.View.extend({

  template: tpl.templates.left_navigation,

  ui: {
    dashboard: '.dashboard',
    ads: '.ads',
    companies: '.companies',
    messages: '.messages',
    favorite: '.favorite',
    settings: '.settings'
  },

  events: {
    'click @ui.dashboard': function clickUiDashboard() {
      brd.router.navigate('#dashboard', { trigger: true });
    },
    'click @ui.ads': function clickUiAds() {
      brd.router.navigate('#ads', { trigger: true });
    },
    'click @ui.settings': function clickUiSettings() {
      brd.router.navigate('#settings', { trigger: true });
    }
  },

  templateContext: function templateContext() {
    return {
      activePage: this.getOption('page')
    };
  }

});
'use strict';

app.views.SettingsAccountSectionView = Backbone.Marionette.View.extend({

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

app.views.SettingsProfileSectionView = Backbone.Marionette.View.extend({

  template: tpl.templates.settings_profile_section,

  regions: {
    countriesPicker: '.countries-picker'
  },

  ui: {
    form: 'form',
    photo: '#photo',
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
    'change @ui.photo': 'addPhoto'
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

  // Preview user profile photo
  addPhoto: function addPhoto(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('#preview').attr('src', e.target.result).css('background', 'url(' + e.target.result + ')').css('background-size', 'cover');
      };
      reader.readAsDataURL(event.target.files[0]);
    }
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
        brd.router.navigate('#dashboard', { trigger: true });
      }
    });
  }

});
'use strict';

app.views.SettingsView = Backbone.Marionette.View.extend({

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

app.views.CountriesPickerView = Backbone.Marionette.View.extend({

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
    }
  }

});
'use strict';

app.views.FiltersView = Backbone.Marionette.View.extend({

  template: tpl.templates.filters,

  ui: {
    parent: '.parent',
    sizes: '.subtitle',
    checkbox: 'input[type="checkbox"]',
    number: 'input[type="number"]'
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
    'change @ui.number': 'changeFilter'
  },

  changeFilter: function changeFilter(event) {
    var type = event.target.type,
        label = event.target.value,
        value = label;

    if (type === 'checkbox') {
      value = event.target.checked;
    } else {
      label = event.target.id;
      value = event.target.value;
    }

    this.model.setFilter(label, type, value);
  },

  initialize: function initialize() {
    this.model.showFilters();
  }

});
"use strict";

app.views.PhonesView = Backbone.Marionette.View.extend({

  template: tpl.templates.phones,

  initialize: function initialize() {}

});