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

  return "<!--  left-navigation -->\r\n<div class=\"left-navigation\"></div>\r\n<!-- /end  left-navigation -->\r\n\r\n<div class=\"profile new-ad\">\r\n  <div class=\"title\">\r\n    <span class=\"icon ion-clipboard\"></span>\r\n    <span class=\"title-text\">Новое объявление</span>\r\n  </div>\r\n  <div class=\"page\">\r\n    <!--  Add new ad form -->\r\n    <form id=\"add-ad-form\">\r\n\r\n      <div class=\"col-xs-12 col-sm-6 m-t-1 p-l-0\">\r\n        <div class=\"form-group\">\r\n          <label class=\"radio-inline\"><input type=\"radio\" name=\"type\" value=\"buy\">Куплю</label>\r\n          <label class=\"radio-inline\"><input type=\"radio\" name=\"type\" value=\"sell\">Продам</label>\r\n          <div class=\"typeError\"></div>\r\n        </div>\r\n        <div class=\"form-divider\"></div>\r\n        <div class=\"form-group\">\r\n          <label class=\"radio-inline\"><input type=\"radio\" name=\"object\" value=\"product\">Товар</label>\r\n          <label class=\"radio-inline\"><input type=\"radio\" name=\"object\" value=\"service\">Услуга</label>\r\n          <div class=\"objectError\"></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-12 col-sm-6 m-b-1\">\r\n        <p class=\"lbl\">Фото:</p>\r\n\r\n        <label class=\"btn ad-photo\" id=\"preview\">\r\n          <span class=\"ion-image\"></span>\r\n          <input type=\"file\" name=\"photo\" id=\"photo\" class=\"hidden photo-input\" >\r\n        </label>\r\n        <div class=\"marker buy hidden\">Куплю</div>\r\n        <div class=\"marker sell hidden\">Продам</div>\r\n        <div class=\"image-error-message hidden\"></div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <p class=\"lbl\">Раздел</p>\r\n        <select class=\"form-control\" id=\"category\" name=\"category\">\r\n          <option value=\"\">&mdash;</option>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.categories : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </select>\r\n      </div>\r\n      <div class=\"filters m-b-2\"></div>\r\n      <div class=\"form-group\">\r\n        <label for=\"title\">Заголовок</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\" placeholder=\"Заголовок объявления\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"description\">Текст объявления</label>\r\n        <textarea class=\"form-control\" rows=\"3\" id=\"description\" name=\"description\" placeholder=\"Текст объявления\"></textarea>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label for=\"price\">Цена</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"price\" placeholder=\"0 BYR\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <p class=\"lbl\">Срок размещения</p>\r\n          <div class=\"form-group\">\r\n            <select class=\"form-control\" id=\"expirationDate\">\r\n              <option value=\"5\">5 дней</option>\r\n              <option value=\"10\">10 дней</option>\r\n              <option value=\"30\">30 дней</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <p class=\"lbl\">Местоположение</p>\r\n      <div class=\"country-picker\"></div>\r\n\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label for=\"contacts\">Контактные данные:</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"contacts\" placeholder=\"Введите название компании\" disabled=\"disabled\">\r\n            <span class=\"add-company\">Нет вашей компании? <a>Создать</a></span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <div class=\"radio\">\r\n              <label><input type=\"radio\" id=\"profileRadio\" name=\"getContacts\" value=\"profile\" checked>Использовать контактные телефоны профиля</label>\r\n            </div>\r\n            <div class=\"radio\">\r\n              <label><input type=\"radio\" id=\"companyRadio\" name=\"getContacts\" value=\"company\">Использовать контактные телефоны компании</label>\r\n            </div>\r\n            <div class=\"radio\">\r\n              <label><input type=\"radio\" id=\"otherRadio\" name=\"getContacts\" value=\"other\" >Ввести другой контактный телефон</label>\r\n            </div>\r\n            <div class=\"form-group otherPhoneWrapper\">\r\n              <div class=\"input-group\">\r\n                <span class=\"input-group-addon\"><i class=\"ion-android-call\"></i></span>\r\n                <input type=\"text\" class=\"form-control\" id=\"otherPhone\" name=\"otherPhone\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.otherPhone : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + ">\r\n              </div>\r\n              <div class=\"otherPhoneError\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <button type=\"submit\" class=\"btn btn-default\">Опубликовать</button>\r\n      <button type=\"button\" class=\"btn btn-default back\">Отмена</button>\r\n    </form>\r\n    <!-- /end form-->\r\n  </div>\r\n\r\n\r\n\r\n</div>";
},"useData":true});
this["tpl"]["templates"]["ads"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<!--  left-navigation -->\r\n<div class=\"left-navigation\"></div>\r\n<!-- /end  left-navigation -->\r\n\r\n<div class=\"profile ads\">\r\n  <div class=\"title\">\r\n    <span class=\"icon ion-clipboard\"></span>\r\n    <span class=\"title-text\">Мои объявления</span>\r\n  </div>\r\n  <div class=\"page\">\r\n    <div class=\"btns-section\">\r\n      <button type=\"button\" class=\"btn btn-default pull-left add-button\">Добавить объявление <span class=\"ion-ios-plus-outline\"></span></button>\r\n      <button type=\"button\" class=\"btn btn-default\" disabled>Избранное <span class=\"icon ion-ios-star-outline star\"></span></button>\r\n      <button type=\"button\" class=\"btn btn-default go-to-archive\" disabled>Архив <span class=\"ion-filing\"></span></button>\r\n    </div>\r\n\r\n    <div class=\"ads-list\"></div>\r\n\r\n  </div>\r\n</div>\r\n";
},"useData":true});
this["tpl"]["templates"]["ad_item"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "          Куплю\r\n";
},"3":function(depth0,helpers,partials,data) {
    return "          Продам\r\n";
},"5":function(depth0,helpers,partials,data) {
    return "";
},"7":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <img class=\"photo-filter-icon\" src=\"img/filter-icons/"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.category : depth0)) != null ? stack1.id : stack1), depth0))
    + ".svg\"></img>\r\n";
},"9":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.compare || (depth0 && depth0.compare) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.currentUserId : depth0),"===",(depth0 != null ? depth0.userId : depth0),{"name":"compare","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"10":function(depth0,helpers,partials,data) {
    return "            <a class=\"edit-ad\"><span class=\"ion-edit\"></span></a>\r\n            <a class=\"delete-ad\"><span class=\"ion-trash-b\"></span></a>\r\n";
},"12":function(depth0,helpers,partials,data) {
    return "        <div class=\"tab-button\">\r\n          <span class=\"ion-ios-email-outline send-form\"></span>\r\n        </div>\r\n        <div class=\"tab-button\">\r\n          <span class=\"ion-ios-star-outline star\"></span>\r\n        </div>\r\n";
},"14":function(depth0,helpers,partials,data) {
    var stack1;

  return "      <div class=\"left-border\">\r\n        <table class=\"filters-table\">\r\n          <tr class=\"table-header\">\r\n            <th class=\"category-title\">"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.category : depth0)) != null ? stack1.title : stack1), depth0))
    + "</th>\r\n          </tr>\r\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.category : depth0)) != null ? stack1.filters : stack1),{"name":"each","hash":{},"fn":this.program(15, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "          <tr>\r\n            <td>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.price : depth0),{"name":"if","hash":{},"fn":this.program(46, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n\r\n";
},"15":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.compare || (depth0 && depth0.compare) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.level : depth0),"===","parent",{"name":"compare","hash":{},"fn":this.program(16, data, 0),"inverse":this.program(24, data, 0),"data":data})) != null ? stack1 : "");
},"16":function(depth0,helpers,partials,data) {
    var stack1;

  return "              <tr class=\"filter-row\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":this.program(17, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                <td class=\"parent-col\"><span class=\"dash\">-</span>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":this.program(19, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                </td>\r\n              </tr>\r\n";
},"17":function(depth0,helpers,partials,data) {
    var helper;

  return "                  <td>\r\n                    <span class=\"filter-title\">"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span>\r\n                  </td>\r\n";
},"19":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":this.program(20, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"20":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "                      <div class=\"parent\">\r\n                        <span class=\"parent-title\">"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":this.program(21, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                      </div>\r\n";
},"21":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":this.program(22, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"22":function(depth0,helpers,partials,data) {
    var helper;

  return "                            <i>"
    + this.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "</i>\r\n";
},"24":function(depth0,helpers,partials,data) {
    var stack1;

  return "              <tr class=\"filter-row\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":this.program(25, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                <td class=\"first-level\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":this.program(27, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                </td>\r\n              </tr>\r\n";
},"25":function(depth0,helpers,partials,data) {
    var helper;

  return "                  <td><span class=\"filter-title\">"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span></td>\r\n";
},"27":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.compare || (depth0 && depth0.compare) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.type : depth0),"===","input",{"name":"compare","hash":{},"fn":this.program(28, data, 0),"inverse":this.program(36, data, 0),"data":data})) != null ? stack1 : "");
},"28":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":this.program(29, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"29":function(depth0,helpers,partials,data) {
    var stack1;

  return "                        <div class=\"overlay\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.label : depth0),{"name":"if","hash":{},"fn":this.program(30, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                          "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.from : depth0),{"name":"if","hash":{},"fn":this.program(32, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                          "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.to : depth0),{"name":"if","hash":{},"fn":this.program(34, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                        </div>\r\n";
},"30":function(depth0,helpers,partials,data) {
    var helper;

  return "                            <i>"
    + this.escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "</i>:\r\n";
},"32":function(depth0,helpers,partials,data) {
    var helper;

  return "от "
    + this.escapeExpression(((helper = (helper = helpers.from || (depth0 != null ? depth0.from : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"from","hash":{},"data":data}) : helper)));
},"34":function(depth0,helpers,partials,data) {
    var helper;

  return "до "
    + this.escapeExpression(((helper = (helper = helpers.to || (depth0 != null ? depth0.to : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"to","hash":{},"data":data}) : helper)));
},"36":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.compare || (depth0 && depth0.compare) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.type : depth0),"===","input-sizes",{"name":"compare","hash":{},"fn":this.program(37, data, 0),"inverse":this.program(43, data, 0),"data":data})) != null ? stack1 : "");
},"37":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.values : depth0),{"name":"each","hash":{},"fn":this.program(38, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"38":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.t : depth0),{"name":"if","hash":{},"fn":this.program(39, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n";
},"39":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.s : depth0),{"name":"if","hash":{},"fn":this.program(40, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"40":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.d : depth0),{"name":"if","hash":{},"fn":this.program(41, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"41":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                              <div class=\"size-row\">"
    + alias3(((helper = (helper = helpers.t || (depth0 != null ? depth0.t : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"t","hash":{},"data":data}) : helper)))
    + "<b class=\"iks\">&#9747;</b>"
    + alias3(((helper = (helper = helpers.s || (depth0 != null ? depth0.s : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"s","hash":{},"data":data}) : helper)))
    + "<b class=\"iks\">&#9747;</b>"
    + alias3(((helper = (helper = helpers.d || (depth0 != null ? depth0.d : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"d","hash":{},"data":data}) : helper)))
    + "</div>\r\n";
},"43":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":this.program(44, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                    ";
},"44":function(depth0,helpers,partials,data) {
    var helper;

  return "                        <span>"
    + this.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "</span>\r\n";
},"46":function(depth0,helpers,partials,data) {
    var helper;

  return "                <div class=\"price\"><i>Цена:</i> "
    + this.escapeExpression(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"price","hash":{},"data":data}) : helper)))
    + "</div>\r\n";
},"48":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,depth0,{"name":"if","hash":{},"fn":this.program(49, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"49":function(depth0,helpers,partials,data) {
    return "          <span class=\"ion-android-call\"> "
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</span>\r\n";
},"51":function(depth0,helpers,partials,data) {
    var stack1;

  return "      <span class=\"name\"><i class=\"ion-person-stalker\"></i><span class=\"m-l-05\">"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.userName : depth0)) != null ? stack1.name : stack1), depth0))
    + "</span></span>\r\n";
},"53":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.userName : depth0),{"name":"if","hash":{},"fn":this.program(54, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"54":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.escapeExpression, alias2=this.lambda;

  return "      <span class=\"name\">\r\n        <span class=\"user-avatar\" style=\"background-image: url('img/avatar/"
    + alias1(((helper = (helper = helpers.userId || (depth0 != null ? depth0.userId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"userId","hash":{},"data":data}) : helper)))
    + ".png')\"></span>\r\n        <i class=\"ion-ios-person-outline\"></i>\r\n        <span class=\"m-l-05\">"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.userName : depth0)) != null ? stack1.lastName : stack1), depth0))
    + " "
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.userName : depth0)) != null ? stack1.name : stack1), depth0))
    + " "
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.userName : depth0)) != null ? stack1.middleName : stack1), depth0))
    + "</span>\r\n      </span>\r\n    ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "<div class=\"ad-item\">\r\n  <div class=\"section1\">\r\n    <div class=\"photo\" style=\"background-image: url('img/ads/"
    + alias3(((helper = (helper = helpers.photo || (depth0 != null ? depth0.photo : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"photo","hash":{},"data":data}) : helper)))
    + "')\">\r\n      <div class=\"type "
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\">\r\n"
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias1).call(depth0,(depth0 != null ? depth0.type : depth0),"===","buy",{"name":"compare","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "      </div>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.photo : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "    </div>\r\n    <div class=\"content\">\r\n      <div class=\"ad-title\">\r\n        "
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isLoggedIn : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "      </div>\r\n      <div class=\"ad-description hidden-xs\">"
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"section2\">\r\n    <div class=\"ad-info\">\r\n      <div class=\"tab-button active back\">\r\n        <img class=\"info-filter-icon back\" src=\"img/filter-icons/"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.category : depth0)) != null ? stack1.id : stack1), depth0))
    + "-no-border.svg\"></img>\r\n      </div>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isLoggedIn : depth0),{"name":"if","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n\r\n\r\n    <div class=\"category\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.category : depth0),{"name":"if","hash":{},"fn":this.program(14, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "      <div class=\"message hidden\"></div>\r\n      <div class=\"phones\">\r\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.contacts : depth0)) != null ? stack1.phones : stack1),{"name":"each","hash":{},"fn":this.program(48, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"i-bottom\">\r\n    <span class=\"date\"><i class=\"ion-ios-calendar-outline\"></i><span class=\"m-l-05\">"
    + alias3((helpers.formatDate || (depth0 && depth0.formatDate) || alias1).call(depth0,(depth0 != null ? depth0.updated_at : depth0),"ll",{"name":"formatDate","hash":{},"data":data}))
    + "</span></span>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.company : depth0),{"name":"if","hash":{},"fn":this.program(51, data, 0),"inverse":this.program(53, data, 0),"data":data})) != null ? stack1 : "")
    + "    <span class=\"location\"><i class=\"ion-ios-location-outline\"></i><span class=\"m-l-05\">"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.city : depth0)) != null ? stack1.title : stack1), depth0))
    + ", "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.country : depth0)) != null ? stack1.title : stack1), depth0))
    + "</span></span>\r\n  </div>\r\n  <div class=\"icon ion-ios-browsers-outline tab\"></div>\r\n  <div class=\"icon ion-chevron-down arrow\"></div>\r\n</div>";
},"useData":true});
this["tpl"]["templates"]["calc"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"container calc\">\r\n  <h2><span class=\"icon ion-ios-calculator\"></span> Калькулятор</h2>\r\n\r\n  <div class=\"tri-down\">\r\n    <form>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-6 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label class=\"sr-only\" for=\"tolshina\">Толщина</label>\r\n            <div class=\"input-group size-field\">\r\n              <div class=\"input-group-addon\">Т</div>\r\n              <input type=\"number\" class=\"form-control\" id=\"tolshina\" name=\"tolshina\" placeholder=\"Толщина\" value=\""
    + alias3(((helper = (helper = helpers.tolshina || (depth0 != null ? depth0.tolshina : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"tolshina","hash":{},"data":data}) : helper)))
    + "\">\r\n              <div class=\"input-group-addon\">мм</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"sr-only\" for=\"shirina\">Ширина</label>\r\n            <div class=\"input-group size-field\">\r\n              <div class=\"input-group-addon\">Ш</div>\r\n              <input type=\"number\" class=\"form-control\" id=\"shirina\" name=\"shirina\" placeholder=\"Ширина\" value=\""
    + alias3(((helper = (helper = helpers.shirina || (depth0 != null ? depth0.shirina : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"shirina","hash":{},"data":data}) : helper)))
    + "\">\r\n              <div class=\"input-group-addon\">мм</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group size-field\">\r\n            <label class=\"sr-only\" for=\"dlina\">Длина</label>\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-addon\">Д</div>\r\n              <input type=\"number\" class=\"form-control\" id=\"dlina\" name=\"dlina\" placeholder=\"Длина\" value=\""
    + alias3(((helper = (helper = helpers.dlina || (depth0 != null ? depth0.dlina : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"dlina","hash":{},"data":data}) : helper)))
    + "\">\r\n              <div class=\"input-group-addon\">мм</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-6 col-md-8\">\r\n          <div class=\"result-one\"><span>V</span> = <span id=\"volume\">"
    + alias3((helpers.cutFloat || (depth0 && depth0.cutFloat) || alias1).call(depth0,(depth0 != null ? depth0.volume : depth0),6,{"name":"cutFloat","hash":{},"data":data}))
    + "</span> м<sup><small>3</small></sup></div>\r\n          <div class=\"result-one\"><span>S</span> = <span id=\"square\">"
    + alias3((helpers.cutFloat || (depth0 && depth0.cutFloat) || alias1).call(depth0,(depth0 != null ? depth0.square : depth0),3,{"name":"cutFloat","hash":{},"data":data}))
    + "</span> м<sup><small>2</small></sup></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"count-block\">\r\n        <div class=\"form-group count-field\">\r\n          <label class=\"sr-only\" for=\"count\">Количество</label>\r\n          <div class=\"input-group\">\r\n            <input type=\"number\" class=\"form-control\" id=\"count\" name=\"count\" placeholder=\"Количество\" value=\""
    + alias3(((helper = (helper = helpers.count || (depth0 != null ? depth0.count : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"count","hash":{},"data":data}) : helper)))
    + "\">\r\n            <div class=\"input-group-addon\">шт</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"result\">Общий объем = <span class=\"result-v\">"
    + alias3((helpers.cutFloat || (depth0 && depth0.cutFloat) || alias1).call(depth0,(depth0 != null ? depth0.resultV : depth0),6,{"name":"cutFloat","hash":{},"data":data}))
    + "</span> м<sup><small>3</small></sup></div>\r\n      <div class=\"result\">Погонная длина = <span class=\"result-p\">"
    + alias3(((helper = (helper = helpers.resultP || (depth0 != null ? depth0.resultP : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"resultP","hash":{},"data":data}) : helper)))
    + "</span> м</div>\r\n    </form>\r\n  </div>\r\n  <!-- Add to table button-->\r\n  <button type=\"button\" class=\"btn add-to-table\" disabled><span class=\"ion-clipboard\"></span> Вставить в таблицу</button>\r\n\r\n  <table class=\"table table-hover table-responsive hidden\">\r\n    <thead>\r\n    <tr>\r\n      <th>ТxШxД (мм)</th>\r\n      <th>Кол-во (шт.)</th>\r\n      <th>Погонная длина (м)</th>\r\n      <th>Объем (м<sup><small>3</small></sup>)</th>\r\n      <th></th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr>\r\n      <td>50x100x5000</th>\r\n      <td>100</td>\r\n      <td>256</td>\r\n      <td>34</td>\r\n      <td>\r\n        <a class=\"remove-row\"><span class=\"ion-ios-close-outline\"></span></a>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td>50x100x5000</th>\r\n      <td>100</td>\r\n      <td>256</td>\r\n      <td>34</td>\r\n      <td>\r\n        <a class=\"remove-row\"><span class=\"ion-ios-close-outline\"></span></a>\r\n      </td>\r\n    </tr>\r\n    <tr class=\"total\">\r\n      <td>Итого:</th>\r\n      <td>15500</td>\r\n      <td>2342</td>\r\n      <td>234234</td>\r\n      <td></td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n  <div class=\"actions hidden\">\r\n    <button type=\"button\" class=\"btn btn-success\"><span class=\"ion-help\"></span> Узнать цены</button>\r\n    <!--<button type=\"button\" class=\"btn btn-success\">Сохранить</button>-->\r\n    <button type=\"button\" class=\"btn btn-info\"><span class=\"ion-paper-airplane\"></span> Отправить на e-mail</button>\r\n    <button type=\"button\" class=\"btn btn-info\"><span class=\"ion-printer\"></span> Печать</button>\r\n\r\n    <button type=\"button\" class=\"btn btn-danger pull-right\">Удалить все</button>\r\n  </div>\r\n\r\n</div>\r\n";
},"useData":true});
this["tpl"]["templates"]["companies_home"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"actions\">\r\n  <button type=\"button\" class=\"btn btn-default add-new\">Добавить Компанию<span class=\"ion-person-stalker\"></span></button>\r\n</div>\r\n<div>\r\n\r\n</div>\r\n";
},"useData":true});
this["tpl"]["templates"]["dashboard"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<!--  left-navigation -->\r\n<div class=\"left-navigation\"></div>\r\n<!-- /end  left-navigation -->\r\n\r\n<div class=\"profile dashboard\">\r\n  <div class=\"title\">\r\n    <span class=\"icon ion-person\"></span>\r\n    <span class=\"title-text\">Мой кабинет</span>\r\n  </div>\r\n  <div class=\"page\">\r\n\r\n    dashboard\r\n\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n";
},"useData":true});
this["tpl"]["templates"]["faq"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"container faq\">\r\n\r\n  <h2>FAQ - часто задаваемые вопросы</h2>\r\n\r\n  <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\r\n        <h4 class=\"panel-title\">\r\n          <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n            1. Что это за сервис и для кого он?\r\n          </a>\r\n        </h4>\r\n      </div>\r\n      <div id=\"collapseOne\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\r\n        <div class=\"panel-body\">\r\n          Lignum – это сервис для людей работающих в дереводобывающей и деревообрабатывающей индустрии.<br>\r\n          А также для людей желающих продать либо приобрести древесную продукцию.\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\r\n        <h4 class=\"panel-title\">\r\n          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\r\n            2. Для чего нужно проходить регистрацию?\r\n          </a>\r\n        </h4>\r\n      </div>\r\n      <div id=\"collapseTwo\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\r\n        <div class=\"panel-body\">\r\n          Зарегистрированным пользователям предоставляется больше возможностей:\r\n          <ul>\r\n            <li>доступ в личный кабинет;</li>\r\n            <li>возможность добавлять свои объявления и компании;</li>\r\n            <li>сохранять понравившиеся объявления и компании в раздел «Избранное»;</li>\r\n            <li>получать и отправлять сообщения;</li>\r\n            <li>и некоторые другие.</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\" role=\"tab\" id=\"headingThree\">\r\n        <h4 class=\"panel-title\">\r\n          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\r\n            3. Могу ли я добавить объявление, не регистрируясь?\r\n          </a>\r\n        </h4>\r\n      </div>\r\n      <div id=\"collapseThree\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\">\r\n        <div class=\"panel-body\">\r\n          Нет, чтобы добавить свое объявление, необходимо пройти регистрацию.\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\" role=\"tab\" id=\"heading4\">\r\n        <h4 class=\"panel-title\">\r\n          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse4\" aria-expanded=\"false\" aria-controls=\"collapse4\">\r\n            4. Видны ли мне все объявления, если я не зарегистрирован(а)?\r\n          </a>\r\n        </h4>\r\n      </div>\r\n      <div id=\"collapse4\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading4\">\r\n        <div class=\"panel-body\">\r\n          Да. Все объявления доступны для просмотра как зарегистрированным, так и незарегистрированным пользователям.\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\" role=\"tab\" id=\"heading5\">\r\n        <h4 class=\"panel-title\">\r\n          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse5\" aria-expanded=\"false\" aria-controls=\"collapse5\">\r\n            5. Я прошел регистрацию, но мне на почту не пришло письмо с ссылкой на активацию.\r\n          </a>\r\n        </h4>\r\n      </div>\r\n      <div id=\"collapse5\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading5\">\r\n        <div class=\"panel-body\">\r\n          В первую очередь проверьте папку «Спам». Если письмо действительно не пришло, напишите о своей проблеме в техподдержку.\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\" role=\"tab\" id=\"heading6\">\r\n        <h4 class=\"panel-title\">\r\n          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse6\" aria-expanded=\"false\" aria-controls=\"collapse6\">\r\n            6.	Как мне зайти в личный кабинет?\r\n          </a>\r\n        </h4>\r\n      </div>\r\n      <div id=\"collapse6\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading6\">\r\n        <div class=\"panel-body\">\r\n          Если Вы уже зарегистрированы, то нажмите кнопку «Войти» в правом верхнем углу на главной странице.\r\n          Если Вы новый пользователь, пройдите регистрацию, нажав на кнопку «Регистрация» в правом верхнем углу на главной странице.\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\" role=\"tab\" id=\"heading7\">\r\n        <h4 class=\"panel-title\">\r\n          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse7\" aria-expanded=\"false\" aria-controls=\"collapse7\">\r\n            7.	Что делать, если забыл пароль?\r\n          </a>\r\n        </h4>\r\n      </div>\r\n      <div id=\"collapse7\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading7\">\r\n        <div class=\"panel-body\">\r\n          Если Вы забыли пароль, нажмите на ссылку <a>Забыли пароль?</a>, расположенную в окне входа под полем пароля.\r\n          Вам на почту будет отправлено письмо с Вашим паролем.\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\" role=\"tab\" id=\"heading8\">\r\n      <h4 class=\"panel-title\">\r\n        <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse8\" aria-expanded=\"false\" aria-controls=\"collapse8\">\r\n          8. Что я могу делать в личном кабинете?\r\n        </a>\r\n      </h4>\r\n    </div>\r\n    <div id=\"collapse8\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading8\">\r\n      <div class=\"panel-body\">\r\n        В Личном кабинете можно:\r\n        <ul>\r\n          <li>просматривать, редактировать свои объявления и создавать новые (Личный кабинет > Объявления);</li>\r\n          <li>создавать, просматривать и редактировать профиль компании (Личный кабинет > Компании);</li>\r\n          <li>просматривать сообщения, полученные от других пользователей (Личный кабинет > Сообщения);</li>\r\n          <li>просматривать объявления и компании других пользователей, которые Вы отметили и сохранили как понравившиеся (Личный кабинет > Избранное)</li>\r\n          <li>изменять настройки профиля (Личный кабинет > Настройки профиля) и аккаунта (Личный кабинет > Настройки аккаунта)</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\" role=\"tab\" id=\"heading9\">\r\n        <h4 class=\"panel-title\">\r\n          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse9\" aria-expanded=\"false\" aria-controls=\"collapse9\">\r\n            9. Для чего нужен раздел «Избранное»?\r\n          </a>\r\n        </h4>\r\n      </div>\r\n      <div id=\"collapse9\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading9\">\r\n        <div class=\"panel-body\">\r\n          В разделе «Избранное» хранятся отмеченные Вами объявления и компании, которые Вы сохранили для дальнейшего просмотра и использования\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\" role=\"tab\" id=\"heading10\">\r\n        <h4 class=\"panel-title\">\r\n          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse10\" aria-expanded=\"false\" aria-controls=\"collapse10\">\r\n            10.	Какие объявления попадают в «Архив»?\r\n          </a>\r\n        </h4>\r\n      </div>\r\n      <div id=\"collapse10\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading10\">\r\n        <div class=\"panel-body\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\" role=\"tab\" id=\"heading11\">\r\n        <h4 class=\"panel-title\">\r\n          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse11\" aria-expanded=\"false\" aria-controls=\"collapse11\">\r\n            11.	Как мне добавить объявление?\r\n          </a>\r\n        </h4>\r\n      </div>\r\n      <div id=\"collapse11\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading11\">\r\n        <div class=\"panel-body\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\" role=\"tab\" id=\"heading12\">\r\n        <h4 class=\"panel-title\">\r\n          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse12\" aria-expanded=\"false\" aria-controls=\"collapse12\">\r\n            12.	Как мне добавить компанию?\r\n          </a>\r\n        </h4>\r\n      </div>\r\n      <div id=\"collapse12\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading12\">\r\n        <div class=\"panel-body\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\" role=\"tab\" id=\"heading13\">\r\n        <h4 class=\"panel-title\">\r\n          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse13\" aria-expanded=\"false\" aria-controls=\"collapse13\">\r\n            13.	При добавлении объявления обязательно ли заполнять все поля?\r\n          </a>\r\n        </h4>\r\n      </div>\r\n      <div id=\"collapse13\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading13\">\r\n        <div class=\"panel-body\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\" role=\"tab\" id=\"heading14\">\r\n        <h4 class=\"panel-title\">\r\n          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse14\" aria-expanded=\"false\" aria-controls=\"collapse14\">\r\n            14.	Как мне продлить срок размещения объявления?\r\n          </a>\r\n        </h4>\r\n      </div>\r\n      <div id=\"collapse14\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading14\">\r\n        <div class=\"panel-body\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\" role=\"tab\" id=\"heading15\">\r\n        <h4 class=\"panel-title\">\r\n          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse15\" aria-expanded=\"false\" aria-controls=\"collapse15\">\r\n            15.	Что делать если я нашел ошибку?\r\n          </a>\r\n        </h4>\r\n      </div>\r\n      <div id=\"collapse15\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading15\">\r\n        <div class=\"panel-body\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n";
},"useData":true});
this["tpl"]["templates"]["filters"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "\r\n"
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.level : depth0),"===","parent",{"name":"compare","hash":{},"fn":this.program(2, data, 0),"inverse":this.program(12, data, 0),"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.separator : depth0),{"name":"if","hash":{},"fn":this.program(34, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
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
    + "\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</label>\r\n      </div>\r\n      <div class=\"child-filters "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "      </div>\r\n";
},"4":function(depth0,helpers,partials,data) {
    return "checked";
},"6":function(depth0,helpers,partials,data) {
    return "";
},"8":function(depth0,helpers,partials,data) {
    return "hidden";
},"10":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "          <div class=\"checkbox\">\r\n            <label><input type=\"checkbox\" id=\""
    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias3(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "</label>\r\n          </div>\r\n";
},"12":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.subtitle : depth0),{"name":"if","hash":{},"fn":this.program(13, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n    <p class=\"lbl\" data-label=\""
    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</p>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":this.program(15, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n";
},"13":function(depth0,helpers,partials,data) {
    var helper;

  return "    <div class=\"subtitle hidden\">\r\n      <h4>"
    + this.escapeExpression(((helper = (helper = helpers.subtitle || (depth0 != null ? depth0.subtitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"subtitle","hash":{},"data":data}) : helper)))
    + "</h4>\r\n";
},"15":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.compare || (depth0 && depth0.compare) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.type : depth0),"===","input",{"name":"compare","hash":{},"fn":this.program(16, data, 0),"inverse":this.program(23, data, 0),"data":data})) != null ? stack1 : "");
},"16":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.label : depth0),{"name":"if","hash":{},"fn":this.program(17, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        <div class=\"from-to-inline\">\r\n          <div class=\"input-filter m-r-05\">\r\n            <label for=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "-from\">от</label>\r\n            <input type=\"number\" name=\"inputFilter\" class=\"form-control\" id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "-from\" min=\"0\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.from : depth0),{"name":"if","hash":{},"fn":this.program(19, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n          </div>\r\n          <div class=\"input-filter\">\r\n            <label for=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "-to\">до</label>\r\n            <input type=\"number\" name=\"inputFilter\" class=\"form-control\" id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "-to\" min=\"0\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.to : depth0),{"name":"if","hash":{},"fn":this.program(21, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n          </div>\r\n        </div>\r\n";
},"17":function(depth0,helpers,partials,data) {
    var helper;

  return "          <div class=\"input-label\">"
    + this.escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "</div>\r\n";
},"19":function(depth0,helpers,partials,data) {
    var helper;

  return "value=\""
    + this.escapeExpression(((helper = (helper = helpers.from || (depth0 != null ? depth0.from : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"from","hash":{},"data":data}) : helper)));
},"21":function(depth0,helpers,partials,data) {
    var helper;

  return "value=\""
    + this.escapeExpression(((helper = (helper = helpers.to || (depth0 != null ? depth0.to : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"to","hash":{},"data":data}) : helper)));
},"23":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.compare || (depth0 && depth0.compare) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.type : depth0),"===","input-sizes",{"name":"compare","hash":{},"fn":this.program(24, data, 0),"inverse":this.program(32, data, 0),"data":data})) != null ? stack1 : "");
},"24":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.label : depth0),{"name":"if","hash":{},"fn":this.program(17, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.values : depth0),{"name":"each","hash":{},"fn":this.program(25, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        <button type=\"button\" class=\"btn ion-plus add-size\"></button>\r\n";
},"25":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "          <div class=\"from-to-inline m-b-1\">\r\n            <div class=\"input-filter\">\r\n              <input type=\"number\" name=\"inputFilter\" class=\"form-control\" id=\"t\" min=\"0\" data-id=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.t : depth0),{"name":"if","hash":{},"fn":this.program(26, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\r\n            </div>\r\n            <div class=\"input-filter\">\r\n              <label>&#9747;</label>\r\n              <input type=\"number\" name=\"inputFilter\" class=\"form-control\" id=\"s\" min=\"0\" data-id=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.s : depth0),{"name":"if","hash":{},"fn":this.program(28, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\r\n            </div>\r\n            <div class=\"input-filter\">\r\n              <label>&#9747;</label>\r\n              <input type=\"number\" name=\"inputFilter\" class=\"form-control\" id=\"d\" min=\"0\" data-id=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.d : depth0),{"name":"if","hash":{},"fn":this.program(30, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\r\n            </div>\r\n            <button type=\"button\" class=\"btn ion-minus remove-size\" data-id=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\"></button>\r\n          </div>\r\n\r\n";
},"26":function(depth0,helpers,partials,data) {
    var helper;

  return "value=\""
    + this.escapeExpression(((helper = (helper = helpers.t || (depth0 != null ? depth0.t : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"t","hash":{},"data":data}) : helper)))
    + "\"";
},"28":function(depth0,helpers,partials,data) {
    var helper;

  return "value=\""
    + this.escapeExpression(((helper = (helper = helpers.s || (depth0 != null ? depth0.s : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"s","hash":{},"data":data}) : helper)))
    + "\"";
},"30":function(depth0,helpers,partials,data) {
    var helper;

  return "value=\""
    + this.escapeExpression(((helper = (helper = helpers.d || (depth0 != null ? depth0.d : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"d","hash":{},"data":data}) : helper)))
    + "\"";
},"32":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <div class=\"checkbox\">\r\n          <label><input type=\"checkbox\" id=\""
    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias3(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "</label>\r\n        </div>\r\n      ";
},"34":function(depth0,helpers,partials,data) {
    return "    </div>\r\n    <div class=\"col-md-6\">\r\n";
},"36":function(depth0,helpers,partials,data) {
    return "    </div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.category : depth0)) != null ? stack1.filters : stack1),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.subtitle : depth0),{"name":"if","hash":{},"fn":this.program(36, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\r\n</div>";
},"useData":true});
this["tpl"]["templates"]["filter_home"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <option value=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</option>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"actions\">\r\n  <button type=\"button\" class=\"btn btn-default add-new\">Добавить объявление <span class=\"ion-ios-plus-outline\"></span></button>\r\n</div>\r\n<div class=\"filters-wrapper hidden-xs hidden-sm\">\r\n  <a class=\"close-btn visible-xs visible-sm\"><span class=\"ion-close\"></span></a>\r\n  <div class=\"checkbox\">\r\n    <label><input type=\"checkbox\" name=\"type\" value=\"buy\">Куплю</label>\r\n  </div>\r\n  <div class=\"checkbox\">\r\n    <label><input type=\"checkbox\" name=\"type\" value=\"sell\">Продам</label>\r\n  </div>\r\n  <div class=\"line-breaker\"></div>\r\n  <div class=\"checkbox\">\r\n    <label><input type=\"checkbox\" name=\"object\" value=\"product\">Товар</label>\r\n  </div>\r\n  <div class=\"checkbox\">\r\n    <label><input type=\"checkbox\" name=\"object\" value=\"service\">Услуга</label>\r\n  </div>\r\n  <div class=\"line-breaker\"></div>\r\n  <div class=\"form-group\">\r\n    <label for=\"category\">Раздел</label>\r\n    <select class=\"form-control\" id=\"category\" name=\"category\">\r\n      <option value=\"\">&mdash;</option>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.categories : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\r\n  </div>\r\n\r\n  <div class=\"filters\"></div>\r\n\r\n  <div class=\"line-breaker\"></div>\r\n\r\n  <div class=\"country-picker-label\">Местоположение</div>\r\n  <div class=\"country-picker\"></div>\r\n\r\n  <div class=\"line-breaker\"></div>\r\n  <div class=\"form-group\">\r\n    <button type=\"button\" class=\"btn btn-default drop-filter\">Сбросить фильтр <span class=\"ion-loop\"></span></button>\r\n  </div>\r\n</div>\r\n<div class=\"show-mobile-filters visible-xs visible-sm\">\r\n  <span class=\"ion-arrow-down-b\"></span>\r\n</div>";
},"useData":true});
this["tpl"]["templates"]["forbidden"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"forbidden\">\r\n  <div class=\"ion-ios-locked icon\"></div>\r\n  <h2>Вы не авторизованы.</h2>\r\n  <button type=\"button\" class=\"btn btn-default login\">Вход</button>\r\n  <button type=\"button\" class=\"btn btn-default register\">Регистрация</button>\r\n</div>\r\n\r\n<div class=\"modal-section\"></div>";
},"useData":true});
this["tpl"]["templates"]["home"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<!-- Filter -->\r\n<div class=\"col-md-3 col-lg-2 filter-home\"></div>\r\n<!-- /end filter -->\r\n\r\n<div class=\"col-md-9 col-lg-7 ads\">\r\n  <div class=\"content-filter\">\r\n    <div class=\"btn-group mobile-filter-btn visible-xs visible-sm\" role=\"group\" aria-label=\"First group\">\r\n      <button type=\"button\" class=\"btn btn-default settings-btn\"><span class=\"ion-android-options\"></span></button>\r\n    </div>\r\n    <div class=\"search\">\r\n      <div class=\"input-group\">\r\n        <input type=\"text\" class=\"form-control search-input\" placeholder=\"Искать\">\r\n        <span class=\"input-group-btn\">\r\n              <button class=\"btn btn-default\" type=\"button\"><span class=\"ion-ios-search-strong\"></span></button>\r\n            </span>\r\n      </div><!-- /input-group -->\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"home-actions\"></div>\r\n\r\n  <!-- home-content -->\r\n  <div class=\"home-content\"></div>\r\n  <!-- /end home-content -->\r\n\r\n  <div class=\"row m-t-2\">\r\n    <div class=\"col-xs-11\">\r\n      <button class=\"btn btn-default center-block hidden\" type=\"button\">Показать еще 20</button>\r\n    </div>\r\n    <div class=\"col-xs-1\">\r\n      <button class=\"btn btn-default pull-right up\" type=\"button\"><span class=\"ion-android-arrow-up\"></span></button>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<!-- Companies  -->\r\n<div class=\"col-md-12 col-lg-3 companies-home\"></div>\r\n<!-- /end Companies -->";
},"useData":true});
this["tpl"]["templates"]["home_content"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<!-- Ads list  -->\r\n<div class=\"ads-list\"></div>\r\n<!-- /end ads-list -->";
},"useData":true});
this["tpl"]["templates"]["main"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<!-- Header -->\r\n<header class=\"container-fluid\"></header>\r\n<!-- /end header -->\r\n\r\n<section class=\"container-fluid section home-banner\"></section>\r\n\r\n<!-- Main content -->\r\n<section class=\"container-fluid section home\">\r\n  <div class=\"row home-wrapper content\">\r\n  </div>\r\n</section>\r\n<!-- /end main content -->\r\n\r\n<!-- Footer -->\r\n<footer class=\"footer\"></footer>\r\n<!-- /end Footer  -->";
},"useData":true});
this["tpl"]["templates"]["message"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <div class=\"ad-item\">\r\n    <div class=\"ion-ios-plus-outline placeholder add-button\"></div>\r\n    <div class=\"section1\">\r\n      <div class=\"photo\"><span class=\"ion-image\"></span></div>\r\n      <div class=\"content\">\r\n        <div class=\"ad-title\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</div>\r\n        <div class=\"ad-description\">"
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"i-bottom\">\r\n      <span class=\"date\"><i class=\"ion-ios-calendar-outline\"></i><span  class=\"blur-text\">24 окт. 2018</span></span>\r\n      <span class=\"name\"><i class=\"ion-ios-person-outline\"></i><span class=\"blur-text\">Your Name</span></span>\r\n      <span class=\"location\"><i class=\"ion-ios-location-outline\"></i><span class=\"blur-text\">Belarus, Minsk</span></span>\r\n    </div>\r\n    <div class=\"icon ion-ios-browsers-outline tab\"></div>\r\n    <div class=\"icon ion-ios-star-outline star\"></div>\r\n  </div>\r\n";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return "  "
    + this.escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"message","hash":{},"data":data}) : helper)))
    + "\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.placeholder : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});
