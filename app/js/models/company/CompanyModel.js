app.models.CompanyModel = Backbone.Model.extend({

  urlRoot: 'api/companies',

  defaults: {
    countriesModel: null,
    companyName: null,
    logo: brd.controllers.getUserId()+'_'+Date.now()+'_logo',
    categoryId: null,
    companyFilters: {
      items: [
        {
          label: 'proizvodstvo_pilomaterialov',
          title: 'Производство пиломатериалов',
          level: 'child',
          type: 'checkbox',
          items: [
            {
              label: 'Тест1',
              value: 'test1',
            },
            {
              label: 'Тест2',
              value: 'test2',
            },
            {
              label: 'Тест3',
              value: 'test3',
            },
            {
              label: 'Тест4',
              value: 'test4',
            }
          ]
        },
        {
          label: 'lesozagotovka',
          title: 'Лесозаготовка',
          level: 'child',
          type: 'checkbox',
          items: [
            {
              label: 'Тест1',
              value: 'test1',
            }
          ]
        },
        {
          label: '',
          title: 'Изделия из древесины',
          level: 'child',
          type: 'checkbox',
          items: [
            {
              label: 'Тест1',
              value: 'test1',
            }
          ]
        },
        {
          label: '',
          title: 'Спец техника',
          level: 'child',
          type: 'checkbox',
          items: [
            {
              label: 'Тест1',
              value: 'test1',
            }
          ]
        },
        {
          label: '',
          title: 'Транспортные услуги',
          level: 'child',
          type: 'checkbox',
          items: [
            {
              label: 'Тест1',
              value: 'test1',
            }
          ]
        },
        {
          label: '',
          title: 'Оборудование и инструмент',
          level: 'child',
          type: 'checkbox',
          items: [
            {
              label: 'Тест1',
              value: 'test1',
            }
          ]
        }
      ]
    },
    country: null,
    city: null,
    phones: null,
    address: null,
    website: null,
    year: null,
    count: null,
  },

  initialize: function() {
    // Init child Countries model
    this.set({countriesModel: new app.models.CountriesPickerModel()});
    // get countries Model
    let countriesModel = this.get('countriesModel');
    // Listen to country change
    countriesModel.on('change:country', () => {
      this.set({country: countriesModel.get('country')});
    });
    // Listen to city change
    countriesModel.on('change:city', () => {
      this.set({city: countriesModel.get('city')});
    });

    // Init child Filters model under categories
    this.set({categoryModel: new app.models.FiltersModel()});
    let categoryModel = this.get('categoryModel');
    this.set({categories: categoryModel.attributes.categories});

  },


});
