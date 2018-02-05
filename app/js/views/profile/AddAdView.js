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
    sellMarker: '.sell',
  },

  events: {
    'change @ui.getContacts': 'setContacts',
    'change @ui.category': 'setFilter',
    'change @ui.type': 'changeType',
    'change @ui.object': 'changeObject',
    'click @ui.backBtn': function() {
      brd.router.navigateToRoute('profile', 'ads');
    },
    'change @ui.photoInput': 'addPhoto'
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
    brd.controllers.imageName = null;
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
      thisView.model.set({photo: null});
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
        let phone1 = app.user.get('phone1'),
            phone2 = app.user.get('phone2');
        // check if profile phones are exist
        if (phone1 || phone2) {
          contacts.phones.push(phone1, phone2);
          // Set contacts to the model
          thisView.model.set({contacts});
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
    // Save the model into database
    thisView.model.save(null, {
      headers: {
        'Authorization':'Bearer ' + brd.controllers.getToken()
      },
      success: function() {
        // Redirect to Ads profile page
        brd.router.navigateToRoute('profile', 'ads');
      },
      error: function() {
        console.log('error')
      }
    });
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
   * Show filter section for selected category
   *
   */
  setFilter: function(event) {
    let selectedCategoryId = parseInt(event.target.value);
    // If selected some item
    if(selectedCategoryId) {
      let categoryModel = this.model.get('categoryModel');
      // Show filters in child view
      this.showChildView('filters', new app.views.FiltersView({
        model: new app.models.FiltersModel({catId : selectedCategoryId})
      }));
      this.model.set({selectedCategoryId})
    } else {
      // Clear region
      this.getRegion('filters').empty();
      this.model.set({selectedCategoryId: null})
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
  },

  /*
   * Handle change type checkbox
   *
   */
  changeType: function(event) {
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
      type: event.target.value,
    });
  },

  /*
   * Handle change object checkbox
   *
   */
  changeObject: function(event) {
    this.model.set({
      object: event.target.value,
    });
  },

  addPhoto: function(event) {
    // Prepare new name for uploaded image
    brd.controllers.imageName = brd.controllers.getUserId()+'-'+Date.now();

    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = function(event) {
        // Check size of the uploaded image
        let image = new Image();
        image.src = event.target.result;
        image.onload = function() {
          $('#preview').css('background', 'url('+event.target.result+')').css('background-size', 'cover');
          $('#preview .ion-image').hide();
          $('.image-error-message').hide();
          // Prepare formData object
          let input = document.getElementById('photo');
          let formData = new FormData();
          formData.append('newfilename', brd.controllers.imageName);
          formData.append('photo', input.files[0]);
          // Upload image
          $.ajax({
            url: 'api/upload/ad',
            method: 'POST',
            data: formData,
            processData: false,
            contentType: false
          }).done(function(response) {
            if (!response.imageUploaded) {
              $('.image-error-message').text('Ошибка загрузки изображения.');
              $('.image-error-message').removeClass('hidden');
              $('.image-error-message').show();
            }
          }).fail(function() {
            $('.image-error-message').text('Ошибка загрузки изображения.');
            $('.image-error-message').removeClass('hidden');
            $('.image-error-message').show();
          });
        };
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  },

});