app.views.EditAdView = app.views.AddAdView.extend({

  template: tpl.templates.edit_ad,

  modelEvents: {
    'change': 'render'
  },

  initialize: async function() {
    let userId = brd.controllers.getUserId();

    brd.regions.leftNavRegion = this.getRegion('leftNavRegion');

    try {
      let response = await Promise.all([this.model.fetch()]);

      if (response[0].error) {
        this.model.set({
          loading: false,
          isError: true,
          errorMessage: 'Wrong id.',
        });
      } else if (userId != response[0].userId) {
        this.model.set({
          loading: false,
          isError: true,
          errorMessage: 'You can not edit this item.',
        });
      } else {
        this.model.set({
          loading: false
        });
      }
      // Show filters in child view
      this.showChildView('filters', new app.views.FiltersView({
        model: this.model.get('categoryModel')
      }));
      // Show or hide radio btns
      this.manageContacts();
      this.showChildView('countriesPicker', new app.views.CountriesPickerView({model: this.model.get('countriesModel')}));
    } catch (error) {
      this.model.set({
        loading: false,
        isError: true,
        errorMessage: 'Service error.',
      });
    }

  },

  onRender: function() {
    this.formAddValidation();
    this.showChildView('leftNavRegion', new app.views.LeftNavigation({page: 'ads'}));
  },

  manageContacts: function() {
    let contacts = this.model.get('contacts');

    this.ui.companyRadio.prop('disabled', true);
    if (contacts.takeFrom !== 'other') {
      this.ui.otherPhoneWrapper.hide();
    }
  },

  /*
   * Save Ad
   *
   */
  saveAd: function() {
    let contacts = this.model.get('contacts');
    contacts.phones = [];
    // Set model to save it to the server
    this.model.set({
      title: this.ui.title.val().trim(),
      description: this.ui.description.val().trim(),
      price: this.ui.price.val().trim(),
      expirationDate: this.returnExpirationDate(this.ui.expirationDate.val())
    });
    // Check if filters has been changed
    let selectedCat = this.model.get('selectedCategoryId');
    if (selectedCat) {
      // Set selected filters
      let category = _.findWhere(this.model.get('categories'), {id: selectedCat});
      this.model.set({category});
    }
    // Check if image uploaded
    if (brd.controllers.imageName) {
      this.model.set({
        photo: brd.controllers.imageName + '.png'
      });
    }
    // Set name if exist
    if (app.user.get('name') || app.user.get('lastName') || app.user.get('middleName')) {
      this.model.set({
        userName: {
          name: app.user.get('name'),
          lastName: app.user.get('lastName'),
          middleName: app.user.get('middleName')
        }
      });
    } else {
      this.model.set({
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
          this.model.set({contacts});
        }
        break;
      case 'other':
        contacts.phones.push(this.ui.otherPhone.val().trim());
        // Set contacts to the model
        this.model.set({contacts});
        break;
      default:
        console.log('default');
    }
    // Save the model into database
    this.model.save(null, {
      headers: {
        'Authorization':'Bearer ' + brd.controllers.getToken()
      },
      method: 'PUT',
      success: function() {
        // Redirect to Ads profile page
        brd.router.navigateToRoute('profile', 'ads');
      },
      error: function() {
        console.log('error')
      }
    });
  },

});