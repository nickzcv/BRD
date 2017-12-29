app.views.AddAvatarView = Backbone.Marionette.View.extend({

  template: tpl.templates.avatar,

  ui: {
    avatarModal: '#avatar',
    uploader: '#upload',
    uploadPreview: '#upload-preview',
  },

  events: {
    'hide.bs.modal' : function () {
      this.destroy();
    },
    'change @ui.uploader': 'uploadImage',
  },

  onRender: function() {
    this.ui.avatarModal.modal('show');
  },

  uploadImage: function(event) {
    // Clear preview div
    this.ui.uploadPreview.empty();
    // Init croppie
    let $uploadCrop = this.ui.uploadPreview.croppie({
      viewport: {
        width: 200,
        height: 200,
        type: 'circle'
      },
      boundary: {
        width: 300,
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

    // Bind upload event action
    $('.upload-avatar').on('click', function() {
      $uploadCrop.croppie('result', {
        type: 'canvas',
        size: 'viewport'
      }).then((resp) => {
        $.ajax({
          url: 'api/upload/profile',
          method: 'POST',
          contentType: 'application/json',
          dataType: 'json',
          data: JSON.stringify({
            'user': brd.controllers.getUserId(),
            'image': resp
          })
        }).done(function() {
          $("[data-dismiss=modal]").trigger({ type: "click" });
          let message = `Фото загружено. Сохраните изменения и обновите страницу чтобы увидеть результат.`;
          $('.alert').addClass('alert-success').text(message).show()
        }).fail(function() {
          $("[data-dismiss=modal]").trigger({ type: "click" });
          $('.alert').addClass('alert-danger').text('Ошибка загрузки изображения.').show()
        });

      });
    });

  }

});