this["tpl"]["templates"]["settings"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<!--  left-navigation -->\r\n<div class=\"left-navigation\"></div>\r\n<!-- /end  left-navigation -->\r\n<div class=\"profile settings\">\r\n  <div class=\"title\">\r\n    <span class=\"icon ion-settings\"></span>\r\n    <span class=\"title-text\">Настройки</span>\r\n  </div>\r\n  <div class=\"tabs\">\r\n    <div class=\"tab profile-settings-link\">Настройки профиля</div>\r\n    <div class=\"tab account-settings-link\">Настройки аккаунта</div>\r\n  </div>\r\n  <!--  page (inner sections comes here) -->\r\n  <div class=\"page\"></div>\r\n  <!-- /end  page -->\r\n</div>\r\n";
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
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"alert\" style=\"display: none\">\r\n</div>\r\n<form>\r\n  <div class=\"form-group row\">\r\n    <div class=\"col-md-5\">\r\n      <div class=\"avatar\" style=\"background-image: url('img/avatar/"
    + alias2(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + ".png'), url('../img/profile_placeholder.png')\"></div>\r\n      <div class=\"modal-avatar-section\"></div>\r\n    </div>\r\n    <div class=\"col-md-7\">\r\n      <div class=\"form-group \">\r\n        <label for=\"lastName\">Фамилия</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"lastName\" "
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
    + alias2((helpers.formatDate || (depth0 && depth0.formatDate) || alias1).call(depth0,(depth0 != null ? depth0.updated_at : depth0),"LLLL",{"name":"formatDate","hash":{},"data":data}))
    + "</p>\r\n    </div>\r\n  </div>\r\n\r\n</form>";
},"useData":true});
this["tpl"]["templates"]["avatar"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<!-- Forgot modal -->\r\n<div class=\"modal fade\" id=\"avatar\"  tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"avatarModalLabel\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\" id=\"avatarModalLabel\">Загрузка личного аватара</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form id=\"form\">\r\n          <input id=\"upload\" type=\"file\" name=\"upload\">\r\n          <div id=\"upload-preview\"></div>\r\n      </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default btn-danger pull-left\" data-dismiss=\"modal\">Отмена</button>\r\n        <button type=\"button\" class=\"btn btn-default upload-avatar\">Загрузить</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->";
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
  "<div class=\"form-group row\">\r\n  <div class=\"col-sm-6 col-md-6 m-b-1\">\r\n    <select class=\"form-control\" id=\"country\" name=\"country\">\r\n      <option value=\"\">Страна</option>\r\n";
  stack1 = ((helper = (helper = helpers.countries || (depth0 != null ? depth0.countries : depth0)) != null ? helper : alias1),(options={"name":"countries","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.countries) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "    </select>\r\n  </div>\r\n  <div class=\"col-sm-6 col-md-6\">\r\n    <input type=\"text\" class=\"form-control\" id=\"city\" name=\"city\"\r\n      "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.city : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0, blockParams, depths),"inverse":this.program(6, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\r\n      "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.country : depth0),{"name":"if","hash":{},"fn":this.program(8, data, 0, blockParams, depths),"inverse":this.program(10, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + ">\r\n    <div class=\"cityDropdown hide\">\r\n      <ul>\r\n";
  stack1 = ((helper = (helper = helpers.cities || (depth0 != null ? depth0.cities : depth0)) != null ? helper : alias1),(options={"name":"cities","hash":{},"fn":this.program(12, data, 0, blockParams, depths),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.cities) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "      </ul>\r\n    </div>\r\n  </div>\r\n</div>";
},"useData":true,"useDepths":true});
this["tpl"]["templates"]["empty"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"empty-message\">\r\n Ничего не найдено\r\n</div>";
},"useData":true});
this["tpl"]["templates"]["footer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"copyright\">\r\n\r\n</div>";
},"useData":true});
this["tpl"]["templates"]["header"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "\r\n          <div class=\"user\">\r\n            <div class=\"user-profile\">\r\n              <div class=\"border\">\r\n                <span class=\"profile-photo\" style=\"background-image: url('img/avatar/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1._id : stack1), depth0))
    + ".png')\"></span>\r\n                <i class=\"ion-person\"></i>\r\n              </div>\r\n              "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.name : stack1), depth0))
    + "\r\n            </div>\r\n            <span class=\"ion-log-out logout\"></span>\r\n          </div>\r\n\r\n";
},"3":function(depth0,helpers,partials,data) {
    return "          <button type=\"button\" class=\"btn btn-default registration\">Регистрация</button>\r\n          <button type=\"button\" class=\"btn btn-success login\">Войти</button>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row header-wrapper\">\r\n  <!-- Logo -->\r\n  <div class=\"col-md-3 logo\">\r\n    <a href=\"/\">Lignum</a>\r\n  </div>\r\n  <!-- /end logo -->\r\n  <!-- Navigation -->\r\n  <nav class=\"col-md-9 navigation hidden\">\r\n    <ul>\r\n      <li><a href=\"/\">Главная</a></li>\r\n      <li><a>Компании</a></li>\r\n      <li><a href=\"#calc\">Калькулятор</a></li>\r\n      <li><a href=\"#faq\">FAQ</a></li>\r\n      <li>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.user : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "      </li>\r\n    </ul>\r\n  </nav>\r\n  <!-- /end navigation -->\r\n</div>\r\n<div class=\"hamburger visible-xs\">\r\n  <span class=\"ion-navicon\"></span>\r\n</div>\r\n\r\n<div class=\"modal-section\"></div>";
},"useData":true});
this["tpl"]["templates"]["left_navigation"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "active";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing;

  return "<ul>\r\n  <li>\r\n    <a class=\"link "
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias1).call(depth0,(depth0 != null ? depth0.activePage : depth0),"===","dashboard",{"name":"compare","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\" href=\"#profile/dashboard\">\r\n      <span class=\"icon ion-person\"></span>\r\n      <span class=\"nav-item\">Мой кабинет</span>\r\n    </a>\r\n  </li>\r\n  <li>\r\n    <a class=\"link "
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias1).call(depth0,(depth0 != null ? depth0.activePage : depth0),"===","ads",{"name":"compare","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\" href=\"#profile/ads\">\r\n      <span class=\"icon ion-clipboard\"></span>\r\n      <span class=\"nav-item\">Объявления</span>\r\n    </a>\r\n  </li>\r\n  <li>\r\n    <a class=\"link "
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias1).call(depth0,(depth0 != null ? depth0.activePage : depth0),"===","companies",{"name":"compare","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n      <span class=\"icon ion-person-stalker\"></span>\r\n      <span class=\"nav-item\">Компании</span>\r\n    </a>\r\n  </li>\r\n  <li>\r\n    <a class=\"link\">\r\n      <span class=\"icon ion-android-mail\"></span>\r\n      <span class=\"nav-item\">Сообщения</span>\r\n    </a>\r\n  </li>\r\n  <li>\r\n    <a class=\"link\">\r\n      <span class=\"icon ion-android-star-outline\"></span>\r\n      <span class=\"nav-item\">Избранное</span>\r\n    </a>\r\n  </li>\r\n  <li>\r\n    <a class=\"link "
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias1).call(depth0,(depth0 != null ? depth0.activePage : depth0),"===","settings",{"name":"compare","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\" href=\"#profile/settings\">\r\n      <span class=\"icon ion-settings\"></span>\r\n      <span class=\"nav-item\">Настройки</span>\r\n    </a>\r\n  </li>\r\n</ul>";
},"useData":true});
this["tpl"]["templates"]["send_message_form"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"send_message_form\">\r\n  <div class=\"arrow-left\"></div>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n  <form>\r\n    <!-- USER: "
    + this.escapeExpression(((helper = (helper = helpers.userId || (depth0 != null ? depth0.userId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"userId","hash":{},"data":data}) : helper)))
    + " -->\r\n    <div class=\"form-group\">\r\n      <label for=\"text_message\">Текст сообщения:</label>\r\n      <textarea class=\"form-control\" rows=\"3\" id=\"text_message\" name=\"text_message\"></textarea>\r\n    </div>\r\n    <button type=\"button\" class=\"btn btn-default send\" disabled>Отправить</button>\r\n  </form>\r\n</div>\r\n";
},"useData":true});
this["tpl"]["templates"]["spinner"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"loader-wrapper\">\r\n  <div class=\"loader\"></div>\r\n</div>";
},"useData":true});