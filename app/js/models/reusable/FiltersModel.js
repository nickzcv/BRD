app.models.FiltersModel = Backbone.Model.extend({

  defaults: {
    categories: [
      {
        id: 1,
        title: 'Пиломатериалы',
        filters: [
          {
            label: 'sortiment',
            title: 'Сортимент',
            level: 'child',
            type: 'checkbox',
            items: [
              {
                label: 'brus',
                value: 'Брус',
              },
              {
                label: 'brusok',
                value: 'Брусок',
              },
              {
                label: 'doska',
                value: 'Доска',
              },
              {
                label: 'shpaly',
                value: 'Шпалы',
              }
            ]
          },
          {
            label: 'poroda',
            title: 'Порода',
            level: 'parent',
            items: [
              {
                label: 'hvoya',
                title: 'Хвойные',
                level: 'child',
                type: 'checkbox',
                items: [
                  {
                    label: 'el',
                    value: 'Ель',
                  },
                  {
                    label: 'kedr',
                    value: 'Кедр',
                  },
                  {
                    label: 'listvenica',
                    value: 'Лиственница',
                  },
                  {
                    label: 'pihta',
                    value: 'Пихта',
                  },
                  {
                    label: 'sosna',
                    value: 'Сосна',
                  }
                ]
              },
              {
                label: 'listva',
                title: 'Лиственные',
                level: 'child',
                type: 'checkbox',
                items: [
                  {
                    label: 'bereza',
                    value: 'Береза',
                  },
                  {
                    label: 'buk',
                    value: 'Бук',
                  },
                  {
                    label: 'vyaz',
                    value: 'Вяз',
                  },
                  {
                    label: 'dub',
                    value: 'Дуб',
                  },
                  {
                    label: 'klen',
                    value: 'Клен',
                  },
                  {
                    label: 'lipa',
                    value: 'Липа',
                  },
                  {
                    label: 'olha',
                    value: 'Ольха',
                  },
                  {
                    label: 'osina',
                    value: 'Осина',
                  },
                  {
                    label: 'topol',
                    value: 'Тополь',
                  },
                  {
                    label: 'yasen',
                    value: 'Ясень',
                  },
                ]
              }
            ]
          }

        ],
      },
      {
        id: 2,
        title: 'Test 2 obj',
        filters: [
          {
            label: 'test1',
            title: 'тест1',
            level: 'child',
            type: 'checkbox',
            items: [
              {
                label: 'brus',
                value: 'Брус',
              },
              {
                label: 'brusok',
                value: 'Брусок',
              },
              {
                label: 'doska',
                value: 'Доска',
              },
              {
                label: 'shpaly',
                value: 'Шпалы',
              }
            ]
          },
          {
            label: 'test2',
            title: 'т 2',
            level: 'child',
            items: [
              {
                label: 'hvoya',
                title: 'Хвойные',
                level: 'child',
                type: 'radio',
                items: [
                  {
                    label: 'el',
                    value: 'Ель',
                  },
                  {
                    label: 'kedr',
                    value: 'Кедр',
                  },
                  {
                    label: 'listvenica',
                    value: 'Лиственница',
                  },
                  {
                    label: 'pihta',
                    value: 'Пихта',
                  },
                  {
                    label: 'sosna',
                    value: 'Сосна',
                  }
                ]
              },
              {
                label: 'listva',
                title: 'Лиственные',
                level: 'child',
                items: [
                  {
                    label: 'bereza',
                    value: 'Береза',
                  },
                  {
                    label: 'buk',
                    value: 'Бук',
                  },
                  {
                    label: 'vyaz',
                    value: 'Вяз',
                  },
                  {
                    label: 'dub',
                    value: 'Дуб',
                  },
                  {
                    label: 'klen',
                    value: 'Клен',
                  },
                  {
                    label: 'lipa',
                    value: 'Липа',
                  },
                  {
                    label: 'olha',
                    value: 'Ольха',
                  },
                  {
                    label: 'osina',
                    value: 'Осина',
                  },
                  {
                    label: 'topol',
                    value: 'Тополь',
                  },
                  {
                    label: 'yasen',
                    value: 'Ясень',
                  },
                ]
              }
            ]
          }
        ],
      }
    ],



  },

  initialize: function() {

      //console.log(this.attributes)

  },

  showFilters: function() {
    let catId = this.get('catId');
    let categories = this.get('categories');
    let category = _.findWhere(categories, {id: catId});

    this.set({category});

    // console.log(this)
  }

});