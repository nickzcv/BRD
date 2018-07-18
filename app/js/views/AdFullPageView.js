app.views.AdFullPageView = Mn.View.extend({

  template: tpl.templates.ad_full_view,

  regions: {

  },

  ui: {

  },

  modelEvents: {
    'change': 'render'
  },

  initialize: async function() {
    // Start fetching model data
    try {
      let response = await this.model.fetch();

      if (response.error) {
        this.model.set({
          loading: false,
          isError: true,
          errorMessage: 'Такого объявления не существует',
        });
      } else {
        this.model.set({
          loading: false,
          isError: false,
        });
      }

    } catch (error) {
      this.model.set({
        loading: false,
        isError: true,
        errorMessage: 'Service error from catch.',
      });
    }
  },

});