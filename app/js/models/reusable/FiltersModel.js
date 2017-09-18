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
          },
          {
            label: 'vlazhnost',
            title: 'Влажность, %',
            level: 'child',
            separator: true,
            type: 'checkbox',
            items: [
              {
                label: '',
                value: 'Техническая сушка',
              },
              {
                label: '',
                value: 'Естественная влажность',
              }
            ]
          },
          {
            label: 'obrabotka',
            title: 'Характер обработки',
            level: 'child',
            type: 'checkbox',
            items: [
              {
                label: '',
                value: 'Обрезной',
              },
              {
                label: '',
                value: 'Необрезной',
              },
              {
                label: '',
                value: 'Строганый',
              }
            ]
          },
          {
            label: 'sort',
            title: 'Сорт',
            level: 'child',
            type: 'checkbox',
            items: [
              {
                label: '',
                value: 'Отборный',
              },
              {
                label: '',
                value: 'Первый',
              },
              {
                label: '',
                value: 'Второй',
              },
              {
                label: '',
                value: 'Третий',
              },
              {
                label: '',
                value: 'Четвертый',
              }
            ]
          }

        ],
      },
      {
        id: 2,
        title: 'Древесные отходы',
        filters: [
          {
            label: '',
            title: '',
            level: 'child',
            type: 'checkbox',
            items: [
              {
                label: 'gorbil',
                value: 'Горбыль',
              },
              {
                label: 'struzhka',
                value: 'Стружка',
              },
              {
                label: 'obapol',
                value: 'Обапол',
              },
              {
                label: 'opilki',
                value: 'Опилки',
              },
              {
                label: 'kora',
                value: 'Кора',
              },
              {
                label: 'shepa',
                value: 'Щепа',
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