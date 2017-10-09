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
                from: null,
                to: null,
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
                from: null,
                to: null,
              },
              {
                type: 'input',
                id: 'shirina',
                label: 'Ширина, мм',
                from: null,
                to: null,
              },
              {
                type: 'input',
                id: 'tolshina',
                label: 'Толщина, мм',
                from: null,
                to: null,
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
                    label: 'parket_doska',
                    value: 'Паркетная доска',
                  }
                ]
              },
              {
                label: 'obshiv_materialy',
                title: 'Обшивочные материалы',
                level: 'child',
                type: 'checkbox',
                items: [
                  {
                    label: 'vagonka',
                    value: 'Вагонка',
                  },
                  {
                    label: 'evrovagonka',
                    value: 'Евровагонка',
                  },
                  {
                    label: 'block_house',
                    value: 'Блок-хаус',
                  },
                  {
                    label: 'imitaciya_brusa',
                    value: 'Имитация бруса',
                  },
                  {
                    label: 'planken',
                    value: 'Планкен',
                  }
                ]
              },
              {
                label: 'pogon_izdeliya',
                title: 'Погонажные изделия',
                level: 'child',
                type: 'checkbox',
                items: [
                  {
                    label: 'nalichnik',
                    value: 'Наличник',
                  },
                  {
                    label: 'plintus',
                    value: 'Плинтус',
                  },
                  {
                    label: 'raskladka',
                    value: 'Раскладка',
                  },
                  {
                    label: 'der_ugolok',
                    value: 'Деревянный уголок',
                  },
                  {
                    label: 'dvernaya_korobka',
                    value: 'Дверная коробка',
                  },
                  {
                    label: 'shtapiki',
                    value: 'Штапики',
                  },
                  {
                    label: 'reiki',
                    value: 'Рейки',
                  }
                ]
              },
              {
                label: 'kleenyi_brus',
                title: 'Клееный брус',
                level: 'child',
                type: 'checkbox'
              },
              {
                label: 'fanera_dsp_dvp_mdf_osp',
                title: 'Фанера, ДСП, ДВП, МДФ, ОСП',
                level: 'child',
                type: 'checkbox'
              },
              {
                label: 'mebelnyi_shit',
                title: 'Мебельный щит',
                level: 'child',
                type: 'checkbox'
              },
              {
                label: 'podokonnaya_doska',
                title: 'Подоконная доска',
                level: 'child',
                type: 'checkbox'
              },
              {
                label: 'element_lestnic',
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
      // Retrive Id and Destination
      let filterLabelArray = filterLabel.split('-'),
          id = filterLabelArray[0],
          destination = filterLabelArray[1];
      // Iterate over all filters in current category
      category.filters.forEach((currentValue) => {
        // Retrive array of inner filter items
        let items = this.retriveItems(currentValue);
        // Process inner items
        if (items) {
          items.forEach((currentValue) => {
            if (currentValue.id === id) {
              currentValue[destination] = value;
              currentValue.selected = true;
            }
          });
        }
      });

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