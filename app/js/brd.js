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
        try {
          payload = token.split('.')[1];
          payload = atob(payload);
          payload = JSON.parse(payload);
        } catch(e) {
          console.log(e);
          return false;
        }
        return payload.exp > Date.now() / 1000;
      } else {
        return false;
      }
    },

    /*
     * Get current user id
     *
     */
    getUserId: function() {
      let token = this.getToken();
      let payload;

      if(token){
        try {
          payload = token.split('.')[1];
          payload = atob(payload);
          payload = JSON.parse(payload);
        return payload._id
        } catch(e) {
          console.log(e);
          return false;
        }
      }
    }

  }

};