app.views.AddAvatarView = Backbone.Marionette.View.extend({

  template: tpl.templates.avatar,

  ui: {
    avatarModal: '#avatar',
    uploader: '#file',
    uploadPreview: '#upload-preview',
    //uploadAvatar: '#upload-avatar',
  },

  events: {
    'hide.bs.modal' : function () {
      this.destroy();
    },
    'change @ui.uploader': 'uploadImage',
    //'click @ui.uploadAvatar': 'uploadToServer',
  },


  onRender: function() {
    this.ui.avatarModal.modal('show');
  },

  uploadToServer: function() {
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
          console.log('jQuery bind complete');
        });
      };
      reader.readAsDataURL(event.target.files[0]);
    } else {
      console.log("Sorry - you're browser doesn't support the FileReader API");
    }

    // Bind upload event action
    $('.upload-avatar').on('click', function() {
      $uploadCrop.croppie('result', {
        type: "blob",
        format: "png"
      }).then((resp) => {
        console.log(resp)
        $('input[type=file]')[0] = resp;
        //$('#form').submit();
        //var file = $('#form').files[0];
        var form = $('#form');

        let img = new Image();
        img.src = resp;
        $('input[type=file]')[0] = img;

        // Create an FormData object
        var data = new FormData(form);



        var formData = new FormData();

        formData.append('file', $('input[type=file]')[0].files[0]);

        console.log('+++++++')
        console.log($('input[type=file]')[0].files[0])

        $.ajax({
          url: 'api/upload/profile',
          method: 'POST',
          processData: false,
          contentType: 'application/json',
          //dataType: "binary",
          cache: false,
          data: JSON.stringify({ 'image': resp}),//formData//
        }).done(function(data) {
          console.log(data);
        });
      });
    });

  }

});