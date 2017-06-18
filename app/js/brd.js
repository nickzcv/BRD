var brd = {

  model: {},
  router: {},
  regions: {},
  controllers: {
    /*
     * Fully hide modal window
     *
     */
    hideModalFully: function () {
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
    },

    /*
     * Save token in localStorage
     *
     */
    saveToken: function (token) {
      localStorage.setItem('token', token);
    },

    /*
     * Get token from localStorage
     *
     */
    getToken: function () {
      return localStorage.getItem('token');
    },

    /*
     * Remove token from localStorage
     *
     */
    logout: function () {
      localStorage.removeItem('token');
    }

  },
  userProfile: {}

};