app.models.FiltersModel = Backbone.Model.extend({

  defaults: {
    categories: [
      {
        id: 1,
        title: 'Пиломатериалы',
        filters: [
          {
            label: null,
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
            label: null,
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
            label: null,
            title: 'Влажность, %',
            level: 'child',
            type: 'checkbox',
            items: [
              {
                type: 'input',
                label: '',
                id: 'vlazhnost',
                from: 0,
                to: 0,
              },
              {
                label: 'tehn_sushka',
                value: 'Техническая сушка',
              },
              {
                label: 'est_vlazhnost',
                value: 'Естественная влажность',
              }
            ]
          },
          {
            label: null,
            title: 'Характер обработки',
            level: 'child',
            type: 'checkbox',
            separator: true,
            items: [
              {
                label: 'obreznoi',
                value: 'Обрезной',
              },
              {
                label: 'neobrabot',
                value: 'Необрезной',
              },
              {
                label: 'stroganyi',
                value: 'Строганый',
              }
            ]
          },
          {
            label: null,
            title: 'Сорт',
            level: 'child',
            type: 'checkbox',
            items: [
              {
                label: 'otbornyi',
                value: 'Отборный',
              },
              {
                label: 'pervyi',
                value: 'Первый',
              },
              {
                label: 'vtoroi',
                value: 'Второй',
              },
              {
                label: 'treti',
                value: 'Третий',
              },
              {
                label: 'chetvertyi',
                value: 'Четвертый',
              }
            ]
          },
          {
            label: null,
            title: 'Размеры',
            level: 'child',
            items: [
              {
                type: 'input',
                id: 'dlina',
                label: 'Длина, мм',
                from: 0,
                to: 0,
              },
              {
                type: 'input',
                id: 'shirina',
                label: 'Ширина, мм',
                from: 0,
                to: 0,
              },
              {
                type: 'input',
                id: 'tolshina',
                label: 'Толщина, мм',
                from: 0,
                to: 0,
              },
            ]
          }
        ],
      },
      {
        id: 2,
        title: 'Древесные отходы',
        filters: [
          {
            label: null,
            title: '',
            level: 'child',
            type: 'checkbox',
            separator: true,
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
            label: null,
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
        id: 3,
        title: 'Лесоматериалы',
        filters: [
          {
            label: null,
            title: '',
            type: 'checkbox',
            items: [
              {
                label: 'delovaya',
                value: 'Деловая древесина',
              },
              {
                label: 'drova',
                value: 'Дрова',
              },
              {
                label: 'tehn_syrie',
                value: 'Технологическое сырье',
              }
            ]
          },
          {
            label: null,
            title: 'Порода',
            level: 'parent',
            separator: true,
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
            label: null,
            subtitle: 'Размеры',
            title: 'Толщина(диаметр)',
            level: 'child',
            type: 'checkbox',
            items: [
              {
                label: 'from2to13',
                value: 'от 2 до 13 см',
              },
              {
                label: 'from14to24',
                value: 'от 14 до 24 см',
              },
              {
                label: '25more',
                value: 'более 26 см',
              },
            ]
          },
          {
            label: null,
            title: 'Длина',
            level: 'child',
            type: 'checkbox',
            items: [
              {
                label: '',
                value: 'до 2 м',
              },
              {
                label: '',
                value: 'от 2,1 до 6,5 м',
              },
              {
                label: '',
                value: 'более 6,5 м',
              },
            ]
          },
          {
            label: null,
            title: 'Сорт',
            level: 'child',
            type: 'checkbox',
            items: [
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
        id: 4,
        title: 'Изделия из древесины',
        filters: [
          {
            label: null,
            title: '',
            level: 'parent',
            separator: true,
            items: [
              {
                label: 'materialy_dlya_pola',
                title: 'Материалы для покрытия пола',
                level: 'child',
                type: 'checkbox',
                items: [
                  {
                    label: 'doska_pola',
                    value: 'Доска пола',
                  },
                  {
                    label: 'terrasnaya_doska',
                    value: 'Террасная доска',
                  },
                  {
                    label: '',
                    value: 'Паркетная доска',
                  }
                ]
              },
              {
                label: '',
                title: 'Обшивочные материалы',
                level: 'child',
                type: 'checkbox',
                items: [
                  {
                    label: '',
                    value: 'Вагонка',
                  },
                  {
                    label: '',
                    value: 'Евровагонка',
                  },
                  {
                    label: '',
                    value: 'Блок-хаус',
                  },
                  {
                    label: '',
                    value: 'Имитация бруса',
                  },
                  {
                    label: '',
                    value: 'Планкен',
                  }
                ]
              },
              {
                label: '',
                title: 'Погонажные изделия',
                level: 'child',
                type: 'checkbox',
                items: [
                  {
                    label: '',
                    value: 'Наличник',
                  },
                  {
                    label: '',
                    value: 'Плинтус',
                  },
                  {
                    label: '',
                    value: 'Раскладка',
                  },
                  {
                    label: '',
                    value: 'Деревянный уголок',
                  },
                  {
                    label: '',
                    value: 'Дверная коробка',
                  },
                  {
                    label: '',
                    value: 'Штапики',
                  },
                  {
                    label: '',
                    value: 'Рейки',
                  }
                ]
              },
              {
                label: '',
                title: 'Клееный брус',
                level: 'child',
                type: 'checkbox'
              },
              {
                label: '',
                title: 'Фанера, ДСП, ДВП, МДФ, ОСП',
                level: 'child',
                type: 'checkbox'
              },
              {
                label: '',
                title: 'Мебельный щит',
                level: 'child',
                type: 'checkbox'
              },
              {
                label: '',
                title: 'Подоконная доска',
                level: 'child',
                type: 'checkbox'
              },
              {
                label: '',
                title: 'Элементы лестниц',
                level: 'child',
                type: 'checkbox'
              },
            ]
          },
          {
            label: null,
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
        ],
      }
    ],



  },

  initialize: function() {

  },

  /*
  * Handler for choosing any filter
  *
  * @param filterLabel - unique label of the selected filter
  * @param type - checkbox or input
  * @param value - value of the selected filter
  *
   */
  setFilter: function(filterLabel, type, value) {
    let category = this.get('category');
    // For checkboxes
    if (type === 'checkbox') {
      // Iterate over all filters in current category
      category.filters.forEach((currentValue) => {
        // Retrive array of inner filter items
        let items = this.retriveItems(currentValue);
        // Process inner items
        if (items) {
          items.forEach((currentValue) => {
            if (currentValue.label === filterLabel) {
              // Mark selected filter
              currentValue.selected = value;
            } else {
              let items = this.retriveItems(currentValue);
              if (items) {
                items.forEach((currentValue) => {
                  if (currentValue.label === filterLabel) {
                    currentValue.selected = value;
                  }
                });
              }
            }
          });
        }
      })
    } else {
      // For inputs

    }

  },

  /*
   * Get object and return array if items or false
   *
   */
  retriveItems: function(object) {
    if (object.hasOwnProperty('items')){
      return object.items;
    } else {
      return false;
    }
  },

  showFilters: function() {
    let catId = this.get('catId');
    let categories = this.get('categories');
    let category = _.findWhere(categories, {id: catId});
    // Selected filters category
    this.set({category});
  }

});