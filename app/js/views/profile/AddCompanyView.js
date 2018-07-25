app.views.AddCompanyView = Mn.View.extend({

  template: tpl.templates.add_company,

  regions: {
    leftNavRegion: '.left-navigation',
    countriesPicker: '.country-picker',
    filters: '.filters',
    companyLogo: '.company-logo'
  },

  ui: {
    addCompanyForm: '#add-company-form',
    companyName: '#companyName',
    description: '#description',
    category: '#category',
    address: '#address',
    phones: '#phones',
    website: '#website',
    year: '#year',
    count: '#count',
    backBtn: '.back'
  },

  events: {
    'click @ui.backBtn': function() {
      brd.router.navigateToRoute('profile', 'companies');
    }
  },

  initialize: function() {
    let thisView = this;
    // Initialize left navigation region
    brd.regions.leftNavRegion = thisView.getRegion('leftNavRegion');
    // Show country picker
    thisView.showChildView('countriesPicker', new app.views.CountriesPickerView({
      model: thisView.model.get('countriesModel')
    }));
    // Show logo section
    thisView.showChildView('companyLogo', new app.views.CompanyLogoView({
      model: this.model
    }));
  },

  onRender: function() {
    this.formAddValidation();
  },

  /*
   * Validation rules for the add company form.
   *
   */
  formAddValidation: function() {
    this.ui.addCompanyForm.validate({
      rules: {
        companyName: {
          required: true,
          maxlength: 120
        },
        description: {
          maxlength: 500
        },
        category: {
          required: true,
        },
        country: {
          required: true
        },
        city: {
          required: true
        }
      },
      messages: {
        companyName: {
          required: 'Укажите название компании',
          maxlength: jQuery.validator.format('Максимум {0} символов')
        },
        description: {
          maxlength: jQuery.validator.format('Максимум {0} символов')
        },
        category: {
          required: 'Выберите раздел'
        },
        country: {
          required: 'Выберите страну'
        },
        city: {
          required: 'Укажите город'
        },
      },

      submitHandler: () => {
        this.saveCompany();
      }
    });
  },

  saveCompany: function() {
    // Set model to save it to the server
    this.model.set({
      companyName: this.ui.companyName.val().trim(),
      description: this.ui.description.val().trim(),
      categoryId: this.ui.category.val(),
      address: this.ui.address.val().trim(),
      phones: this.ui.phones.val().trim(),
      website: this.ui.website.val().trim(),
      year: this.ui.year.val(),
      count: this.ui.count.val(),
      createdBy: brd.controllers.getUserId()
    });

    // Save the model into database
    this.model.save(null, {
      headers: {
        'Authorization':'Bearer ' + brd.controllers.getToken()
      },
      success: function() {
        // Redirect to Ads profile page
        brd.router.navigateToRoute('profile', 'companies');
      },
      error: function() {
        console.log('error')
      }
    });
  }


});