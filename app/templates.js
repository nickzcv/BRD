this["tpl"] = this["tpl"] || {};
this["tpl"]["templates"] = this["tpl"]["templates"] || {};
this["tpl"]["templates"]["add_ad"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h3>Новое объявление</h3>\r\n<hr>\r\n<form class=\"add-ad-form\">\r\n  <div class=\"form-group\">\r\n    <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\">Куплю</label>\r\n    <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\">Продам</label>\r\n  </div>\r\n  <div class=\"form-divider\"></div>\r\n  <div class=\"form-group\">\r\n    <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio1\">Товар</label>\r\n    <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio1\">Услуга</label>\r\n  </div>\r\n\r\n  <button type=\"button\" class=\"btn btn-default save-ad disabled\">Сохранить</button>\r\n</form>";
},"useData":true});
this["tpl"]["templates"]["ads"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<!--  left-navigation -->\r\n<div class=\"left-navigation\"></div>\r\n<!-- /end  left-navigation -->\r\n\r\n<div class=\"profile ads\">\r\n  <div class=\"title\">\r\n    <span class=\"icon ion-clipboard\"></span>\r\n    <span class=\"title-text\">Мои объявления</span>\r\n  </div>\r\n  <div class=\"page\">\r\n\r\n    <button type=\"button\" class=\"btn btn-default add-new-ad\">Добавить объявление</button>\r\n\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n";
},"useData":true});
this["tpl"]["templates"]["dashboard"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<!--  left-navigation -->\r\n<div class=\"left-navigation\"></div>\r\n<!-- /end  left-navigation -->\r\n\r\n<div class=\"profile dashboard\">\r\n  <div class=\"title\">\r\n    <span class=\"icon ion-person\"></span>\r\n    <span class=\"title-text\">Мой кабинет</span>\r\n  </div>\r\n  <div class=\"page\">\r\n\r\n    dashboard\r\n\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n";
},"useData":true});
this["tpl"]["templates"]["filter"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"actions\">\r\n  <button type=\"button\" class=\"btn btn-default btn-lg\">Добавить объявление</button>\r\n</div>\r\n<div class=\"filters hidden-xs hidden-sm\">\r\n  <a class=\"close-btn visible-xs visible-sm\"><span class=\"ion-close\"></span></a>\r\n  <div class=\"checkbox\">\r\n    <label><input type=\"checkbox\" value=\"\">Спрос</label>\r\n  </div>\r\n  <div class=\"checkbox\">\r\n    <label><input type=\"checkbox\" value=\"\">Предложение</label>\r\n  </div>\r\n  <div class=\"line-breaker\"></div>\r\n  <div class=\"checkbox\">\r\n    <label><input type=\"checkbox\" value=\"\">Товар</label>\r\n  </div>\r\n  <div class=\"checkbox\">\r\n    <label><input type=\"checkbox\" value=\"\">Услуга</label>\r\n  </div>\r\n  <div class=\"line-breaker\"></div>\r\n  <div class=\"form-group\">\r\n    <select class=\"form-control\">\r\n      <option>Выбрать категорию</option>\r\n      <option>2</option>\r\n      <option>3</option>\r\n      <option>4</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"line-breaker\"></div>\r\n  <div class=\"form-group\">\r\n    <select class=\"form-control\">\r\n      <option>Страна</option>\r\n      <option>2</option>\r\n      <option>3</option>\r\n      <option>4</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <select class=\"form-control\">\r\n      <option>Город</option>\r\n      <option>2</option>\r\n      <option>3</option>\r\n      <option>4</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"line-breaker\"></div>\r\n  <div class=\"form-group\">\r\n    <button type=\"button\" class=\"btn btn-default disabled\">Сбросить фильтр <span class=\"ion-refresh\"></span></button>\r\n  </div>\r\n</div>";
},"useData":true});
this["tpl"]["templates"]["footer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"copyright\">\r\n  <span class=\"glyphicon glyphicon-copyright-mark\"></span> 2017\r\n</div>";
},"useData":true});
this["tpl"]["templates"]["forbidden"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"forbidden\">\r\n  <div class=\"ion-ios-locked icon\"></div>\r\n  <h2>Вы не авторизованы.</h2>\r\n  <button type=\"button\" class=\"btn btn-default login\">Вход</button>\r\n</div>\r\n\r\n<div class=\"modal-section\"></div>";
},"useData":true});
this["tpl"]["templates"]["header"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "\r\n          <div class=\"user\">\r\n            <div class=\"user-profile\">\r\n              <div class=\"border\">\r\n                <i class=\"ion-person\"></i>\r\n              </div>\r\n              "
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.name : stack1), depth0))
    + "\r\n            </div>\r\n            <span class=\"ion-log-out logout\"></span>\r\n          </div>\r\n\r\n";
},"3":function(depth0,helpers,partials,data) {
    return "          <button type=\"button\" class=\"btn btn-default registration\">Регистрация</button>\r\n          <button type=\"button\" class=\"btn btn-success login\">Войти</button>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row header-wrapper\">\r\n  <!-- Logo -->\r\n  <div class=\"col-md-3 logo\">\r\n    <a href=\"/\">BRD</a>\r\n  </div>\r\n  <!-- /end logo -->\r\n  <!-- Navigation -->\r\n  <nav class=\"col-md-9 navigation hidden\">\r\n    <ul>\r\n      <li><a class=\"home-link\">Главная</a></li>\r\n      <li><a>Компании</a></li>\r\n      <li><a>FAQ</a></li>\r\n      <li>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.user : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "      </li>\r\n    </ul>\r\n  </nav>\r\n  <!-- /end navigation -->\r\n</div>\r\n<div class=\"hamburger visible-xs\">\r\n  <span class=\"ion-navicon\"></span>\r\n</div>\r\n\r\n<div class=\"modal-section\"></div>";
},"useData":true});
this["tpl"]["templates"]["home"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<!-- Filter -->\r\n<div class=\"col-md-3 filter\"></div>\r\n<!-- /end filter -->\r\n\r\n<div class=\"col-md-7\">\r\n  <div class=\"content-filter\">\r\n    <div class=\"btn-group mobile-filter-btn visible-xs visible-sm\" role=\"group\" aria-label=\"First group\">\r\n      <button type=\"button\" class=\"btn btn-default\"><span class=\"ion-android-options\"></span></button>\r\n    </div>\r\n    <div class=\"search\">\r\n      <div class=\"input-group\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Искать\">\r\n        <span class=\"input-group-btn\">\r\n              <button class=\"btn btn-default\" type=\"button\"><span class=\"ion-search\"></span></button>\r\n            </span>\r\n      </div><!-- /input-group -->\r\n    </div>\r\n    <div class=\"btn-toolbar hidden-xs\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\r\n      <div class=\"btn-group\" role=\"group\" aria-label=\"First group\">\r\n        <button type=\"button\" class=\"btn btn-default\"><span class=\"ion-image\"></span></button>\r\n      </div>\r\n      <div class=\"btn-group\" role=\"group\" aria-label=\"Second group\">\r\n        <button type=\"button\" class=\"btn btn-default\"><span class=\"ion-contrast\"></span></button>\r\n        <button type=\"button\" class=\"btn btn-default\"><span class=\"ion-grid\"></span></button>\r\n        <button type=\"button\" class=\"btn btn-default\"><span class=\"ion-arrow-move\"></span></button>\r\n      </div>\r\n      <div class=\"btn-group\" role=\"group\" aria-label=\"Third group\">\r\n        <button type=\"button\" class=\"btn btn-default\"><span class=\"ion-refresh\"></span></button>\r\n      </div>\r\n    </div><!-- /btn-toolbar -->\r\n  </div>\r\n\r\n  <!-- Ads list  -->\r\n  <div class=\"ads-list\">\r\n    <!-- ads-item -->\r\n    <div class=\"ads-item\">\r\n      <div class=\"type\">Продам</div>\r\n      <div class=\"photo\"></div>\r\n      <div class=\"title\">Паллетная заготовка, 1-2 сорт</div>\r\n      <div class=\"subtitle\">\r\n        Продам Паллетная заготовка. Все в наличии. Хвоя.\r\n      </div>\r\n      <div class=\"item-footer\">\r\n        <span class=\"date\"><span class=\"ion-calendar\"></span> 17.05.2017</span>\r\n        <span class=\"organization\"><span class=\"ion-person-stalker\"></span> Фирма</span>\r\n        <span class=\"location\"><span class=\"ion-location\"></span> Борисов, Беларусь</span>\r\n        <a class=\"more\">Подробнее</a>\r\n      </div>\r\n    </div>\r\n    <!-- /end ads-item -->\r\n\r\n  </div>\r\n  <!-- /end ads-list -->\r\n\r\n</div>\r\n\r\n<div class=\"col-md-2\">\r\n  <div class=\"rside\">\r\n    "
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "\r\n  </div>\r\n</div>";
},"useData":true});
this["tpl"]["templates"]["main"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<!-- Header -->\r\n<header class=\"container-fluid\"></header>\r\n<!-- /end header -->\r\n\r\n<section class=\"container-fluid section home-banner\"></section>\r\n\r\n<!-- Main content -->\r\n<section class=\"container-fluid section home\">\r\n  <div class=\"row home-wrapper content\">\r\n  </div>\r\n</section>\r\n<!-- /end main content -->\r\n\r\n<!-- Footer -->\r\n<footer class=\"footer\"></footer>\r\n<!-- /end Footer  -->";
},"useData":true});
this["tpl"]["templates"]["settings"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<!--  left-navigation -->\r\n<div class=\"left-navigation\"></div>\r\n<!-- /end  left-navigation -->\r\n\r\n\r\n<div class=\"profile settings\">\r\n  <div class=\"title\">\r\n    <span class=\"icon ion-settings\"></span>\r\n    <span class=\"title-text\">Настройки</span>\r\n  </div>\r\n\r\n\r\n  <div class=\"tabs\">\r\n    <div class=\"tab profile-settings-link\">Настройки профиля</div>\r\n    <div class=\"tab account-settings-link\">Настройки аккаунта</div>\r\n  </div>\r\n\r\n  <!--  page (inner sections comes here) -->\r\n  <div class=\"page\"></div>\r\n  <!-- /end  page -->\r\n\r\n\r\n</div>\r\n";
},"useData":true});
this["tpl"]["templates"]["settings_account_section"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<form>\r\n  <div class=\"form-group short\">\r\n    <label for=\"email\">Email</label>\r\n    <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\""
    + this.escapeExpression(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "\" disabled>\r\n  </div>\r\n  <div class=\"form-group short\">\r\n    <label for=\"password\">Пароль</label>\r\n    <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"********\" disabled>\r\n  </div>\r\n\r\n  <button type=\"button\" class=\"btn btn-default save disabled\">Сохранить</button>\r\n</form>";
},"useData":true});
this["tpl"]["templates"]["settings_profile_section"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "value=\""
    + this.escapeExpression(((helper = (helper = helpers.lastName || (depth0 != null ? depth0.lastName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"lastName","hash":{},"data":data}) : helper)))
    + "\"";
},"3":function(depth0,helpers,partials,data) {
    return " placeholder=\"Фамилия\"";
},"5":function(depth0,helpers,partials,data) {
    var helper;

  return "value=\""
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\"";
},"7":function(depth0,helpers,partials,data) {
    return " placeholder=\"Имя\"";
},"9":function(depth0,helpers,partials,data) {
    var helper;

  return "value=\""
    + this.escapeExpression(((helper = (helper = helpers.middleName || (depth0 != null ? depth0.middleName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"middleName","hash":{},"data":data}) : helper)))
    + "\"";
},"11":function(depth0,helpers,partials,data) {
    return " placeholder=\"Отчество\"";
},"13":function(depth0,helpers,partials,data) {
    var helper;

  return "value=\""
    + this.escapeExpression(((helper = (helper = helpers.work || (depth0 != null ? depth0.work : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"work","hash":{},"data":data}) : helper)))
    + "\"";
},"15":function(depth0,helpers,partials,data) {
    var helper;

  return "value=\""
    + this.escapeExpression(((helper = (helper = helpers.position || (depth0 != null ? depth0.position : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"position","hash":{},"data":data}) : helper)))
    + "\"";
},"17":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "          <option value=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias1).call(depth0,(depth0 != null ? depth0.id : depth0),"===",((stack1 = (depths[1] != null ? depths[1].country : depths[1])) != null ? stack1.id : stack1),{"name":"compare","hash":{},"fn":this.program(18, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</option>\r\n";
},"18":function(depth0,helpers,partials,data) {
    return "selected";
},"20":function(depth0,helpers,partials,data) {
    var stack1;

  return "value=\""
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.city : depth0)) != null ? stack1.title : stack1), depth0))
    + "\"";
},"22":function(depth0,helpers,partials,data) {
    return " placeholder=\"Город\"";
},"24":function(depth0,helpers,partials,data) {
    return "";
},"26":function(depth0,helpers,partials,data) {
    return "disabled";
},"28":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <li class=\"city\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + " <span class=\"area\">"
    + alias3(((helper = (helper = helpers.area || (depth0 != null ? depth0.area : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"area","hash":{},"data":data}) : helper)))
    + "</span> <span class=\"region\"> "
    + alias3(((helper = (helper = helpers.region || (depth0 != null ? depth0.region : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"region","hash":{},"data":data}) : helper)))
    + "</span></li>\r\n";
},"30":function(depth0,helpers,partials,data) {
    var helper;

  return "value=\""
    + this.escapeExpression(((helper = (helper = helpers.workEmail || (depth0 != null ? depth0.workEmail : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"workEmail","hash":{},"data":data}) : helper)))
    + "\"";
},"32":function(depth0,helpers,partials,data) {
    return " placeholder=\"example@mail.com\"";
},"34":function(depth0,helpers,partials,data) {
    var helper;

  return "value=\""
    + this.escapeExpression(((helper = (helper = helpers.phone || (depth0 != null ? depth0.phone : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"phone","hash":{},"data":data}) : helper)))
    + "\"";
},"36":function(depth0,helpers,partials,data) {
    return " placeholder=\"+375 00 0000000\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, alias1=helpers.helperMissing, alias2="function", alias3=helpers.blockHelperMissing, buffer = 
  "<form>\r\n  <div class=\"form-group row\">\r\n    <div class=\"col-md-5\">\r\n      <div class=\"image-upload\">\r\n        <label for=\"photo\" id=\"preview\">\r\n\r\n        </label>\r\n        <input id=\"photo\" type=\"file\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-7\">\r\n      <div class=\"form-group \">\r\n        <label for=\"lastName\">Фамилия</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"lastName\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.lastName : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.program(3, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + ">\r\n      </div>\r\n      <div class=\"form-group \">\r\n        <label for=\"name\">Имя</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"name\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.program(7, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + ">\r\n      </div>\r\n      <div class=\"form-group \">\r\n        <label for=\"middleName\">Отчество</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"middleName\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.middleName : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0, blockParams, depths),"inverse":this.program(11, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + ">\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"work\">Место работы</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"work\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.work : depth0),{"name":"if","hash":{},"fn":this.program(13, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"position\">Должность</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"position\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.position : depth0),{"name":"if","hash":{},"fn":this.program(15, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\r\n  </div>\r\n\r\n  <p class=\"lbl\">Ваше местоположение</p>\r\n  <div class=\"form-group row\">\r\n    <div class=\"col-md-6 m-b-1\">\r\n      <select class=\"form-control\" id=\"country\">\r\n        <option value=\"\">Страна</option>\r\n";
  stack1 = ((helper = (helper = helpers.countries || (depth0 != null ? depth0.countries : depth0)) != null ? helper : alias1),(options={"name":"countries","hash":{},"fn":this.program(17, data, 0, blockParams, depths),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.countries) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "      </select>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <input type=\"text\" class=\"form-control\" id=\"city\"\r\n        "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.city : depth0),{"name":"if","hash":{},"fn":this.program(20, data, 0, blockParams, depths),"inverse":this.program(22, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\r\n        "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.country : depth0),{"name":"if","hash":{},"fn":this.program(24, data, 0, blockParams, depths),"inverse":this.program(26, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + ">\r\n      <div class=\"cityDropdown hide\">\r\n        <ul>\r\n";
  stack1 = ((helper = (helper = helpers.cities || (depth0 != null ? depth0.cities : depth0)) != null ? helper : alias1),(options={"name":"cities","hash":{},"fn":this.program(28, data, 0, blockParams, depths),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.cities) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <p class=\"lead\">Контактные данные</p>\r\n  <p class=\"lbl2\">Будут отображаться в объявлениях</p>\r\n  <div class=\"form-group short\">\r\n    <div class=\"input-group\">\r\n      <span class=\"input-group-addon\">@</span>\r\n      <input type=\"text\" class=\"form-control\" id=\"workEmail\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.workEmail : depth0),{"name":"if","hash":{},"fn":this.program(30, data, 0, blockParams, depths),"inverse":this.program(32, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + ">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group short\">\r\n    <div class=\"input-group\">\r\n      <span class=\"input-group-addon\"><i class=\"ion-android-call\"></i></span>\r\n      <input type=\"text\" class=\"form-control\" id=\"phone\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.phone : depth0),{"name":"if","hash":{},"fn":this.program(34, data, 0, blockParams, depths),"inverse":this.program(36, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + ">\r\n    </div>\r\n  </div>\r\n\r\n  <button type=\"submit\" class=\"btn btn-default saveProfile\">Сохранить</button>\r\n</form>";
},"useData":true,"useDepths":true});
this["tpl"]["templates"]["forgot"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<!-- Forgot modal -->\r\n<div class=\"modal fade\" id=\"forgot\"  tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"forgotModalLabel\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\" id=\"forgotModalLabel\">Восстановление пароля</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputEmail1\">Email</label>\r\n            <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Email адрес\">\r\n          </div>\r\n\r\n          <button type=\"button\" class=\"btn btn-default login-btn\">Выслать пароль</button>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->";
},"useData":true});
this["tpl"]["templates"]["login"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<!-- Login modal -->\r\n<div class=\"modal fade\" id=\"login\"  tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"loginModalLabel\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\" id=\"loginModalLabel\">Вход</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <div class=\"alert alert-danger\" role=\"alert\"></div>\r\n\r\n        <form id=\"login-form\">\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">Email</label>\r\n            <input type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"Email адрес\" required=\"required\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"password\">Пароль</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\" placeholder=\"Пароль\">\r\n          </div>\r\n          <div>\r\n            <a class=\"forgot-password\">Забыли пароль?</a>\r\n          </div>\r\n          <button type=\"submit\" class=\"btn btn-default login-btn\">Войти</button>\r\n        </form>\r\n        <div class=\"loader-wrapper\">\r\n          <div class=\"loader\"></div>\r\n        </div>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->";
},"useData":true});
this["tpl"]["templates"]["registration"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<!-- Registration modal -->\r\n<div class=\"modal fade\" id=\"registration\"  tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"registrationModalLabel\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\" id=\"registrationModalLabel\">Регистрация</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <div class=\"alert alert-danger\" role=\"alert\"></div>\r\n        <div class=\"alert alert-success\" role=\"alert\"></div>\r\n\r\n        <form id=\"registration-form\">\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">Email</label>\r\n            <input type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"Email адрес\" required=\"required\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"password\">Пароль</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\" placeholder=\"Выберите пароль\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"confirm_password\">Пароль еще раз</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"confirm_password\" id=\"confirm_password\" placeholder=\"Подтвердите выбранный пароль\">\r\n          </div>\r\n          <div class=\"form-group checkbox\">\r\n            <label>\r\n              <input type=\"checkbox\" name=\"confirm\" id=\"confirm\"> Я соглашаюсь с правилами ресурса.\r\n            </label>\r\n          </div>\r\n          <button type=\"submit\" class=\"btn btn-default registration-submit\">Зарегистрироваться</button>\r\n        </form>\r\n\r\n        <div class=\"loader-wrapper\">\r\n          <div class=\"loader\"></div>\r\n        </div>\r\n\r\n        <div class=\"checkmark\">\r\n          <span class=\"ion-checkmark-circled\"></span>\r\n        </div>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->";
},"useData":true});
this["tpl"]["templates"]["left_navigation"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "active";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing;

  return "<ul>\r\n  <li>\r\n    <a class=\"link dashboard "
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias1).call(depth0,(depth0 != null ? depth0.activePage : depth0),"===","dashboard",{"name":"compare","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n      <span class=\"icon ion-person\"></span>\r\n      <span class=\"nav-item\">Мой кабинет</span>\r\n    </a>\r\n  </li>\r\n  <li>\r\n    <a class=\"link ads\">\r\n      <span class=\"icon ion-clipboard\"></span>\r\n      <span class=\"nav-item\">Объявления</span>\r\n    </a>\r\n  </li>\r\n  <li>\r\n    <a class=\"link companies\">\r\n      <span class=\"icon ion-briefcase\"></span>\r\n      <span class=\"nav-item\">Компании</span>\r\n    </a>\r\n  </li>\r\n  <li>\r\n    <a class=\"link messages\">\r\n      <span class=\"icon ion-android-mail\"></span>\r\n      <span class=\"nav-item\">Сообщения</span>\r\n    </a>\r\n  </li>\r\n  <li>\r\n    <a class=\"link favorite\">\r\n      <span class=\"icon ion-android-star-outline\"></span>\r\n      <span class=\"nav-item\">Избранное</span>\r\n    </a>\r\n  </li>\r\n  <li>\r\n    <a class=\"link settings "
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias1).call(depth0,(depth0 != null ? depth0.activePage : depth0),"===","settings",{"name":"compare","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n      <span class=\"icon ion-settings\"></span>\r\n      <span class=\"nav-item\">Настройки</span>\r\n    </a>\r\n  </li>\r\n  <li>\r\n    <a class=\"link\">\r\n      <span class=\"icon ion-help-buoy\"></span>\r\n      <span class=\"nav-item\">Помощь</span>\r\n    </a>\r\n  </li>\r\n</ul>";
},"useData":true});