let brd = {

  model: {},
  router: {},
  regions: {},
  controllers: {
    /*
     * Fully hide modal window
     *
     */
    hideModalFully: function() {
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
    },

    /*
     * Save token in localStorage
     *
     */
    saveToken: function(token) {
      localStorage.setItem('token', token);
    },

    /*
     * Get token from localStorage
     *
     */
    getToken: function() {
      return localStorage.getItem('token');
    },

    /*
     * Remove token from localStorage
     *
     */
    logout: function() {
      localStorage.removeItem('token');
    },

    /*
     * Check token validity
     *
     */
    isLoggedIn: function() {
      let token = this.getToken();
      let payload;

      if(token){
        payload = token.split('.')[1];
        payload = atob(payload);
        payload = JSON.parse(payload);

        return payload.exp > Date.now() / 1000;
      } else {
        return false;
      }
    }

  }

};