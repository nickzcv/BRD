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
        otherPhone: {
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
        otherPhone: {
          required: 'Введите контактный телефон'
        }
      },

      errorPlacement: function(error, element) {
        if (element.attr('name') === 'type')
          error.insertAfter('.typeError');
        else if  (element.attr('name') === 'object')
          error.insertAfter('.objectError');
        else if  (element.attr('id') === 'otherPhone')
          error.insertAfter('.otherPhoneError');
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
    let thisView = this,
        contacts = thisView.model.get('contacts') || [],
        error = false;
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
      userId: app.user.get('_id')
    });
    // Set contacts
    switch (contacts.takeFrom) {
      case 'profile':
        let phone1 = app.user.get('phone1'),
            phone2 = app.user.get('phone2');
        // check if profile phones are exist
        if (phone1 || phone2) {
          contacts.phones.push(phone1, phone2);
          // Set contacts to the model
          thisView.model.set({contacts});
        } else {
          error = true;
          console.log('No profile phones')
        }
        break;
      case 'other':
        contacts.phones.push(thisView.ui.otherPhone.val().trim());
        // Set contacts to the model
        thisView.model.set({contacts});
        break;
      default:
        console.log('default');
    }
    // If no Errors - Save the model
    if (!error) {
      thisView.model.save(null, {
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
      });
    }

  },

  /*
   * Set contacts based on user selection
   *
   */
  setContacts: function(event) {
    let thisView = this;
    if(event.target.value === 'other') {
      thisView.ui.otherPhoneWrapper.show();
      thisView.model.set('contacts', {
        takeFrom: 'other',
        phones: []
      })
    } else {
      thisView.ui.otherPhoneWrapper.hide();
      thisView.model.set('contacts', {
        takeFrom: 'profile',
        phones: []
      })
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