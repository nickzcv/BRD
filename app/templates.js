this["tpl"] = this["tpl"] || {};
this["tpl"]["templates"] = this["tpl"]["templates"] || {};
this["tpl"]["templates"]["filter"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"actions\">\r\n  <button type=\"button\" class=\"btn btn-default btn-lg disabled\">Добавить объявление</button>\r\n</div>\r\n<div class=\"filters hidden-xs hidden-sm\">\r\n  <a class=\"close-btn visible-xs visible-sm\"><span class=\"ion-close\"></span></a>\r\n  <div class=\"checkbox\">\r\n    <label><input type=\"checkbox\" value=\"\">Спрос</label>\r\n  </div>\r\n  <div class=\"checkbox\">\r\n    <label><input type=\"checkbox\" value=\"\">Предложение</label>\r\n  </div>\r\n  <div class=\"line-breaker\"></div>\r\n  <div class=\"checkbox\">\r\n    <label><input type=\"checkbox\" value=\"\">Товар</label>\r\n  </div>\r\n  <div class=\"checkbox\">\r\n    <label><input type=\"checkbox\" value=\"\">Услуга</label>\r\n  </div>\r\n  <div class=\"line-breaker\"></div>\r\n  <div class=\"form-group\">\r\n    <select class=\"form-control\">\r\n      <option>Выбрать категорию</option>\r\n      <option>2</option>\r\n      <option>3</option>\r\n      <option>4</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"line-breaker\"></div>\r\n  <div class=\"form-group\">\r\n    <select class=\"form-control\">\r\n      <option>Страна</option>\r\n      <option>2</option>\r\n      <option>3</option>\r\n      <option>4</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <select class=\"form-control\">\r\n      <option>Город</option>\r\n      <option>2</option>\r\n      <option>3</option>\r\n      <option>4</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"line-breaker\"></div>\r\n  <div class=\"form-group\">\r\n    <button type=\"button\" class=\"btn btn-default disabled\">Сбросить фильтр <span class=\"ion-refresh\"></span></button>\r\n  </div>\r\n</div>";
},"useData":true});
this["tpl"]["templates"]["footer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"copyright\">\r\n  <span class=\"glyphicon glyphicon-copyright-mark\"></span> 2017\r\n</div>";
},"useData":true});
this["tpl"]["templates"]["header"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"row gradient\">\r\n  <!-- Logo -->\r\n  <div class=\"col-md-3 logo\">\r\n    <a href=\"/\">BRD.by</a>\r\n  </div>\r\n  <!-- /end logo -->\r\n  <!-- Navigation -->\r\n  <nav class=\"col-md-9 navigation hidden\">\r\n    <ul>\r\n      <li><a class=\"active\">Главная</a></li>\r\n      <li><a>Информация</a></li>\r\n      <li>\r\n        <button type=\"button\" class=\"btn btn-default\" data-toggle=\"modal\" data-target=\"#registration\">Регистрация</button>\r\n        <button type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#login\">Войти</button>\r\n      </li>\r\n    </ul>\r\n    <div class=\"languages\">\r\n      <span class=\"flag eng\"></span>\r\n      <span class=\"flag bel\"></span>\r\n    </div>\r\n  </nav>\r\n  <!-- /end navigation -->\r\n</div>\r\n<div class=\"hamburger visible-xs\">\r\n  <span class=\"ion-navicon\"></span>\r\n</div>\r\n\r\n\r\n<!-- Login modal -->\r\n<div class=\"modal fade\" id=\"login\"  tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"loginModalLabel\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\" id=\"loginModalLabel\">Вход</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputEmail1\">Email</label>\r\n            <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Email адрес\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputPassword1\">Пароль</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Пароль\">\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-12 col-sm-6\">\r\n              <div class=\"checkbox\">\r\n                <label>\r\n                  <input type=\"checkbox\"> Запомнить пароль.\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xs-12 col-sm-6\">\r\n              <a class=\"forgot-password\">Забыли пароль?</a>\r\n            </div>\r\n          </div>\r\n          <button type=\"button\" class=\"btn btn-default login-btn\">Войти</button>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <div class=\"no-account\">\r\n          У вас нет аккаунта? <a class=\"register-link\">Зарегистрируйтесь</a> &mdash; это бесплатно.\r\n        </div>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n\r\n<!-- Forgot modal -->\r\n<div class=\"modal fade\" id=\"forgot\"  tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"forgotModalLabel\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\" id=\"forgotModalLabel\">Восстановление пароля</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputEmail1\">Email</label>\r\n            <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Email адрес\">\r\n          </div>\r\n\r\n          <button type=\"button\" class=\"btn btn-default login-btn\">Выслать пароль</button>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n\r\n<!-- Login modal -->\r\n<div class=\"modal fade\" id=\"registration\"  tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"registrationModalLabel\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\" id=\"registrationModalLabel\">Регистрация</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form>\r\n          <div class=\"form-group\">\r\n            <label for=\"1\">Email</label>\r\n            <input type=\"email\" class=\"form-control\" id=\"1\" placeholder=\"Email адрес\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"2\">Пароль</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"2\" placeholder=\"Выберите пароль\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"3\">Пароль еще раз</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"3\" placeholder=\"Подтвердите выбранный пароль\">\r\n          </div>\r\n          <div class=\"form-group checkbox\">\r\n            <label>\r\n              <input type=\"checkbox\"> Я соглашаюсь с правилами ресурса.\r\n            </label>\r\n          </div>\r\n          <button type=\"button\" class=\"btn btn-default login-btn\">Зарегистрироваться</button>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n";
},"useData":true});
this["tpl"]["templates"]["main"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<!-- Header -->\r\n<header class=\"container-fluid\"></header>\r\n<!-- /end header -->\r\n\r\n<section class=\"container-fluid section home-banner\"></section>\r\n\r\n<section class=\"container-fluid section home\">\r\n  <div class=\"row\">\r\n    <!-- Filter -->\r\n    <div class=\"col-md-3 filter\"></div>\r\n    <!-- /end filter -->\r\n    <div class=\"col-md-7\">\r\n      <div class=\"content-filter\">\r\n        <div class=\"btn-group mobile-filter-btn visible-xs visible-sm\" role=\"group\" aria-label=\"First group\">\r\n          <button type=\"button\" class=\"btn btn-default\"><span class=\"ion-android-options\"></span></button>\r\n        </div>\r\n        <div class=\"search\">\r\n          <div class=\"input-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Искать\">\r\n            <span class=\"input-group-btn\">\r\n              <button class=\"btn btn-default\" type=\"button\"><span class=\"ion-search\"></span></button>\r\n            </span>\r\n          </div><!-- /input-group -->\r\n        </div>\r\n        <div class=\"btn-toolbar hidden-xs\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\r\n          <div class=\"btn-group\" role=\"group\" aria-label=\"First group\">\r\n            <button type=\"button\" class=\"btn btn-default\"><span class=\"ion-image\"></span></button>\r\n          </div>\r\n          <div class=\"btn-group\" role=\"group\" aria-label=\"Second group\">\r\n            <button type=\"button\" class=\"btn btn-default\"><span class=\"ion-contrast\"></span></button>\r\n            <button type=\"button\" class=\"btn btn-default\"><span class=\"ion-grid\"></span></button>\r\n            <button type=\"button\" class=\"btn btn-default\"><span class=\"ion-arrow-move\"></span></button>\r\n          </div>\r\n          <div class=\"btn-group\" role=\"group\" aria-label=\"Third group\">\r\n            <button type=\"button\" class=\"btn btn-default\"><span class=\"ion-refresh\"></span></button>\r\n          </div>\r\n        </div><!-- /btn-toolbar -->\r\n      </div>\r\n\r\n      <!-- Ads list  -->\r\n      <div class=\"ads-list\">\r\n        <!-- ads-item -->\r\n        <div class=\"ads-item\">\r\n          <div class=\"type\">Продам</div>\r\n          <div class=\"photo\"></div>\r\n          <div class=\"title\">Паллетная заготовка, 1-2 сорт</div>\r\n          <div class=\"subtitle\">\r\n            Продам Паллетная заготовка. Все в наличии. Хвоя.\r\n          </div>\r\n          <div class=\"item-footer\">\r\n            <span class=\"date\"><span class=\"ion-calendar\"></span> 17.05.2017</span>\r\n            <span class=\"organization\"><span class=\"ion-person-stalker\"></span> Фирма</span>\r\n            <span class=\"location\"><span class=\"ion-location\"></span> Борисов, Беларусь</span>\r\n            <a class=\"more\">Подробнее</a>\r\n          </div>\r\n        </div>\r\n        <!-- /end ads-item -->\r\n\r\n      </div>\r\n      <!-- /end ads-list -->\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n      <div class=\"rside\">\r\n      "
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- Footer -->\r\n<footer class=\"footer\"></footer>\r\n<!-- /end Footer  -->";
},"useData":true});