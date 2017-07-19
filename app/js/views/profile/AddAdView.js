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
    getContacts: 'input[name=getContacts]',
    profileRadio: '#profileRadio',
    companyRadio: '#companyRadio',
    otherRadio: '#otherRadio',
    otherPhoneWrapper: '.otherPhoneWrapper',
    otherPhone: '#otherPhone'
  },

  events: {
    'change @ui.getContacts': 'setContacts'
  },

  initialize: function() {
    let thisView = this;
    // Initialize left navigation region
    brd.regions.leftNavRegion = thisView.getRegion('leftNavRegion');
    // Show country picker
    thisView.showChildView('countriesPicker', new app.views.CountriesPickerView({model: thisView.model.get('countriesModel')}));
    // Disable radio btns by default
    thisView.ui.otherPhoneWrapper.hide();
    thisView.ui.companyRadio.prop('disabled', true);
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
/*      rules: {
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
      },*/
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
    // Set model to save it to the server
    thisView.model.set({
      type: thisView.ui.type.val(),
      object: thisView.ui.object.val(),
      category: thisView.ui.category.val(),
      title: thisView.ui.title.val().trim(),
      description: thisView.ui.description.val().trim(),
      price: thisView.ui.price.val().trim(),
      //photo: thisView.ui.photo.val(),
      expirationDate: thisView.returnExpirationDate(thisView.ui.expirationDate.val()),
      //contacts: thisView.ui.otherPhone.val(),
      userId: app.user.get('_id')
    });
    // Save model
/*    thisView.model.save(null, {
      headers: {
        'Authorization':'Bearer ' + brd.controllers.getToken()
      },
      success: function() {
        // Redirect to Ads profile page
        brd.router.navigate('#ads',{trigger:true});
      },
      error: function() {
        console.log('error')
      }
    });*/
  },

  /*
   * Set contacts based on user selection
   *
   */
  setContacts: function(event) {
    let thisView = this;
    if(event.target.value === 'other') {
      thisView.ui.otherPhoneWrapper.show();
    } else {
      thisView.ui.otherPhoneWrapper.hide();
    }
  },

  /*
   * Count Expiration date
   *
   * @param days - plus to current date
   */
  returnExpirationDate: function(days) {
    let result = new Date();
    result.setDate(result.getDate() + parseInt(days));
    return result;
  }


});