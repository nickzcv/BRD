app.views.AddAdView = Backbone.Marionette.View.extend({

  template: tpl.templates.add_ad,

  regions: {
    leftNavRegion: '.left-navigation',
    countriesPicker: '.country-picker'
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
    profileRadio: '#profileRadio',
    companyRadio: '#companyRadio',
    otherRadio: '#otherRadio',
    otherPhoneWrapper: '.otherPhoneWrapper',
    otherPhone: '#otherPhone'
  },

  initialize: function() {
    let thisView = this;
    // Initialize left navigation region
    brd.regions.leftNavRegion = thisView.getRegion('leftNavRegion');
    // Show country picker
    thisView.showChildView('countriesPicker', new app.views.CountriesPickerView({model: thisView.model.get('countriesModel')}));
    thisView.ui.otherPhoneWrapper.hide()
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
        type: {
          required: true,
        },
        object: {
          required: true,
        },
        category: {
          required: true,
        },
        title: {
          required: true,
          maxlength: 120
        },
        description: {
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
          required: 'Выберите категорию'
        },
        title: {
          required: 'Введите заголовок',
          maxlength: jQuery.validator.format('Заголовок не должен превышать {0} символов')
        },
        description: {
          required: 'Введите текс объявления'
        }
      },

      errorPlacement: function(error, element) {
        if (element.attr('name') === 'type')
          error.insertAfter('.typeError');
        else if  (element.attr('name') === 'object')
          error.insertAfter('.objectError');
        else
          error.insertAfter(element);
      },

      submitHandler: function() {
        thisView.saveAd();
      }
    });
  },

  /*
   * Save Ad
   *
   */
  saveAd: function() {
    let thisView = this;

    thisView.model.set({
      type: thisView.ui.type.val(),
      object: thisView.ui.object.val(),
      category: thisView.ui.category.val(),
      title: thisView.ui.title.val(),
      description: thisView.ui.description.val(),
      price: thisView.ui.price.val(),
      photo: thisView.ui.photo.val(),
      expirationDate: thisView.ui.expirationDate.val(),
      contacts: thisView.ui.otherPhone.val(),
    });

    console.log(thisView.model.attributes);

    thisView.model.save(null, {
      success: function() {
        console.log('success')
      },
      error: function() {
        console.log('error')
      }
    });
  }


});