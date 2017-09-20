this["tpl"] = this["tpl"] || {};
this["tpl"]["templates"] = this["tpl"]["templates"] || {};
this["tpl"]["templates"]["add_ad"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <option value=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</option>\r\n";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return "value=\""
    + this.escapeExpression(((helper = (helper = helpers.otherPhone || (depth0 != null ? depth0.otherPhone : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"otherPhone","hash":{},"data":data}) : helper)))
    + "\"";
},"5":function(depth0,helpers,partials,data) {
    return " placeholder=\"+375 00 0000000\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<!--  left-navigation -->\r\n<div class=\"left-navigation\"></div>\r\n<!-- /end  left-navigation -->\r\n\r\n<div class=\"profile new-ad\">\r\n  <div class=\"title\">\r\n    <span class=\"icon ion-clipboard\"></span>\r\n    <span class=\"title-text\">Новое объявление</span>\r\n  </div>\r\n  <div class=\"page\">\r\n    <!--  Add new ad form -->\r\n    <form id=\"add-ad-form\">\r\n      <div class=\"form-group\">\r\n        <label class=\"radio-inline\"><input type=\"radio\" name=\"type\" value=\"buy\">Куплю</label>\r\n        <label class=\"radio-inline\"><input type=\"radio\" name=\"type\" value=\"sell\">Продам</label>\r\n        <div class=\"typeError\"></div>\r\n      </div>\r\n      <div class=\"form-divider\"></div>\r\n      <div class=\"form-group\">\r\n        <label class=\"radio-inline\"><input type=\"radio\" name=\"object\" value=\"product\">Товар</label>\r\n        <label class=\"radio-inline\"><input type=\"radio\" name=\"object\" value=\"service\">Услуга</label>\r\n        <div class=\"objectError\"></div>\r\n      </div>\r\n      <div class=\"form-divider\"></div>\r\n\r\n      <p class=\"lbl\">Раздел</p>\r\n      <div class=\"form-group\">\r\n        <select class=\"form-control\" id=\"category\" name=\"category\">\r\n          <option value=\"\">&mdash;</option>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.categories : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </select>\r\n      </div>\r\n      <div class=\"filters m-b-2\"></div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"title\">Заголовок</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\" placeholder=\"Заголовок объявления\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"description\">Текс объявления</label>\r\n        <textarea class=\"form-control\" rows=\"3\" id=\"description\" name=\"description\" placeholder=\"Текс объявления\"></textarea>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label for=\"price\">Цена</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"price\" placeholder=\"0 BYR\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <p class=\"lbl\">Срок размещения</p>\r\n          <div class=\"form-group\">\r\n            <select class=\"form-control\" id=\"expirationDate\">\r\n              <option value=\"5\">5 дней</option>\r\n              <option value=\"10\">10 дней</option>\r\n              <option value=\"30\">30 дней</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <p class=\"lbl\">Местоположение</p>\r\n      <div class=\"country-picker\"></div>\r\n\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label for=\"contacts\">Контактные данные:</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"contacts\" placeholder=\"Введите название компании\" disabled=\"disabled\">\r\n            <span class=\"add-company\">Нет вашей компании? <a>Создать</a></span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <div class=\"radio\">\r\n              <label><input type=\"radio\" id=\"profileRadio\" name=\"getContacts\" value=\"profile\" checked>Использовать контактные телефоны профиля</label>\r\n            </div>\r\n            <div class=\"radio\">\r\n              <label><input type=\"radio\" id=\"companyRadio\" name=\"getContacts\" value=\"company\">Использовать контактные телефоны компании</label>\r\n            </div>\r\n            <div class=\"radio\">\r\n              <label><input type=\"radio\" id=\"otherRadio\" name=\"getContacts\" value=\"other\" >Ввести другой контактный телефон</label>\r\n            </div>\r\n            <div class=\"form-group otherPhoneWrapper\">\r\n              <div class=\"input-group\">\r\n                <span class=\"input-group-addon\"><i class=\"ion-android-call\"></i></span>\r\n                <input type=\"text\" class=\"form-control\" id=\"otherPhone\" name=\"otherPhone\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.otherPhone : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + ">\r\n              </div>\r\n              <div class=\"otherPhoneError\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <p class=\"lbl\">Фото:</p>\r\n          <button type=\"button\" class=\"btn ad-photo\"><span class=\"ion-image\"></span></button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <button type=\"submit\" class=\"btn btn-default\">Опубликовать</button>\r\n      <button type=\"button\" class=\"btn btn-default back\">Отмена</button>\r\n    </form>\r\n    <!-- /end form-->\r\n  </div>\r\n\r\n\r\n\r\n</div>";
},"useData":true});
this["tpl"]["templates"]["ads"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<!--  left-navigation -->\r\n<div class=\"left-navigation\"></div>\r\n<!-- /end  left-navigation -->\r\n\r\n<div class=\"profile ads\">\r\n  <div class=\"title\">\r\n    <span class=\"icon ion-clipboard\"></span>\r\n    <span class=\"title-text\">Мои объявления</span>\r\n  </div>\r\n  <div class=\"page\">\r\n\r\n    <div class=\"btns-section\">\r\n      <button type=\"button\" class=\"btn btn-default add-button\">Добавить объявление <span class=\"ion-ios-plus-outline\"></span></button>\r\n      <button type=\"button\" class=\"btn btn-default go-to-archive\" disabled>Архив <span class=\"ion-filing\"></span></button>\r\n    </div>\r\n\r\n    <div class=\"ads-list\">\r\n\r\n\r\n\r\n      <div class=\"ad-item\">\r\n        <div class=\"section1\">\r\n          <div class=\"photo\"><span class=\"ion-image\"></span></div>\r\n          <div class=\"content\">\r\n            <div class=\"ad-title\">Заголовок объявления</div>\r\n            <div class=\"ad-description\">Текст объявления Текст объявления Текст объявления Текст объявления</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"section2\">\r\n          Section 2\r\n        </div>\r\n        <div class=\"i-bottom\">\r\n          <span class=\"name\"><i class=\"ion-ios-briefcase-outline\"></i><span>ООО \"Компаныв Тест\"</span></span>\r\n          <span class=\"location\"><i class=\"ion-ios-location-outline\"></i><span>Минск, Беларусь</span></span>\r\n          <span class=\"date\"><i class=\"ion-ios-calendar-outline\"></i><span>20.07.2017</span></span>\r\n        </div>\r\n        <div class=\"icon ion-ios-star-outline star\"></div>\r\n        <div class=\"icon ion-ios-browsers-outline tab\"></div>\r\n        <div class=\"icon ion-chevron-down arrow\"></div>\r\n      </div>\r\n\r\n\r\n\r\n\r\n      <div class=\"ad-item expanded\">\r\n        <div class=\"section1\">\r\n          <div class=\"photo\"><span class=\"ion-image\"></span></div>\r\n          <div class=\"content\">\r\n            <div class=\"ad-title\">Заголовок объявления</div>\r\n            <div class=\"ad-description\">Текст объявления Текст объявления Текст объявления Текст объявления</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"section2\">\r\n          Section 2\r\n        </div>\r\n        <div class=\"i-bottom\">\r\n          <span class=\"name\"><i class=\"ion-ios-briefcase-outline\"></i><span>ООО \"Компания\"</span></span>\r\n          <span class=\"location\"><i class=\"ion-ios-location-outline\"></i><span>Минск, Беларусь</span></span>\r\n          <span class=\"date\"><i class=\"ion-ios-calendar-outline\"></i><span>20.07.2017</span></span>\r\n        </div>\r\n        <div class=\"icon ion-ios-star-outline star\"></div>\r\n        <div class=\"icon ion-ios-browsers-outline tab\"></div>\r\n        <div class=\"icon ion-chevron-down arrow\"></div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n";
},"useData":true});
this["tpl"]["templates"]["ad_item"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "      "
    + this.escapeExpression(((helper = (helper = helpers.filter || (depth0 != null ? depth0.filter : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"filter","hash":{},"data":data}) : helper)))
    + "\r\n";
},"3":function(depth0,helpers,partials,data) {
    return "      test<br>\r\n      test<br>\r\n      test<br>\r\n      test<br>\r\n      test<br>\r\n      test<br>\r\n      test<br>\r\n";
},"5":function(depth0,helpers,partials,data) {
    var stack1;

  return "      <span class=\"name\"><i class=\"ion-ios-briefcase-outline\"></i><span>"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.userName : depth0)) != null ? stack1.name : stack1), depth0))
    + "</span></span>\r\n";
},"7":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "      <span class=\"name\"><i class=\"ion-ios-person-outline\"></i><span>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.userName : depth0)) != null ? stack1.name : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.userName : depth0)) != null ? stack1.lastName : stack1), depth0))
    + "</span></span>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "<div class=\"ad-item\">\r\n  <div class=\"section1\">\r\n    <div class=\"photo\"><span class=\"ion-image\"></span></div>\r\n    <div class=\"content\">\r\n      <div class=\"ad-title\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</div>\r\n      <div class=\"ad-description\">"
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"section2\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.filter : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "  </div>\r\n  <div class=\"i-bottom\">\r\n    <span class=\"date\"><i class=\"ion-ios-calendar-outline\"></i><span>"
    + alias3((helpers.formatDate || (depth0 && depth0.formatDate) || alias1).call(depth0,(depth0 != null ? depth0.updated_at : depth0),"ll",{"name":"formatDate","hash":{},"data":data}))
    + "</span></span>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.company : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "    <span class=\"location\"><i class=\"ion-ios-location-outline\"></i><span>"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.city : depth0)) != null ? stack1.title : stack1), depth0))
    + ", "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.country : depth0)) != null ? stack1.title : stack1), depth0))
    + "</span></span>\r\n\r\n  </div>\r\n  <div class=\"icon ion-ios-star-outline star\"></div>\r\n  <div class=\"icon ion-ios-browsers-outline tab\"></div>\r\n  <div class=\"icon ion-chevron-down arrow\"></div>\r\n</div>";
},"useData":true});
this["tpl"]["templates"]["dashboard"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<!--  left-navigation -->\r\n<div class=\"left-navigation\"></div>\r\n<!-- /end  left-navigation -->\r\n\r\n<div class=\"profile dashboard\">\r\n  <div class=\"title\">\r\n    <span class=\"icon ion-person\"></span>\r\n    <span class=\"title-text\">Мой кабинет</span>\r\n  </div>\r\n  <div class=\"page\">\r\n\r\n    dashboard\r\n\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n";
},"useData":true});
this["tpl"]["templates"]["filter"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"actions\">\r\n  <button type=\"button\" class=\"btn btn-default\">Добавить объявление <span class=\"ion-ios-plus-outline\"></span></button>\r\n</div>\r\n<div class=\"filters hidden-xs hidden-sm\">\r\n  <a class=\"close-btn visible-xs visible-sm\"><span class=\"ion-close\"></span></a>\r\n  <div class=\"checkbox\">\r\n    <label><input type=\"checkbox\" value=\"\">Спрос</label>\r\n  </div>\r\n  <div class=\"checkbox\">\r\n    <label><input type=\"checkbox\" value=\"\">Предложение</label>\r\n  </div>\r\n  <div class=\"line-breaker\"></div>\r\n  <div class=\"checkbox\">\r\n    <label><input type=\"checkbox\" value=\"\">Товар</label>\r\n  </div>\r\n  <div class=\"checkbox\">\r\n    <label><input type=\"checkbox\" value=\"\">Услуга</label>\r\n  </div>\r\n  <div class=\"line-breaker\"></div>\r\n  <div class=\"form-group\">\r\n    <label for=\"category\">Категория</label>\r\n    <select class=\"form-control\" id=\"category\">\r\n      <option value=\"all\">Все</option>\r\n      <option value=\"Пиломатериалы\">Пиломатериалы</option>\r\n      <option value=\"Лесоматериалы\">Лесоматериалы</option>\r\n      <option value=\"Изделия из древесины\">Изделия из древесины</option>\r\n      <option value=\"Древесные отходы\">Древесные отходы</option>\r\n      <option value=\"Транспорт и перевозки\">Транспорт и перевозки</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"line-breaker\"></div>\r\n\r\n  <div class=\"form-group\">\r\n    <label>Местоположение</label>\r\n    <select class=\"form-control\">\r\n      <option>Страна</option>\r\n      <option>2</option>\r\n      <option>3</option>\r\n      <option>4</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <select class=\"form-control\">\r\n      <option>Город</option>\r\n      <option>2</option>\r\n      <option>3</option>\r\n      <option>4</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"line-breaker\"></div>\r\n  <div class=\"form-group\">\r\n    <button type=\"button\" class=\"btn btn-default disabled\">Сбросить фильтр <span class=\"ion-android-close\"></span></button>\r\n  </div>\r\n</div>";
},"useData":true});
this["tpl"]["templates"]["filters"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "\r\n"
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.level : depth0),"===","parent",{"name":"compare","hash":{},"fn":this.program(2, data, 0),"inverse":this.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.separator : depth0),{"name":"if","hash":{},"fn":this.program(15, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "\r\n    <p class=\"lbl\" data-label=\""
    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</p>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "      <div class=\"checkbox parent\">\r\n        <label><input type=\"checkbox\" id=\""
    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</label>\r\n      </div>\r\n      <div class=\"child-filters hidden\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "      </div>\r\n";
},"4":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "          <div class=\"checkbox\">\r\n            <label><input type=\"checkbox\" id=\""
    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "</label>\r\n          </div>\r\n";
},"6":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.subtitle : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n    <p class=\"lbl\" data-label=\""
    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</p>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n";
},"7":function(depth0,helpers,partials,data) {
    var helper;

  return "    <h4>"
    + this.escapeExpression(((helper = (helper = helpers.subtitle || (depth0 != null ? depth0.subtitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"subtitle","hash":{},"data":data}) : helper)))
    + "</h4>\r\n";
},"9":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.compare || (depth0 && depth0.compare) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.type : depth0),"===","input",{"name":"compare","hash":{},"fn":this.program(10, data, 0),"inverse":this.program(13, data, 0),"data":data})) != null ? stack1 : "");
},"10":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.label : depth0),{"name":"if","hash":{},"fn":this.program(11, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        <div class=\"from-to-inline\">\r\n          <div class=\"input-filter m-r-1\">\r\n            <label for=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "-from\">от</label>\r\n            <input type=\"text\" class=\"form-control\" id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "-from\">\r\n          </div>\r\n          <div class=\"input-filter\">\r\n            <label for=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "-to\">до</label>\r\n            <input type=\"text\" class=\"form-control\" id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "-to\">\r\n          </div>\r\n\r\n        </div>\r\n";
},"11":function(depth0,helpers,partials,data) {
    var helper;

  return "          <div class=\"input-label\">"
    + this.escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "</div>\r\n";
},"13":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <div class=\"checkbox\">\r\n          <label><input type=\"checkbox\" id=\""
    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "</label>\r\n        </div>\r\n";
},"15":function(depth0,helpers,partials,data) {
    return "    </div>\r\n    <div class=\"col-md-6\">\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.category : depth0)) != null ? stack1.filters : stack1),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\r\n</div>";
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

  return "<div class=\"row header-wrapper\">\r\n  <!-- Logo -->\r\n  <div class=\"col-md-3 logo\">\r\n    <a href=\"/\">Lignum</a>\r\n  </div>\r\n  <!-- /end logo -->\r\n  <!-- Navigation -->\r\n  <nav class=\"col-md-9 navigation hidden\">\r\n    <ul>\r\n      <li><a class=\"home-link\">Главная</a></li>\r\n      <li><a>Компании</a></li>\r\n      <li><a>FAQ</a></li>\r\n      <li>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.user : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "      </li>\r\n    </ul>\r\n  </nav>\r\n  <!-- /end navigation -->\r\n</div>\r\n<div class=\"hamburger visible-xs\">\r\n  <span class=\"ion-navicon\"></span>\r\n</div>\r\n\r\n<div class=\"modal-section\"></div>";
},"useData":true});
this["tpl"]["templates"]["home"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<!-- Filter -->\r\n<div class=\"col-md-3 filter\"></div>\r\n<!-- /end filter -->\r\n\r\n<div class=\"col-md-7\">\r\n  <div class=\"content-filter\">\r\n    <div class=\"btn-group mobile-filter-btn visible-xs visible-sm\" role=\"group\" aria-label=\"First group\">\r\n      <button type=\"button\" class=\"btn btn-default\"><span class=\"ion-android-options\"></span></button>\r\n    </div>\r\n    <div class=\"search\">\r\n      <div class=\"input-group\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Искать\">\r\n        <span class=\"input-group-btn\">\r\n              <button class=\"btn btn-default\" type=\"button\"><span class=\"ion-search\"></span></button>\r\n            </span>\r\n      </div><!-- /input-group -->\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Ads list  -->\r\n  <div class=\"ads-list\">\r\n    <!-- ads-item -->\r\n\r\n    <!-- /end ads-item -->\r\n\r\n  </div>\r\n  <!-- /end ads-list -->\r\n\r\n</div>\r\n\r\n<div class=\"col-md-2\">\r\n  <div class=\"rside\">\r\n    "
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
},"17":function(depth0,helpers,partials,data) {
    var helper;

  return "value=\""
    + this.escapeExpression(((helper = (helper = helpers.phone1 || (depth0 != null ? depth0.phone1 : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"phone1","hash":{},"data":data}) : helper)))
    + "\"";
},"19":function(depth0,helpers,partials,data) {
    return " placeholder=\"+375 00 0000000\"";
},"21":function(depth0,helpers,partials,data) {
    var helper;

  return "value=\""
    + this.escapeExpression(((helper = (helper = helpers.phone2 || (depth0 != null ? depth0.phone2 : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"phone2","hash":{},"data":data}) : helper)))
    + "\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<form>\r\n  <div class=\"form-group row\">\r\n    <div class=\"col-md-5\">\r\n      <div class=\"image-upload\">\r\n        <label for=\"photo\" id=\"preview\">\r\n        </label>\r\n        <input id=\"photo\" type=\"file\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-7\">\r\n      <div class=\"form-group \">\r\n        <label for=\"lastName\">Фамилия</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"lastName\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.lastName : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ">\r\n      </div>\r\n      <div class=\"form-group \">\r\n        <label for=\"name\">Имя</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"name\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + ">\r\n      </div>\r\n      <div class=\"form-group \">\r\n        <label for=\"middleName\">Отчество</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"middleName\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.middleName : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + ">\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"work\">Место работы</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"work\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.work : depth0),{"name":"if","hash":{},"fn":this.program(13, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"position\">Должность</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"position\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.position : depth0),{"name":"if","hash":{},"fn":this.program(15, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\r\n  </div>\r\n\r\n  <p class=\"lbl\">Ваше местоположение</p>\r\n  <div class=\"countries-picker\"></div>\r\n\r\n  <p class=\"lead\">Контактные телефоны</p>\r\n  <p class=\"lbl2\">Будут отображаться в ваших объявлениях</p>\r\n\r\n  <div class=\"form-group short\">\r\n    <div class=\"input-group\">\r\n      <span class=\"input-group-addon\"><i class=\"ion-android-call\"></i></span>\r\n      <input type=\"text\" class=\"form-control\" id=\"phone1\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.phone1 : depth0),{"name":"if","hash":{},"fn":this.program(17, data, 0),"inverse":this.program(19, data, 0),"data":data})) != null ? stack1 : "")
    + ">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group short\">\r\n    <div class=\"input-group\">\r\n      <span class=\"input-group-addon\"><i class=\"ion-android-call\"></i></span>\r\n      <input type=\"text\" class=\"form-control\" id=\"phone2\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.phone2 : depth0),{"name":"if","hash":{},"fn":this.program(21, data, 0),"inverse":this.program(19, data, 0),"data":data})) != null ? stack1 : "")
    + ">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row m-t-2\">\r\n    <div class=\"col-sm-3\">\r\n      <button type=\"submit\" class=\"btn btn-default saveProfile\">Сохранить</button>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p class=\"updated\">Обновлено - "
    + this.escapeExpression((helpers.formatDate || (depth0 && depth0.formatDate) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.updated_at : depth0),"LLLL",{"name":"formatDate","hash":{},"data":data}))
    + "</p>\r\n    </div>\r\n  </div>\r\n\r\n</form>";
},"useData":true});
this["tpl"]["templates"]["forgot"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<!-- Forgot modal -->\r\n<div class=\"modal fade\" id=\"forgot\"  tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"forgotModalLabel\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\" id=\"forgotModalLabel\">Восстановление пароля</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputEmail1\">Email</label>\r\n            <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Email адрес\">\r\n          </div>\r\n\r\n          <button type=\"button\" class=\"btn btn-default login-btn\">Выслать пароль</button>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->";
},"useData":true});
this["tpl"]["templates"]["login"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<!-- Login modal -->\r\n<div class=\"modal fade\" id=\"login\"  tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"loginModalLabel\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\" id=\"loginModalLabel\">Вход</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <div class=\"alert alert-danger\" role=\"alert\"></div>\r\n\r\n        <form id=\"login-form\">\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">Email</label>\r\n            <input type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"Email адрес\" required=\"required\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"password\">Пароль</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\" placeholder=\"Пароль\">\r\n          </div>\r\n          <div>\r\n            <a class=\"forgot-password\">Забыли пароль?</a>\r\n          </div>\r\n          <button type=\"submit\" class=\"btn btn-default login-btn\">Войти</button>\r\n        </form>\r\n        <div class=\"loader-wrapper\">\r\n          <div class=\"loader\"></div>\r\n        </div>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->";
},"useData":true});
this["tpl"]["templates"]["registration"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<!-- Registration modal -->\r\n<div class=\"modal fade\" id=\"registration\"  tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"registrationModalLabel\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\" id=\"registrationModalLabel\">Регистрация</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <div class=\"alert alert-danger\" role=\"alert\"></div>\r\n        <div class=\"alert alert-success\" role=\"alert\"></div>\r\n\r\n        <form id=\"registration-form\">\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">Email</label>\r\n            <input type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"Email адрес\" required=\"required\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"password\">Пароль</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\" placeholder=\"Выберите пароль\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"confirm_password\">Пароль еще раз</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"confirm_password\" id=\"confirm_password\" placeholder=\"Подтвердите выбранный пароль\">\r\n          </div>\r\n          <div class=\"form-group checkbox\">\r\n            <label>\r\n              <input type=\"checkbox\" name=\"confirm\" id=\"confirm\"> Я соглашаюсь с правилами ресурса.\r\n            </label>\r\n          </div>\r\n          <button type=\"submit\" class=\"btn btn-default registration-submit\">Зарегистрироваться</button>\r\n        </form>\r\n\r\n        <div class=\"loader-wrapper\">\r\n          <div class=\"loader\"></div>\r\n        </div>\r\n\r\n        <div class=\"checkmark\">\r\n          <span class=\"ion-checkmark-circled\"></span>\r\n        </div>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->";
},"useData":true});
this["tpl"]["templates"]["countries_picker"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <option value=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias1).call(depth0,(depth0 != null ? depth0.id : depth0),"===",((stack1 = (depths[1] != null ? depths[1].country : depths[1])) != null ? stack1.id : stack1),{"name":"compare","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</option>\r\n";
},"2":function(depth0,helpers,partials,data) {
    return "selected";
},"4":function(depth0,helpers,partials,data) {
    var stack1;

  return "value=\""
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.city : depth0)) != null ? stack1.title : stack1), depth0))
    + "\"";
},"6":function(depth0,helpers,partials,data) {
    return " placeholder=\"Город\"";
},"8":function(depth0,helpers,partials,data) {
    return "";
},"10":function(depth0,helpers,partials,data) {
    return "disabled";
},"12":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "          <li class=\"city\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + " <span class=\"area\">"
    + alias3(((helper = (helper = helpers.area || (depth0 != null ? depth0.area : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"area","hash":{},"data":data}) : helper)))
    + "</span> <span class=\"region\"> "
    + alias3(((helper = (helper = helpers.region || (depth0 != null ? depth0.region : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"region","hash":{},"data":data}) : helper)))
    + "</span></li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, alias1=helpers.helperMissing, alias2="function", alias3=helpers.blockHelperMissing, buffer = 
  "<div class=\"form-group row\">\r\n  <div class=\"col-md-6 m-b-1\">\r\n    <select class=\"form-control\" id=\"country\" name=\"country\">\r\n      <option value=\"\">Страна</option>\r\n";
  stack1 = ((helper = (helper = helpers.countries || (depth0 != null ? depth0.countries : depth0)) != null ? helper : alias1),(options={"name":"countries","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.countries) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "    </select>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <input type=\"text\" class=\"form-control\" id=\"city\" name=\"city\"\r\n      "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.city : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0, blockParams, depths),"inverse":this.program(6, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\r\n      "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.country : depth0),{"name":"if","hash":{},"fn":this.program(8, data, 0, blockParams, depths),"inverse":this.program(10, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + ">\r\n    <div class=\"cityDropdown hide\">\r\n      <ul>\r\n";
  stack1 = ((helper = (helper = helpers.cities || (depth0 != null ? depth0.cities : depth0)) != null ? helper : alias1),(options={"name":"cities","hash":{},"fn":this.program(12, data, 0, blockParams, depths),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.cities) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "      </ul>\r\n    </div>\r\n  </div>\r\n</div>";
},"useData":true,"useDepths":true});
this["tpl"]["templates"]["left_navigation"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "active";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing;

  return "<ul>\r\n  <li>\r\n    <a class=\"link dashboard "
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias1).call(depth0,(depth0 != null ? depth0.activePage : depth0),"===","dashboard",{"name":"compare","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n      <span class=\"icon ion-person\"></span>\r\n      <span class=\"nav-item\">Мой кабинет</span>\r\n    </a>\r\n  </li>\r\n  <li>\r\n    <a class=\"link ads "
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias1).call(depth0,(depth0 != null ? depth0.activePage : depth0),"===","ads",{"name":"compare","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n      <span class=\"icon ion-clipboard\"></span>\r\n      <span class=\"nav-item\">Объявления</span>\r\n    </a>\r\n  </li>\r\n  <li>\r\n    <a class=\"link companies "
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias1).call(depth0,(depth0 != null ? depth0.activePage : depth0),"===","companies",{"name":"compare","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n      <span class=\"icon ion-briefcase\"></span>\r\n      <span class=\"nav-item\">Компании</span>\r\n    </a>\r\n  </li>\r\n  <li>\r\n    <a class=\"link messages\">\r\n      <span class=\"icon ion-android-mail\"></span>\r\n      <span class=\"nav-item\">Сообщения</span>\r\n    </a>\r\n  </li>\r\n  <li>\r\n    <a class=\"link favorite\">\r\n      <span class=\"icon ion-android-star-outline\"></span>\r\n      <span class=\"nav-item\">Избранное</span>\r\n    </a>\r\n  </li>\r\n  <li>\r\n    <a class=\"link settings "
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias1).call(depth0,(depth0 != null ? depth0.activePage : depth0),"===","settings",{"name":"compare","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n      <span class=\"icon ion-settings\"></span>\r\n      <span class=\"nav-item\">Настройки</span>\r\n    </a>\r\n  </li>\r\n  <li>\r\n    <a class=\"link\">\r\n      <span class=\"icon ion-help-buoy\"></span>\r\n      <span class=\"nav-item\">Помощь</span>\r\n    </a>\r\n  </li>\r\n</ul>";
},"useData":true});