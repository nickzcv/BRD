app.views.AddAdView = Backbone.Marionette.View.extend({

  template: tpl.templates.add_ad,

  regions: {
    leftNavRegion: '.left-navigation',
    countriesPicker: '.country-picker'
  },

  ui: {
    addAdForm: '#add-ad-form',
    type: 'input[name=type]',
    saveAd: '.save-ad',
  },

  events: {
    'click @ui.saveAd': 'saveAdData',
  },


  initialize: function() {
    let thisView = this;
    // Initialize left navigation region
    brd.regions.leftNavRegion = thisView.getRegion('leftNavRegion');
    // Show country picker
    thisView.showChildView('countriesPicker', new app.views.CountriesPickerView({model: thisView.model.get('countriesModel')}));
  },

  onRender: function() {
    this.formAddValidation();
  },

  /*
   * Validation rules for the add Ad form.
   *
   */
  formAddValidation: function() {
    let thisView = this;
    thisView.ui.addAdForm.validate({
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

      submitHandler: function() {
        thisView.loginHandler();
      }
    });
  },


});