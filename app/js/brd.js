var brd = {

  model: {},
  router: {},
  regions: {},
  controllers: {
    hideModalBack: function () {
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
    }
  }

};