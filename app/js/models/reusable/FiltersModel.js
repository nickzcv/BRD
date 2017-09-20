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
            type: 'checkbox',
            items: [
              {
                type: 'input',
                id: 'vlazhnost',
                label: '',
                from: 0,
                to: 0,
              },
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
            separator: true,
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
          },
          {
            label: 'sizes',
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
            label: '',
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
        id: 3,
        title: 'Лесоматериалы',
        filters: [
          {
            label: '',
            title: '',
            type: 'checkbox',
            items: [
              {
                label: '',
                value: 'Деловая древесина',
              },
              {
                label: '',
                value: 'Дрова',
              },
              {
                label: '',
                value: 'Технологическое сырье',
              }
            ]
          },
          {
            label: 'poroda',
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
            label: '',
            subtitle: 'Размеры',
            title: 'Толщина(диаметр)',
            level: 'child',
            type: 'checkbox',
            items: [
              {
                label: '',
                value: 'от 2 до 13 см',
              },
              {
                label: '',
                value: 'от 14 до 24 см',
              },
              {
                label: '',
                value: 'более 26 см',
              },
            ]
          },
          {
            label: '',
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
            label: '',
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
            label: '',
            title: '',
            level: 'parent',
            separator: true,
            items: [
              {
                label: '',
                title: 'Материалы для покрытия пола',
                level: 'child',
                type: 'checkbox',
                items: [
                  {
                    label: '',
                    value: 'Доска пола',
                  },
                  {
                    label: '',
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