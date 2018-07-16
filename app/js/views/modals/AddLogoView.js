app.views.AddLogoView = Mn.View.extend({

  template: tpl.templates.logo,

  logoName: '',

  ui: {
    logoModal: '#logo',
    uploader: '#upload',
    uploadPreview: '#upload-preview',
  },

  events: {
    'hide.bs.modal' : function () {
      this.destroy();
    },
    'change @ui.uploader': 'uploadImage',
  },

  initialize: function(options) {
    this.logoName = options.logo;
  },

  onAttach: function() {
    this.ui.logoModal.modal('show');
  },

  uploadImage: function(event) {
    // Clear preview div
    this.ui.uploadPreview.empty();
    // Init croppie
    let $uploadCrop = this.ui.uploadPreview.croppie({
      viewport: {
        width: 300,
        height: 130
      },
      boundary: {
        width: 400,
        height: 300
      },
      mouseWheelZoom: true
    });
    // Preview image
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = function(event) {
        $uploadCrop.croppie('bind', {
          url: event.target.result
        }).then(() => {
          // console.log('jQuery bind complete');
        });
      };
      reader.readAsDataURL(event.target.files[0]);
    } else {
      console.log("Sorry - you're browser doesn't support the FileReader API");
    }

    let fileName = this.logoName;


    // Bind upload event action
    $('.upload-logo').on('click', () => {
      $uploadCrop.croppie('result', {
        type: 'canvas',
        size: 'viewport'
      }).then((resp) => {
        $.ajax({
          url: 'api/upload/logo',
          method: 'POST',
          contentType: 'application/json',
          dataType: 'json',
          data: JSON.stringify({
            'logoName': fileName,
            'image': resp
          })
        }).done(() => {
          $("[data-dismiss=modal]").trigger({ type: "click" });
          this.triggerMethod('select:item');
        }).fail(() => {
          $("[data-dismiss=modal]").trigger({ type: "click" });
          $('.alert').addClass('alert-danger').text('Ошибка загрузки изображения.').show()
        });

      });
    });

  }

});