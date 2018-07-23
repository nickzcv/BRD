this["tpl"] = this["tpl"] || {};
this["tpl"]["templates"] = this["tpl"]["templates"] || {};
this["tpl"]["templates"]["add_ad"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "value=\""
    + container.escapeExpression(((helper = (helper = helpers.otherPhone || (depth0 != null ? depth0.otherPhone : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"otherPhone","hash":{},"data":data}) : helper)))
    + "\"";
},"5":function(container,depth0,helpers,partials,data) {
    return " placeholder=\"+375 00 0000000\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<!--  left-navigation -->\n<div class=\"left-navigation\"></div>\n<!-- /end  left-navigation -->\n\n<div class=\"main-content new-ad\">\n  <div class=\"title\">\n    <span class=\"icon ion-clipboard\"></span>\n    <span class=\"title-text\">Новое объявление</span>\n  </div>\n  <div class=\"page\">\n    <!--  Add new ad form -->\n    <form id=\"add-ad-form\">\n\n      <div class=\"col-xs-12 col-sm-6 m-t-1 p-l-0\">\n        <div class=\"form-group\">\n          <label class=\"radio-inline\"><input type=\"radio\" name=\"type\" value=\"buy\">Куплю</label>\n          <label class=\"radio-inline\"><input type=\"radio\" name=\"type\" value=\"sell\">Продам</label>\n          <div class=\"typeError\"></div>\n        </div>\n        <div class=\"form-divider\"></div>\n        <div class=\"form-group\">\n          <label class=\"radio-inline\"><input type=\"radio\" name=\"object\" value=\"product\">Товар</label>\n          <label class=\"radio-inline\"><input type=\"radio\" name=\"object\" value=\"service\">Услуга</label>\n          <div class=\"objectError\"></div>\n        </div>\n      </div>\n      <div class=\"col-xs-12 col-sm-6 m-b-1\">\n        <p class=\"lbl\">Фото</p>\n\n        <label class=\"btn ad-photo\" id=\"preview\">\n          <span class=\"ion-image\"></span>\n          <input type=\"file\" name=\"photo\" id=\"photo\" class=\"hidden photo-input\" >\n        </label>\n        <div class=\"marker buy hidden\">Куплю</div>\n        <div class=\"marker sell hidden\">Продам</div>\n        <div class=\"image-error-message hidden\"></div>\n      </div>\n      <div class=\"form-group\">\n        <p class=\"lbl\">Раздел</p>\n        <select class=\"form-control\" id=\"category\" name=\"category\">\n          <option value=\"\">&mdash;</option>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.categories : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </select>\n      </div>\n      <div class=\"filters m-b-2\"></div>\n      <div class=\"form-group\">\n        <label for=\"title\">Заголовок</label>\n        <input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\" placeholder=\"Заголовок объявления\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"description\">Текст объявления</label>\n        <textarea class=\"form-control\" rows=\"3\" id=\"description\" name=\"description\" placeholder=\"Текст объявления\"></textarea>\n      </div>\n\n      <div class=\"form-group row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label for=\"price\">Цена</label>\n            <input type=\"text\" class=\"form-control\" id=\"price\" placeholder=\"0 BYR\">\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <p class=\"lbl\">Срок размещения</p>\n          <div class=\"form-group\">\n            <select class=\"form-control\" id=\"expirationDate\">\n              <option value=\"5\">5 дней</option>\n              <option value=\"10\">10 дней</option>\n              <option value=\"30\">30 дней</option>\n            </select>\n          </div>\n        </div>\n      </div>\n\n      <p class=\"lbl\">Местоположение</p>\n      <div class=\"country-picker\"></div>\n\n      <div class=\"form-group row\">\n        <div class=\"col-md-8\">\n          <div class=\"form-group\">\n            <label for=\"contacts\">Контактные данные</label>\n            <input type=\"text\" class=\"form-control\" id=\"contacts\" placeholder=\"Введите название компании\" disabled=\"disabled\">\n            <span class=\"add-company-search\">Нет вашей компании? <a>Создать</a></span>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"radio\">\n              <label><input type=\"radio\" id=\"profileRadio\" name=\"getContacts\" value=\"profile\" checked>Использовать контактные телефоны профиля</label>\n            </div>\n            <div class=\"radio\">\n              <label><input type=\"radio\" id=\"companyRadio\" name=\"getContacts\" value=\"company\">Использовать контактные телефоны компании</label>\n            </div>\n            <div class=\"radio\">\n              <label><input type=\"radio\" id=\"otherRadio\" name=\"getContacts\" value=\"other\" >Ввести другой контактный телефон</label>\n            </div>\n            <div class=\"form-group otherPhoneWrapper\">\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\"><i class=\"ion-android-call\"></i></span>\n                <input type=\"text\" class=\"form-control\" id=\"otherPhone\" name=\"otherPhone\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.otherPhone : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + ">\n              </div>\n              <div class=\"otherPhoneError\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n      <button type=\"submit\" class=\"btn btn-default\">Опубликовать</button>\n      <button type=\"button\" class=\"btn btn-default back\">Отмена</button>\n    </form>\n    <!-- /end form-->\n  </div>\n\n\n\n</div>";
},"useData":true});
this["tpl"]["templates"]["ads"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!--  left-navigation -->\n<div class=\"left-navigation\"></div>\n<!-- /end  left-navigation -->\n\n<div class=\"main-content ads\">\n  <div class=\"title\">\n    <span class=\"icon ion-clipboard\"></span>\n    <span class=\"title-text\">Мои объявления</span>\n  </div>\n  <div class=\"page\">\n    <div class=\"btns-section\">\n      <button type=\"button\" class=\"btn btn-default pull-left add-button\">Добавить объявление <span class=\"ion-ios-plus-outline\"></span></button>\n      <button type=\"button\" class=\"btn btn-default\" disabled>Избранное <span class=\"icon ion-ios-star-outline star\"></span></button>\n      <button type=\"button\" class=\"btn btn-default go-to-archive\" disabled>Архив <span class=\"ion-filing\"></span></button>\n    </div>\n\n    <div class=\"ads-list\"></div>\n\n  </div>\n</div>\n";
},"useData":true});
this["tpl"]["templates"]["ad_full_view"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"loader-wrapper\">\n      <div class=\"loader\"></div>\n    </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.isError : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    "
    + container.escapeExpression(((helper = (helper = helpers.errorMessage || (depth0 != null ? depth0.errorMessage : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"errorMessage","hash":{},"data":data}) : helper)))
    + "\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n    <div class=\"subheader\">\n      <div class=\"photo\" style=\"background-image: url('img/ads/"
    + alias4(((helper = (helper = helpers.photo || (depth0 != null ? depth0.photo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photo","hash":{},"data":data}) : helper)))
    + "')\"></div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.photo : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "      <h2>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\n    </div>\n\n    <div class=\"status-details\">\n      <span class=\"type "
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"===","buy",{"name":"compare","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(13, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"===","buy",{"name":"compare","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data})) != null ? stack1 : "")
    + "      </span>\n\n      <span class=\"date\">\n        Добавлено: "
    + alias4((helpers.formatDate || (depth0 && depth0.formatDate) || alias2).call(alias1,(depth0 != null ? depth0.created_at : depth0),"LL",{"name":"formatDate","hash":{},"data":data}))
    + "\n      </span>\n    </div>\n\n    <div class=\"row content\">\n      <!-- content section -->\n      <div class=\"col-sm-9\">\n        <nav class=\"brd-nav-tabs\">\n          <ul>\n            <li>\n              <a class=\"nav-tab-item active\" data-state=\"main\">\n                Подробнее\n              </a>\n            </li>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isLoggedIn : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </ul>\n        </nav>\n\n        <!-- Tabs content -->\n        <div class=\"tab-region\">\n          <!-- Category -->\n          <div class=\"category\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.category : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            <div class=\"message hidden\"></div>\n          </div>\n          <!-- end of Category -->\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(53, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"if","hash":{},"fn":container.program(55, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n        <!-- end of Tabs content -->\n      </div>\n      <!-- end of content section -->\n      <div class=\"col-sm-3\">\n\n      </div>\n    </div>\n\n  ";
},"7":function(container,depth0,helpers,partials,data) {
    return "";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <img class=\"photo-filter-icon\" src=\"img/filter-icons/"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.category : depth0)) != null ? stack1.id : stack1), depth0))
    + ".svg\" />\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "success";
},"13":function(container,depth0,helpers,partials,data) {
    return "fail";
},"15":function(container,depth0,helpers,partials,data) {
    return "          Куплю\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "          Продам\n";
},"19":function(container,depth0,helpers,partials,data) {
    return "              <li>\n                <a class=\"nav-tab-item\" data-state=\"messages\">\n                  Сообщения\n                </a>\n              </li>\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "              <h3 class=\"category-title\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.category : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h3>\n              <table class=\"filters-table\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.category : depth0)) != null ? stack1.filters : stack1),{"name":"each","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                <tr>\n                  <td>\n\n                  </td>\n                </tr>\n              </table>\n";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.compare || (depth0 && depth0.compare) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.level : depth0),"===","parent",{"name":"compare","hash":{},"fn":container.program(23, data, 0),"inverse":container.program(31, data, 0),"data":data})) != null ? stack1 : "");
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "                    <tr class=\"filter-row\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                      <td class=\"parent-col\"><span class=\"dash\">-</span>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                      </td>\n                    </tr>\n";
},"24":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                        <td>\n                          <span class=\"filter-title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "</span>\n                        </td>\n";
},"26":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"27":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "                            <div class=\"parent\">\n                              <span class=\"parent-title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                            </div>\n";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"29":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                                  <i>"
    + container.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"value","hash":{},"data":data}) : helper)))
    + "</i>\n";
},"31":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "                    <tr class=\"filter-row\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                      <td class=\"first-level\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(34, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                      </td>\n                    </tr>\n";
},"32":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                        <td><span class=\"filter-title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "</span></td>\n";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.compare || (depth0 && depth0.compare) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.type : depth0),"===","input",{"name":"compare","hash":{},"fn":container.program(35, data, 0),"inverse":container.program(43, data, 0),"data":data})) != null ? stack1 : "");
},"35":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(36, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"36":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "                              <div class=\"overlay\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.label : depth0),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                                "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.from : depth0),{"name":"if","hash":{},"fn":container.program(39, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                                "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.to : depth0),{"name":"if","hash":{},"fn":container.program(41, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                              </div>\n";
},"37":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                                  <i>"
    + container.escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"label","hash":{},"data":data}) : helper)))
    + "</i>:\n";
},"39":function(container,depth0,helpers,partials,data) {
    var helper;

  return "от "
    + container.escapeExpression(((helper = (helper = helpers.from || (depth0 != null ? depth0.from : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"from","hash":{},"data":data}) : helper)));
},"41":function(container,depth0,helpers,partials,data) {
    var helper;

  return "до "
    + container.escapeExpression(((helper = (helper = helpers.to || (depth0 != null ? depth0.to : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"to","hash":{},"data":data}) : helper)));
},"43":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.compare || (depth0 && depth0.compare) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.type : depth0),"===","input-sizes",{"name":"compare","hash":{},"fn":container.program(44, data, 0),"inverse":container.program(50, data, 0),"data":data})) != null ? stack1 : "");
},"44":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.values : depth0),{"name":"each","hash":{},"fn":container.program(45, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"45":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.t : depth0),{"name":"if","hash":{},"fn":container.program(46, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"46":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.s : depth0),{"name":"if","hash":{},"fn":container.program(47, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"47":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.d : depth0),{"name":"if","hash":{},"fn":container.program(48, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"48":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                                    <div class=\"size-row\">"
    + alias4(((helper = (helper = helpers.t || (depth0 != null ? depth0.t : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"t","hash":{},"data":data}) : helper)))
    + "<b class=\"iks\">&#9747;</b>"
    + alias4(((helper = (helper = helpers.s || (depth0 != null ? depth0.s : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"s","hash":{},"data":data}) : helper)))
    + "<b class=\"iks\">&#9747;</b>"
    + alias4(((helper = (helper = helpers.d || (depth0 != null ? depth0.d : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"d","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"50":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(51, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                          ";
},"51":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                              <span>"
    + container.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"value","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"53":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            <div class=\"description\">"
    + container.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"55":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            <div class=\"price\">Цена: "
    + container.escapeExpression(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"price","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"ad-full-view\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.loading : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>\n\n";
},"useData":true});
this["tpl"]["templates"]["ad_item"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "success";
},"3":function(container,depth0,helpers,partials,data) {
    return "danger";
},"5":function(container,depth0,helpers,partials,data) {
    return "          Куплю\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "          Продам\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <img class=\"photo-filter-icon\" src=\"img/filter-icons/"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.category : depth0)) != null ? stack1.id : stack1), depth0))
    + ".svg\" />\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "        <li>\n          <a class=\"nav-tab-item\" data-state=\"messages\">\n            Сообщения\n          </a>\n        </li>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n          <table class=\"filters-table\">\n            <tr class=\"table-header\">\n              <th class=\"category-title\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.category : depth0)) != null ? stack1.title : stack1), depth0))
    + "</th>\n            </tr>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.category : depth0)) != null ? stack1.filters : stack1),{"name":"each","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            <tr>\n              <td>\n\n              </td>\n            </tr>\n          </table>\n\n\n\n\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.compare || (depth0 && depth0.compare) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.level : depth0),"===","parent",{"name":"compare","hash":{},"fn":container.program(17, data, 0),"inverse":container.program(25, data, 0),"data":data})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "                <tr class=\"filter-row\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                  <td class=\"parent-col\"><span class=\"dash\">-</span>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                  </td>\n                </tr>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                    <td>\n                      <span class=\"filter-title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "</span>\n                    </td>\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "                        <div class=\"parent\">\n                          <span class=\"parent-title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                        </div>\n";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"23":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                              <i>"
    + container.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"value","hash":{},"data":data}) : helper)))
    + "</i>\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "                <tr class=\"filter-row\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                  <td class=\"first-level\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                  </td>\n                </tr>\n";
},"26":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                    <td><span class=\"filter-title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "</span></td>\n";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.compare || (depth0 && depth0.compare) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.type : depth0),"===","input",{"name":"compare","hash":{},"fn":container.program(29, data, 0),"inverse":container.program(37, data, 0),"data":data})) != null ? stack1 : "");
},"29":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"30":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "                          <div class=\"overlay\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.label : depth0),{"name":"if","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                            "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.from : depth0),{"name":"if","hash":{},"fn":container.program(33, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                            "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.to : depth0),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                          </div>\n";
},"31":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                              <i>"
    + container.escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"label","hash":{},"data":data}) : helper)))
    + "</i>:\n";
},"33":function(container,depth0,helpers,partials,data) {
    var helper;

  return "от "
    + container.escapeExpression(((helper = (helper = helpers.from || (depth0 != null ? depth0.from : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"from","hash":{},"data":data}) : helper)));
},"35":function(container,depth0,helpers,partials,data) {
    var helper;

  return "до "
    + container.escapeExpression(((helper = (helper = helpers.to || (depth0 != null ? depth0.to : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"to","hash":{},"data":data}) : helper)));
},"37":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.compare || (depth0 && depth0.compare) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.type : depth0),"===","input-sizes",{"name":"compare","hash":{},"fn":container.program(38, data, 0),"inverse":container.program(44, data, 0),"data":data})) != null ? stack1 : "");
},"38":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.values : depth0),{"name":"each","hash":{},"fn":container.program(39, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"39":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.t : depth0),{"name":"if","hash":{},"fn":container.program(40, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"40":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.s : depth0),{"name":"if","hash":{},"fn":container.program(41, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"41":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.d : depth0),{"name":"if","hash":{},"fn":container.program(42, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"42":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                                <div class=\"size-row\">"
    + alias4(((helper = (helper = helpers.t || (depth0 != null ? depth0.t : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"t","hash":{},"data":data}) : helper)))
    + "<b class=\"iks\">&#9747;</b>"
    + alias4(((helper = (helper = helpers.s || (depth0 != null ? depth0.s : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"s","hash":{},"data":data}) : helper)))
    + "<b class=\"iks\">&#9747;</b>"
    + alias4(((helper = (helper = helpers.d || (depth0 != null ? depth0.d : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"d","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"44":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(45, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                      ";
},"45":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                          <span>"
    + container.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"value","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"47":function(container,depth0,helpers,partials,data) {
    var helper;

  return "      <div class=\"price\">Цена: "
    + container.escapeExpression(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"price","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"49":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"if","hash":{},"fn":container.program(50, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"50":function(container,depth0,helpers,partials,data) {
    return "          <div class=\"ion-android-call m-b-05\"> "
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</div>\n";
},"52":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <span class=\"name\"><i class=\"ion-person-stalker\"></i><span class=\"m-l-05\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.userName : depth0)) != null ? stack1.name : stack1), depth0))
    + "</span></span>\n";
},"54":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.userName : depth0),{"name":"if","hash":{},"fn":container.program(55, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"55":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=container.lambda;

  return "      <span class=\"name\">\n        <span class=\"user-avatar\" style=\"background-image: url('img/avatar/"
    + alias1(((helper = (helper = helpers.userId || (depth0 != null ? depth0.userId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"userId","hash":{},"data":data}) : helper)))
    + ".png')\"></span>\n        <i class=\"ion-ios-person-outline\"></i>\n        <span class=\"m-l-05\">"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.userName : depth0)) != null ? stack1.lastName : stack1), depth0))
    + " "
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.userName : depth0)) != null ? stack1.name : stack1), depth0))
    + " "
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.userName : depth0)) != null ? stack1.middleName : stack1), depth0))
    + "</span>\n      </span>\n    ";
},"57":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.city : depth0)) != null ? stack1.title : stack1), depth0))
    + ",";
},"59":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.compare || (depth0 && depth0.compare) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.currentUserId : depth0),"===",(depth0 != null ? depth0.userId : depth0),{"name":"compare","hash":{},"fn":container.program(60, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"60":function(container,depth0,helpers,partials,data) {
    var helper;

  return "      <a class=\"icon ion-edit edit-ad\" href=\"#profile/ads/edit/"
    + container.escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_id","hash":{},"data":data}) : helper)))
    + "\"></a>\n      <a class=\"icon ion-trash-b delete-ad\"></a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"ad-item\">\n  <div class=\"section1\">\n    <div class=\"photo\" style=\"background-image: url('img/ads/"
    + alias4(((helper = (helper = helpers.photo || (depth0 != null ? depth0.photo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photo","hash":{},"data":data}) : helper)))
    + "')\">\n      <span class=\"label label-"
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"===","buy",{"name":"compare","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"===","buy",{"name":"compare","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "      </span>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.photo : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"content\">\n      <div class=\"ad-title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</div>\n      <div class=\"ad-description hidden-xs\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</div>\n    </div>\n  </div>\n  <div class=\"section2\">\n\n\n    <nav class=\"brd-nav-tabs\">\n      <ul>\n        <li>\n          <a class=\"nav-tab-item active\" data-state=\"main\">\n            Подробнее\n          </a>\n        </li>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isLoggedIn : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </ul>\n    </nav>\n\n    <!-- Tabs content -->\n    <div class=\"tab-region\">\n\n      <div class=\"category\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.category : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        <div class=\"message hidden\"></div>\n\n      </div>\n\n    </div>\n    <!-- end of Tabs content -->\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"if","hash":{},"fn":container.program(47, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div class=\"phones\">\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.contacts : depth0)) != null ? stack1.phones : stack1),{"name":"each","hash":{},"fn":container.program(49, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n  </div>\n  <div class=\"i-bottom\">\n    <span class=\"date\"><i class=\"ion-ios-calendar-outline\"></i><span class=\"m-l-05\">"
    + alias4((helpers.formatDate || (depth0 && depth0.formatDate) || alias2).call(alias1,(depth0 != null ? depth0.updated_at : depth0),"ll",{"name":"formatDate","hash":{},"data":data}))
    + "</span></span>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.company : depth0),{"name":"if","hash":{},"fn":container.program(52, data, 0),"inverse":container.program(54, data, 0),"data":data})) != null ? stack1 : "")
    + "    <span class=\"location\"><i class=\"ion-ios-location-outline\"></i><span class=\"m-l-05\">"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.city : depth0)) != null ? stack1.title : stack1),{"name":"if","hash":{},"fn":container.program(57, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + alias4(container.lambda(((stack1 = (depth0 != null ? depth0.country : depth0)) != null ? stack1.title : stack1), depth0))
    + "</span></span>\n  </div>\n  <a class=\"icon ion-ios-browsers-outline full-page-view\" href=\"#view/"
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\"></a>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isLoggedIn : depth0),{"name":"if","hash":{},"fn":container.program(59, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  <div class=\"icon ion-chevron-down arrow\"></div>\n</div>";
},"useData":true});
this["tpl"]["templates"]["company_short_item"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"company-short-item\" style=\"background-image: url('img/logo/"
    + alias4(((helper = (helper = helpers.logo || (depth0 != null ? depth0.logo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"logo","hash":{},"data":data}) : helper)))
    + ".png?"
    + alias4(((helper = (helper = helpers.getTimeStamp || (depth0 != null ? depth0.getTimeStamp : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"getTimeStamp","hash":{},"data":data}) : helper)))
    + "'), url('../img/logo-placeholder.jpg')\">\n  <div class=\"company-name\">"
    + alias4(((helper = (helper = helpers.companyName || (depth0 != null ? depth0.companyName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"companyName","hash":{},"data":data}) : helper)))
    + "</div>\n</div>";
},"useData":true});
this["tpl"]["templates"]["dashboard"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!--  left-navigation -->\n<div class=\"left-navigation\"></div>\n<!-- /end  left-navigation -->\n\n<div class=\"main-content dashboard\">\n  <div class=\"title\">\n    <span class=\"icon ion-person\"></span>\n    <span class=\"title-text\">Мой кабинет</span>\n  </div>\n  <div class=\"page\">\n\n    dashboard\n\n  </div>\n\n\n\n</div>\n";
},"useData":true});
this["tpl"]["templates"]["edit_ad"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"loader-wrapper\">\n      <div class=\"loader\"></div>\n    </div>\n";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.isError : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.program(6, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    "
    + container.escapeExpression(((helper = (helper = helpers.errorMessage || (depth0 != null ? depth0.errorMessage : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"errorMessage","hash":{},"data":data}) : helper)))
    + "\n";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <!--  Add new ad form -->\n    <form id=\"add-ad-form\">\n\n      <div class=\"col-xs-12 col-sm-6 m-t-1 p-l-0\">\n        <div class=\"form-group\">\n          <label class=\"radio-inline\"><input type=\"radio\" name=\"type\" value=\"buy\" "
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"===","buy",{"name":"compare","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">Куплю</label>\n          <label class=\"radio-inline\"><input type=\"radio\" name=\"type\" value=\"sell\" "
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"===","sell",{"name":"compare","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">Продам</label>\n          <div class=\"typeError\"></div>\n        </div>\n        <div class=\"form-divider\"></div>\n        <div class=\"form-group\">\n          <label class=\"radio-inline\"><input type=\"radio\" name=\"object\" value=\"product\" "
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias2).call(alias1,(depth0 != null ? depth0.object : depth0),"===","product",{"name":"compare","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">Товар</label>\n          <label class=\"radio-inline\"><input type=\"radio\" name=\"object\" value=\"service\" "
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias2).call(alias1,(depth0 != null ? depth0.object : depth0),"===","service",{"name":"compare","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">Услуга</label>\n          <div class=\"objectError\"></div>\n        </div>\n      </div>\n      <div class=\"col-xs-12 col-sm-6 m-b-1\">\n        <p class=\"lbl\">Фото</p>\n        <label class=\"btn ad-photo\" id=\"preview\"  style=\"background: url('img/"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.photo : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.program(11, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "') 0% 0% / cover\">\n          <input type=\"file\" name=\"photo\" id=\"photo\" class=\"hidden photo-input\" >\n        </label>\n        <div class=\"marker buy "
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"!==","buy",{"name":"compare","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">Куплю</div>\n        <div class=\"marker sell "
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"!==","sell",{"name":"compare","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">Продам</div>\n        <div class=\"image-error-message hidden\"></div>\n      </div>\n      <div class=\"form-group\">\n        <p class=\"lbl\">Раздел</p>\n        <select class=\"form-control\" id=\"category\" name=\"category\">\n          <option value=\"\">&mdash;</option>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.categories : depth0),{"name":"each","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </select>\n      </div>\n      <div class=\"filters m-b-2\"></div>\n      <div class=\"form-group\">\n        <label for=\"title\">Заголовок</label>\n        <input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\" placeholder=\"Заголовок объявления\" value=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"description\">Текст объявления</label>\n        <textarea class=\"form-control\" rows=\"3\" id=\"description\" name=\"description\" placeholder=\"Текст объявления\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</textarea>\n      </div>\n\n      <div class=\"form-group row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label for=\"price\">Цена</label>\n            <input type=\"text\" class=\"form-control\" id=\"price\" placeholder=\"0 BYR\" value=\""
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "\">\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <p class=\"lbl\">Продлить срок размещения на</p>\n          <div class=\"form-group\">\n            <select class=\"form-control\" id=\"expirationDate\">\n              <option value=\"5\">5 дней</option>\n              <option value=\"10\">10 дней</option>\n              <option value=\"30\">30 дней</option>\n            </select>\n          </div>\n          <span class=\"exp-date\">Истекает: "
    + alias4((helpers.formatDate || (depth0 && depth0.formatDate) || alias2).call(alias1,(depth0 != null ? depth0.expirationDate : depth0),"LLLL",{"name":"formatDate","hash":{},"data":data}))
    + "</span>\n        </div>\n      </div>\n\n      <p class=\"lbl\">Местоположение</p>\n      <div class=\"country-picker\"></div>\n\n      <div class=\"form-group row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label for=\"contacts\">Контактные данные</label>\n            <input type=\"text\" class=\"form-control\" id=\"contacts\" placeholder=\"Введите название компании\" disabled=\"disabled\">\n            <span class=\"add-company-search\">Нет вашей компании? <a>Создать</a></span>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"radio\">\n              <label><input type=\"radio\" id=\"profileRadio\" name=\"getContacts\" value=\"profile\" "
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.contacts : depth0)) != null ? stack1.takeFrom : stack1),"===","profile",{"name":"compare","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">Использовать контактные телефоны профиля</label>\n            </div>\n            <div class=\"radio\">\n              <label><input type=\"radio\" id=\"companyRadio\" name=\"getContacts\" value=\"company\" "
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.contacts : depth0)) != null ? stack1.takeFrom : stack1),"===","company",{"name":"compare","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">Использовать контактные телефоны компании</label>\n            </div>\n            <div class=\"radio\">\n              <label><input type=\"radio\" id=\"otherRadio\" name=\"getContacts\" value=\"other\" "
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.contacts : depth0)) != null ? stack1.takeFrom : stack1),"===","other",{"name":"compare","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">Ввести другой контактный телефон</label>\n            </div>\n            <div class=\"form-group otherPhoneWrapper\">\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\"><i class=\"ion-android-call\"></i></span>\n                <input type=\"text\" class=\"form-control\" id=\"otherPhone\" name=\"otherPhone\" value=\""
    + alias4(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.contacts : depth0)) != null ? stack1.phones : stack1)) != null ? stack1["0"] : stack1), depth0))
    + "\">\n              </div>\n              <div class=\"otherPhoneError\"></div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n\n        </div>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-default\">Сохранить</button>\n      <button type=\"button\" class=\"btn btn-default back\">Отмена</button>\n    </form>\n    <!-- /end form-->\n\n  ";
},"7":function(container,depth0,helpers,partials,data) {
    return "checked";
},"9":function(container,depth0,helpers,partials,data) {
    var helper;

  return "ads/"
    + container.escapeExpression(((helper = (helper = helpers.photo || (depth0 != null ? depth0.photo : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"photo","hash":{},"data":data}) : helper)));
},"11":function(container,depth0,helpers,partials,data) {
    return "image_placeholder.png";
},"13":function(container,depth0,helpers,partials,data) {
    return "hidden";
},"15":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias2).call(alias1,((stack1 = (depths[1] != null ? depths[1].category : depths[1])) != null ? stack1.id : stack1),"===",(depth0 != null ? depth0.id : depth0),{"name":"compare","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "selected";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<!--  left-navigation -->\n<div class=\"left-navigation\"></div>\n<!-- /end  left-navigation -->\n\n<div class=\"main-content new-ad edit-ad\">\n  <div class=\"title\">\n    <span class=\"icon ion-clipboard\"></span>\n    <span class=\"title-text\">Редактировать объявление</span>\n  </div>\n<div class=\"page\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.loading : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(3, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "</div>\n</div>";
},"useData":true,"useDepths":true});
this["tpl"]["templates"]["faq"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"container faq\">\n\n  <h2>FAQ - часто задаваемые вопросы</h2>\n\n  <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\n        <h4 class=\"panel-title\">\n          <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n            1. Что это за сервис и для кого он?\n          </a>\n        </h4>\n      </div>\n      <div id=\"collapseOne\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n        <div class=\"panel-body\">\n          Lignum – это сервис для людей работающих в дереводобывающей и деревообрабатывающей индустрии.<br>\n          А также для всех желающих продать либо приобрести древесную продукцию.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\n        <h4 class=\"panel-title\">\n          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n            2. Для чего нужно проходить регистрацию?\n          </a>\n        </h4>\n      </div>\n      <div id=\"collapseTwo\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n        <div class=\"panel-body\">\n          Зарегистрированным пользователям предоставляется больше возможностей:\n          <ul>\n            <li>доступ в личный кабинет;</li>\n            <li>возможность добавлять свои объявления и компании;</li>\n            <li>сохранять понравившиеся объявления и компании в раздел «Избранное»;</li>\n            <li>получать и отправлять сообщения;</li>\n            <li>и некоторые другие.</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\" role=\"tab\" id=\"headingThree\">\n        <h4 class=\"panel-title\">\n          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n            3. Могу ли я добавить объявление, не регистрируясь?\n          </a>\n        </h4>\n      </div>\n      <div id=\"collapseThree\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\">\n        <div class=\"panel-body\">\n          Нет, чтобы добавить свое объявление, необходимо пройти регистрацию.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\" role=\"tab\" id=\"heading4\">\n        <h4 class=\"panel-title\">\n          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse4\" aria-expanded=\"false\" aria-controls=\"collapse4\">\n            4. Видны ли мне все объявления, если я не зарегистрирован(а)?\n          </a>\n        </h4>\n      </div>\n      <div id=\"collapse4\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading4\">\n        <div class=\"panel-body\">\n          Да. Все объявления доступны для просмотра как зарегистрированным, так и незарегистрированным пользователям.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\" role=\"tab\" id=\"heading5\">\n        <h4 class=\"panel-title\">\n          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse5\" aria-expanded=\"false\" aria-controls=\"collapse5\">\n            5. Я прошел регистрацию, но мне на почту не пришло письмо с ссылкой на активацию.\n          </a>\n        </h4>\n      </div>\n      <div id=\"collapse5\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading5\">\n        <div class=\"panel-body\">\n          В первую очередь проверьте папку «Спам». Если письмо действительно не пришло, напишите о своей проблеме в техподдержку.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\" role=\"tab\" id=\"heading6\">\n        <h4 class=\"panel-title\">\n          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse6\" aria-expanded=\"false\" aria-controls=\"collapse6\">\n            6.	Как мне зайти в личный кабинет?\n          </a>\n        </h4>\n      </div>\n      <div id=\"collapse6\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading6\">\n        <div class=\"panel-body\">\n          Если Вы уже зарегистрированы, то нажмите кнопку «Войти» в правом верхнем углу на главной странице.\n          Если Вы новый пользователь, пройдите регистрацию, нажав на кнопку «Регистрация» в правом верхнем углу на главной странице.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\" role=\"tab\" id=\"heading7\">\n        <h4 class=\"panel-title\">\n          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse7\" aria-expanded=\"false\" aria-controls=\"collapse7\">\n            7.	Что делать, если забыл пароль?\n          </a>\n        </h4>\n      </div>\n      <div id=\"collapse7\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading7\">\n        <div class=\"panel-body\">\n          Если Вы забыли пароль, нажмите на ссылку <a>Забыли пароль?</a>, расположенную в окне входа под полем пароля.\n          Вам на почту будет отправлено письмо с Вашим паролем.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"panel panel-default\">\n    <div class=\"panel-heading\" role=\"tab\" id=\"heading8\">\n      <h4 class=\"panel-title\">\n        <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse8\" aria-expanded=\"false\" aria-controls=\"collapse8\">\n          8. Что я могу делать в личном кабинете?\n        </a>\n      </h4>\n    </div>\n    <div id=\"collapse8\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading8\">\n      <div class=\"panel-body\">\n        В Личном кабинете можно:\n        <ul>\n          <li>просматривать, редактировать свои объявления и создавать новые (Личный кабинет > Объявления);</li>\n          <li>создавать, просматривать и редактировать профиль компании (Личный кабинет > Компании);</li>\n          <li>просматривать сообщения, полученные от других пользователей (Личный кабинет > Сообщения);</li>\n          <li>просматривать объявления и компании других пользователей, которые Вы отметили и сохранили как понравившиеся (Личный кабинет > Избранное)</li>\n          <li>изменять настройки профиля (Личный кабинет > Настройки профиля) и аккаунта (Личный кабинет > Настройки аккаунта)</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\" role=\"tab\" id=\"heading9\">\n        <h4 class=\"panel-title\">\n          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse9\" aria-expanded=\"false\" aria-controls=\"collapse9\">\n            9. Для чего нужен раздел «Избранное»?\n          </a>\n        </h4>\n      </div>\n      <div id=\"collapse9\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading9\">\n        <div class=\"panel-body\">\n          В разделе «Избранное» хранятся отмеченные Вами объявления и компании, которые Вы сохранили для дальнейшего просмотра и использования\n        </div>\n      </div>\n    </div>\n\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\" role=\"tab\" id=\"heading10\">\n        <h4 class=\"panel-title\">\n          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse10\" aria-expanded=\"false\" aria-controls=\"collapse10\">\n            10.	Какие объявления попадают в «Архив»?\n          </a>\n        </h4>\n      </div>\n      <div id=\"collapse10\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading10\">\n        <div class=\"panel-body\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\" role=\"tab\" id=\"heading11\">\n        <h4 class=\"panel-title\">\n          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse11\" aria-expanded=\"false\" aria-controls=\"collapse11\">\n            11.	Как мне добавить объявление?\n          </a>\n        </h4>\n      </div>\n      <div id=\"collapse11\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading11\">\n        <div class=\"panel-body\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\" role=\"tab\" id=\"heading12\">\n        <h4 class=\"panel-title\">\n          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse12\" aria-expanded=\"false\" aria-controls=\"collapse12\">\n            12.	Как мне добавить компанию?\n          </a>\n        </h4>\n      </div>\n      <div id=\"collapse12\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading12\">\n        <div class=\"panel-body\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\" role=\"tab\" id=\"heading13\">\n        <h4 class=\"panel-title\">\n          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse13\" aria-expanded=\"false\" aria-controls=\"collapse13\">\n            13.	При добавлении объявления обязательно ли заполнять все поля?\n          </a>\n        </h4>\n      </div>\n      <div id=\"collapse13\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading13\">\n        <div class=\"panel-body\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\" role=\"tab\" id=\"heading14\">\n        <h4 class=\"panel-title\">\n          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse14\" aria-expanded=\"false\" aria-controls=\"collapse14\">\n            14.	Как мне продлить срок размещения объявления?\n          </a>\n        </h4>\n      </div>\n      <div id=\"collapse14\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading14\">\n        <div class=\"panel-body\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\" role=\"tab\" id=\"heading15\">\n        <h4 class=\"panel-title\">\n          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse15\" aria-expanded=\"false\" aria-controls=\"collapse15\">\n            15.	Что делать если я нашел ошибку?\n          </a>\n        </h4>\n      </div>\n      <div id=\"collapse15\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading15\">\n        <div class=\"panel-body\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n</div>\n";
},"useData":true});
this["tpl"]["templates"]["filters"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\r\n"
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.level : depth0),"===","parent",{"name":"compare","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(12, data, 0),"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.separator : depth0),{"name":"if","hash":{},"fn":container.program(34, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\r\n    <p class=\"lbl\" data-label=\""
    + alias4(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</p>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <div class=\"checkbox parent\">\r\n        <label><input type=\"checkbox\" id=\""
    + alias4(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</label>\r\n      </div>\r\n      <div class=\"child-filters "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "checked";
},"6":function(container,depth0,helpers,partials,data) {
    return "";
},"8":function(container,depth0,helpers,partials,data) {
    return "hidden";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <div class=\"checkbox\">\r\n            <label><input type=\"checkbox\" id=\""
    + alias4(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "</label>\r\n          </div>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subtitle : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n    <p class=\"lbl\" data-label=\""
    + alias4(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</p>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <div class=\"subtitle hidden\">\r\n      <h4>"
    + container.escapeExpression(((helper = (helper = helpers.subtitle || (depth0 != null ? depth0.subtitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"subtitle","hash":{},"data":data}) : helper)))
    + "</h4>\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.compare || (depth0 && depth0.compare) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.type : depth0),"===","input",{"name":"compare","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(23, data, 0),"data":data})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.label : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        <div class=\"from-to-inline\">\r\n          <div class=\"input-filter m-r-05\">\r\n            <label for=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "-from\">от</label>\r\n            <input type=\"number\" name=\"inputFilter\" class=\"form-control\" id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "-from\" min=\"0\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.from : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n          </div>\r\n          <div class=\"input-filter\">\r\n            <label for=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "-to\">до</label>\r\n            <input type=\"number\" name=\"inputFilter\" class=\"form-control\" id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "-to\" min=\"0\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.to : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n          </div>\r\n        </div>\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    var helper;

  return "          <div class=\"input-label\">"
    + container.escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"label","hash":{},"data":data}) : helper)))
    + "</div>\r\n";
},"19":function(container,depth0,helpers,partials,data) {
    var helper;

  return "value=\""
    + container.escapeExpression(((helper = (helper = helpers.from || (depth0 != null ? depth0.from : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"from","hash":{},"data":data}) : helper)));
},"21":function(container,depth0,helpers,partials,data) {
    var helper;

  return "value=\""
    + container.escapeExpression(((helper = (helper = helpers.to || (depth0 != null ? depth0.to : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"to","hash":{},"data":data}) : helper)));
},"23":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.compare || (depth0 && depth0.compare) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.type : depth0),"===","input-sizes",{"name":"compare","hash":{},"fn":container.program(24, data, 0),"inverse":container.program(32, data, 0),"data":data})) != null ? stack1 : "");
},"24":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.label : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.values : depth0),{"name":"each","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        <button type=\"button\" class=\"btn ion-plus add-size\"></button>\r\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <div class=\"from-to-inline m-b-1\">\r\n            <div class=\"input-filter\">\r\n              <input type=\"number\" name=\"inputFilter\" class=\"form-control\" id=\"t\" min=\"0\" data-id=\""
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.t : depth0),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\r\n            </div>\r\n            <div class=\"input-filter\">\r\n              <label>&#9747;</label>\r\n              <input type=\"number\" name=\"inputFilter\" class=\"form-control\" id=\"s\" min=\"0\" data-id=\""
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.s : depth0),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\r\n            </div>\r\n            <div class=\"input-filter\">\r\n              <label>&#9747;</label>\r\n              <input type=\"number\" name=\"inputFilter\" class=\"form-control\" id=\"d\" min=\"0\" data-id=\""
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.d : depth0),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\r\n            </div>\r\n            <button type=\"button\" class=\"btn ion-minus remove-size\" data-id=\""
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\"></button>\r\n          </div>\r\n";
},"26":function(container,depth0,helpers,partials,data) {
    var helper;

  return "value=\""
    + container.escapeExpression(((helper = (helper = helpers.t || (depth0 != null ? depth0.t : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"t","hash":{},"data":data}) : helper)))
    + "\"";
},"28":function(container,depth0,helpers,partials,data) {
    var helper;

  return "value=\""
    + container.escapeExpression(((helper = (helper = helpers.s || (depth0 != null ? depth0.s : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"s","hash":{},"data":data}) : helper)))
    + "\"";
},"30":function(container,depth0,helpers,partials,data) {
    var helper;

  return "value=\""
    + container.escapeExpression(((helper = (helper = helpers.d || (depth0 != null ? depth0.d : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"d","hash":{},"data":data}) : helper)))
    + "\"";
},"32":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\"checkbox\">\r\n          <label><input type=\"checkbox\" id=\""
    + alias4(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "</label>\r\n        </div>\r\n      ";
},"34":function(container,depth0,helpers,partials,data) {
    return "    </div>\r\n    <div class=\"col-md-6\">\r\n";
},"36":function(container,depth0,helpers,partials,data) {
    return "    </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.category : depth0)) != null ? stack1.filters : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subtitle : depth0),{"name":"if","hash":{},"fn":container.program(36, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\r\n</div>";
},"useData":true});
this["tpl"]["templates"]["filter_home"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</option>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"actions\">\r\n  <button type=\"button\" class=\"btn btn-default add-new\">Добавить объявление <span class=\"ion-ios-plus-outline\"></span></button>\r\n</div>\r\n<div class=\"filters-wrapper hidden-xs hidden-sm\">\r\n  <a class=\"close-btn visible-xs visible-sm\"><span class=\"ion-close\"></span></a>\r\n  <div class=\"checkbox\">\r\n    <label><input type=\"checkbox\" name=\"type\" value=\"buy\">Куплю</label>\r\n  </div>\r\n  <div class=\"checkbox\">\r\n    <label><input type=\"checkbox\" name=\"type\" value=\"sell\">Продам</label>\r\n  </div>\r\n  <div class=\"line-breaker\"></div>\r\n  <div class=\"checkbox\">\r\n    <label><input type=\"checkbox\" name=\"object\" value=\"product\">Товар</label>\r\n  </div>\r\n  <div class=\"checkbox\">\r\n    <label><input type=\"checkbox\" name=\"object\" value=\"service\">Услуга</label>\r\n  </div>\r\n  <div class=\"line-breaker\"></div>\r\n  <div class=\"form-group\">\r\n    <label for=\"category\">Раздел</label>\r\n    <select class=\"form-control\" id=\"category\" name=\"category\">\r\n      <option value=\"\">&mdash;</option>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.categories : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\r\n  </div>\r\n\r\n  <div class=\"filters\"></div>\r\n\r\n  <div class=\"line-breaker\"></div>\r\n\r\n  <div class=\"country-picker-label\">Местоположение</div>\r\n  <div class=\"country-picker\"></div>\r\n\r\n  <div class=\"line-breaker\"></div>\r\n  <div class=\"form-group\">\r\n    <button type=\"button\" class=\"btn btn-default drop-filter\">Сбросить фильтр <span class=\"ion-loop\"></span></button>\r\n  </div>\r\n</div>\r\n<div class=\"show-mobile-filters visible-xs visible-sm\">\r\n  <span class=\"ion-arrow-down-b\"></span>\r\n</div>";
},"useData":true});
this["tpl"]["templates"]["forbidden"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"forbidden\">\r\n  <div class=\"ion-ios-locked icon\"></div>\r\n  <h2>Вы не авторизованы.</h2>\r\n  <button type=\"button\" class=\"btn btn-default login\">Вход</button>\r\n  <button type=\"button\" class=\"btn btn-default register\">Регистрация</button>\r\n</div>\r\n";
},"useData":true});
this["tpl"]["templates"]["home"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!-- Filter -->\r\n<div class=\"col-md-3 col-lg-2 filter-home\"></div>\r\n<!-- /end filter -->\r\n\r\n<div class=\"col-md-9 col-lg-7 ads\">\r\n  <div class=\"content-filter\">\r\n    <div class=\"btn-group mobile-filter-btn visible-xs visible-sm\" role=\"group\" aria-label=\"First group\">\r\n      <button type=\"button\" class=\"btn btn-default settings-btn\"><span class=\"ion-android-options\"></span></button>\r\n    </div>\r\n    <div class=\"search\">\r\n      <div class=\"input-group\">\r\n        <input type=\"text\" class=\"form-control search-input\" placeholder=\"Искать\">\r\n        <span class=\"input-group-btn\">\r\n              <button class=\"btn btn-default\" type=\"button\"><span class=\"ion-ios-search-strong\"></span></button>\r\n            </span>\r\n      </div><!-- /input-group -->\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"home-actions\"></div>\r\n\r\n  <!-- home-content -->\r\n  <div class=\"home-content\"></div>\r\n  <!-- /end home-content -->\r\n\r\n  <div class=\"row m-t-2\">\r\n    <div class=\"col-xs-11\">\r\n      <button class=\"btn btn-default center-block hidden\" type=\"button\">Показать еще 20</button>\r\n    </div>\r\n    <div class=\"col-xs-1\">\r\n      <button class=\"btn btn-default pull-right up\" type=\"button\"><span class=\"ion-android-arrow-up\"></span></button>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<!-- Companies  -->\r\n<div class=\"col-md-12 col-lg-3 companies-home\"></div>\r\n<!-- /end Companies -->";
},"useData":true});
this["tpl"]["templates"]["home_content"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!-- Ads list  -->\r\n<div class=\"ads-list\"></div>\r\n<!-- /end ads-list -->";
},"useData":true});
this["tpl"]["templates"]["main"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!-- Header -->\r\n<header class=\"container-fluid\"></header>\r\n<!-- /end header -->\r\n\r\n<section class=\"container-fluid section home-banner\"></section>\r\n\r\n<!-- Main content -->\r\n<section class=\"container-fluid section home\">\r\n  <div class=\"row home-wrapper content\">\r\n  </div>\r\n</section>\r\n<!-- /end main content -->\r\n\r\n<!-- Footer -->\r\n<footer class=\"footer\"></footer>\r\n<!-- /end Footer  -->\r\n\r\n<div class=\"modal-section\"></div>";
},"useData":true});
this["tpl"]["templates"]["message"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <div class=\"ad-item\">\r\n    <div class=\"ion-ios-plus-outline placeholder add-button\"></div>\r\n    <div class=\"section1\">\r\n      <div class=\"photo\"></div>\r\n      <div class=\"content\">\r\n        <div class=\"ad-title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</div>\r\n        <div class=\"ad-description\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"i-bottom\">\r\n      <span class=\"date\"><i class=\"ion-ios-calendar-outline\"></i><span  class=\"blur-text\">24 окт. 2018</span></span>\r\n      <span class=\"name\"><i class=\"ion-ios-person-outline\"></i><span class=\"blur-text\">Your Name</span></span>\r\n      <span class=\"location\"><i class=\"ion-ios-location-outline\"></i><span class=\"blur-text\">Belarus, Minsk</span></span>\r\n    </div>\r\n    <div class=\"icon ion-ios-browsers-outline tab\"></div>\r\n    <div class=\"icon ion-ios-star-outline star\"></div>\r\n  </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "  "
    + container.escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"message","hash":{},"data":data}) : helper)))
    + "\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.placeholder : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});
this["tpl"]["templates"]["settings"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!--  left-navigation -->\r\n<div class=\"left-navigation\"></div>\r\n<!-- /end  left-navigation -->\r\n<div class=\"profile settings\">\r\n  <div class=\"title\">\r\n    <span class=\"icon ion-settings\"></span>\r\n    <span class=\"title-text\">Настройки</span>\r\n  </div>\r\n  <div class=\"tabs\">\r\n    <div class=\"tab profile-settings-link\">Настройки профиля</div>\r\n    <div class=\"tab account-settings-link\">Настройки аккаунта</div>\r\n  </div>\r\n  <!--  page (inner sections comes here) -->\r\n  <div class=\"page\"></div>\r\n  <!-- /end  page -->\r\n</div>\r\n";
},"useData":true});
this["tpl"]["templates"]["settings_account_section"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<form>\r\n  <div class=\"form-group short\">\r\n    <label for=\"email\">Email</label>\r\n    <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\""
    + container.escapeExpression(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"email","hash":{},"data":data}) : helper)))
    + "\" disabled>\r\n  </div>\r\n  <div class=\"form-group short\">\r\n    <label for=\"password\">Пароль</label>\r\n    <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"********\" disabled>\r\n  </div>\r\n\r\n  <button type=\"button\" class=\"btn btn-default save disabled\">Сохранить</button>\r\n</form>";
},"useData":true});
this["tpl"]["templates"]["settings_profile_section"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "value=\""
    + container.escapeExpression(((helper = (helper = helpers.lastName || (depth0 != null ? depth0.lastName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"lastName","hash":{},"data":data}) : helper)))
    + "\"";
},"3":function(container,depth0,helpers,partials,data) {
    return " placeholder=\"Фамилия\"";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "value=\""
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "\"";
},"7":function(container,depth0,helpers,partials,data) {
    return " placeholder=\"Имя\"";
},"9":function(container,depth0,helpers,partials,data) {
    var helper;

  return "value=\""
    + container.escapeExpression(((helper = (helper = helpers.middleName || (depth0 != null ? depth0.middleName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"middleName","hash":{},"data":data}) : helper)))
    + "\"";
},"11":function(container,depth0,helpers,partials,data) {
    return " placeholder=\"Отчество\"";
},"13":function(container,depth0,helpers,partials,data) {
    var helper;

  return "value=\""
    + container.escapeExpression(((helper = (helper = helpers.work || (depth0 != null ? depth0.work : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"work","hash":{},"data":data}) : helper)))
    + "\"";
},"15":function(container,depth0,helpers,partials,data) {
    var helper;

  return "value=\""
    + container.escapeExpression(((helper = (helper = helpers.position || (depth0 != null ? depth0.position : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"position","hash":{},"data":data}) : helper)))
    + "\"";
},"17":function(container,depth0,helpers,partials,data) {
    var helper;

  return "value=\""
    + container.escapeExpression(((helper = (helper = helpers.phone1 || (depth0 != null ? depth0.phone1 : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"phone1","hash":{},"data":data}) : helper)))
    + "\"";
},"19":function(container,depth0,helpers,partials,data) {
    return " placeholder=\"+375 00 0000000\"";
},"21":function(container,depth0,helpers,partials,data) {
    var helper;

  return "value=\""
    + container.escapeExpression(((helper = (helper = helpers.phone2 || (depth0 != null ? depth0.phone2 : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"phone2","hash":{},"data":data}) : helper)))
    + "\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"alert\" style=\"display: none\">\r\n</div>\r\n<form>\r\n  <div class=\"form-group row\">\r\n    <div class=\"col-md-5\">\r\n      <div class=\"avatar\" style=\"background-image: url('img/avatar/"
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + ".png'), url('../img/profile_placeholder.png')\"></div>\r\n      <div class=\"modal-avatar-section\"></div>\r\n    </div>\r\n    <div class=\"col-md-7\">\r\n      <div class=\"form-group \">\r\n        <label for=\"lastName\">Фамилия</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"lastName\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.lastName : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ">\r\n      </div>\r\n      <div class=\"form-group \">\r\n        <label for=\"name\">Имя</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"name\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.name : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + ">\r\n      </div>\r\n      <div class=\"form-group \">\r\n        <label for=\"middleName\">Отчество</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"middleName\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.middleName : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + ">\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"work\">Место работы</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"work\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.work : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"position\">Должность</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"position\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.position : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\r\n  </div>\r\n\r\n  <p class=\"lbl\">Ваше местоположение</p>\r\n  <div class=\"countries-picker\"></div>\r\n\r\n  <p class=\"lead\">Контактные телефоны</p>\r\n  <p class=\"lbl2\">Будут отображаться в ваших объявлениях</p>\r\n\r\n  <div class=\"form-group short\">\r\n    <div class=\"input-group\">\r\n      <span class=\"input-group-addon\"><i class=\"ion-android-call\"></i></span>\r\n      <input type=\"text\" class=\"form-control\" id=\"phone1\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.phone1 : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.program(19, data, 0),"data":data})) != null ? stack1 : "")
    + ">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group short\">\r\n    <div class=\"input-group\">\r\n      <span class=\"input-group-addon\"><i class=\"ion-android-call\"></i></span>\r\n      <input type=\"text\" class=\"form-control\" id=\"phone2\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.phone2 : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.program(19, data, 0),"data":data})) != null ? stack1 : "")
    + ">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row m-t-2\">\r\n    <div class=\"col-sm-3\">\r\n      <button type=\"submit\" class=\"btn btn-default saveProfile\">Сохранить</button>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p class=\"updated\">Обновлено - "
    + alias3((helpers.formatDate || (depth0 && depth0.formatDate) || alias2).call(alias1,(depth0 != null ? depth0.updated_at : depth0),"LLLL",{"name":"formatDate","hash":{},"data":data}))
    + "</p>\r\n    </div>\r\n  </div>\r\n\r\n</form>";
},"useData":true});
this["tpl"]["templates"]["calc"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "  <table class=\"table table-hover table-responsive\">\r\n    <thead>\r\n      <tr>\r\n        <th>ТxШxД (мм)</th>\r\n        <th>Кол-во (шт.)</th>\r\n        <th>Погонная длина (м)</th>\r\n        <th>Объем (м<sup><small>3</small></sup>)</th>\r\n        <th class=\"remove-col\"></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.table : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      <tr class=\"total\">\r\n        <td>Итого:</td>\r\n        <td>"
    + alias3((helpers.summColumn || (depth0 && depth0.summColumn) || alias2).call(alias1,(depth0 != null ? depth0.table : depth0),"count",{"name":"summColumn","hash":{},"data":data}))
    + "</td>\r\n        <td>"
    + alias3((helpers.summColumn || (depth0 && depth0.summColumn) || alias2).call(alias1,(depth0 != null ? depth0.table : depth0),"resultP",{"name":"summColumn","hash":{},"data":data}))
    + "</td>\r\n        <td>"
    + alias3((helpers.cutFloat || (depth0 && depth0.cutFloat) || alias2).call(alias1,(helpers.summColumn || (depth0 && depth0.summColumn) || alias2).call(alias1,(depth0 != null ? depth0.table : depth0),"resultV",{"name":"summColumn","hash":{},"data":data}),6,{"name":"cutFloat","hash":{},"data":data}))
    + "</td>\r\n        <td class=\"remove-col\"></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <div class=\"actions\">\r\n    <!--<button type=\"button\" class=\"btn btn-success\"><span class=\"ion-help\"></span> Узнать цены</button>-->\r\n    <!--<button type=\"button\" class=\"btn btn-success\">Сохранить</button>-->\r\n    <!--<button type=\"button\" class=\"btn btn-info\"><span class=\"ion-paper-airplane\"></span> Отправить на e-mail</button>-->\r\n    <button type=\"button\" class=\"btn btn-success print\"><span class=\"ion-printer\"></span> Печать</button>\r\n    <button type=\"button\" class=\"btn btn-danger pull-right clear\">Удалить таблицу</button>\r\n  </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <tr>\r\n        <td>"
    + alias4(((helper = (helper = helpers.tolshina || (depth0 != null ? depth0.tolshina : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tolshina","hash":{},"data":data}) : helper)))
    + "<b class=\"iks\">☓</b>"
    + alias4(((helper = (helper = helpers.shirina || (depth0 != null ? depth0.shirina : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shirina","hash":{},"data":data}) : helper)))
    + "<b class=\"iks\">☓</b>"
    + alias4(((helper = (helper = helpers.dlina || (depth0 != null ? depth0.dlina : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dlina","hash":{},"data":data}) : helper)))
    + "</td>\r\n        <td>"
    + alias4(((helper = (helper = helpers.count || (depth0 != null ? depth0.count : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"count","hash":{},"data":data}) : helper)))
    + "</td>\r\n        <td>"
    + alias4(((helper = (helper = helpers.resultP || (depth0 != null ? depth0.resultP : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"resultP","hash":{},"data":data}) : helper)))
    + "</td>\r\n        <td>"
    + alias4((helpers.cutFloat || (depth0 && depth0.cutFloat) || alias2).call(alias1,(depth0 != null ? depth0.resultV : depth0),6,{"name":"cutFloat","hash":{},"data":data}))
    + "</td>\r\n        <td class=\"remove-col\">\r\n          <a class=\"remove-row\" data-row=\""
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\"><span class=\"ion-ios-close-outline\"></span></a>\r\n        </td>\r\n      </tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"container calc\">\r\n  <h2><span class=\"icon ion-ios-calculator\"></span> Калькулятор</h2>\r\n\r\n  <div class=\"tri-down\">\r\n    <form>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-6 col-md-4\">\r\n          <div class=\"form-group\">\r\n            <label class=\"sr-only\" for=\"tolshina\">Толщина</label>\r\n            <div class=\"input-group size-field\">\r\n              <div class=\"input-group-addon\">Т</div>\r\n              <input type=\"number\" min=\"0\" class=\"form-control\" id=\"tolshina\" name=\"tolshina\" placeholder=\"Толщина\" value=\""
    + alias4(((helper = (helper = helpers.tolshina || (depth0 != null ? depth0.tolshina : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tolshina","hash":{},"data":data}) : helper)))
    + "\">\r\n              <div class=\"input-group-addon\">мм</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"sr-only\" for=\"shirina\">Ширина</label>\r\n            <div class=\"input-group size-field\">\r\n              <div class=\"input-group-addon\">Ш</div>\r\n              <input type=\"number\" min=\"0\" class=\"form-control\" id=\"shirina\" name=\"shirina\" placeholder=\"Ширина\" value=\""
    + alias4(((helper = (helper = helpers.shirina || (depth0 != null ? depth0.shirina : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shirina","hash":{},"data":data}) : helper)))
    + "\">\r\n              <div class=\"input-group-addon\">мм</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group size-field\">\r\n            <label class=\"sr-only\" for=\"dlina\">Длина</label>\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-addon\">Д</div>\r\n              <input type=\"number\" min=\"0\" class=\"form-control\" id=\"dlina\" name=\"dlina\" placeholder=\"Длина\" value=\""
    + alias4(((helper = (helper = helpers.dlina || (depth0 != null ? depth0.dlina : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dlina","hash":{},"data":data}) : helper)))
    + "\">\r\n              <div class=\"input-group-addon\">мм</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xs-12 col-sm-6 col-md-8\">\r\n          <!-- "
    + alias4(((helper = (helper = helpers.volume || (depth0 != null ? depth0.volume : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"volume","hash":{},"data":data}) : helper)))
    + " -->\r\n          <div class=\"result-one\"><span>V</span> = <span id=\"volume\">"
    + alias4((helpers.cutFloat || (depth0 && depth0.cutFloat) || alias2).call(alias1,(depth0 != null ? depth0.volume : depth0),6,{"name":"cutFloat","hash":{},"data":data}))
    + "</span> м<sup><small>3</small></sup></div>\r\n          <!-- "
    + alias4(((helper = (helper = helpers.square || (depth0 != null ? depth0.square : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"square","hash":{},"data":data}) : helper)))
    + " -->\r\n          <div class=\"result-one\"><span>S</span> = <span id=\"square\">"
    + alias4((helpers.cutFloat || (depth0 && depth0.cutFloat) || alias2).call(alias1,(depth0 != null ? depth0.square : depth0),3,{"name":"cutFloat","hash":{},"data":data}))
    + "</span> м<sup><small>2</small></sup></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"count-block\">\r\n        <div class=\"form-group count-field\">\r\n          <label class=\"sr-only\" for=\"count\">Количество</label>\r\n          <div class=\"input-group\">\r\n            <input type=\"number\" min=\"0\" class=\"form-control\" id=\"count\" name=\"count\" placeholder=\"Количество\" value=\""
    + alias4(((helper = (helper = helpers.count || (depth0 != null ? depth0.count : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"count","hash":{},"data":data}) : helper)))
    + "\">\r\n            <div class=\"input-group-addon\">шт</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- "
    + alias4(((helper = (helper = helpers.resultV || (depth0 != null ? depth0.resultV : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"resultV","hash":{},"data":data}) : helper)))
    + " -->\r\n      <div class=\"result\">Общий объем = <span class=\"result-v\">"
    + alias4((helpers.cutFloat || (depth0 && depth0.cutFloat) || alias2).call(alias1,(depth0 != null ? depth0.resultV : depth0),6,{"name":"cutFloat","hash":{},"data":data}))
    + "</span> м<sup><small>3</small></sup></div>\r\n      <!-- "
    + alias4(((helper = (helper = helpers.resultP || (depth0 != null ? depth0.resultP : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"resultP","hash":{},"data":data}) : helper)))
    + " -->\r\n      <div class=\"result\">Погонная длина = <span class=\"result-p\">"
    + alias4(((helper = (helper = helpers.resultP || (depth0 != null ? depth0.resultP : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"resultP","hash":{},"data":data}) : helper)))
    + "</span> м</div>\r\n    </form>\r\n  </div>\r\n  <!-- Add to table button-->\r\n  <button type=\"button\" class=\"btn add-to-table\" disabled><span class=\"ion-clipboard\"></span> Вставить в таблицу</button>\r\n\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.table : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n";
},"useData":true});
this["tpl"]["templates"]["add_company"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</option>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<!--  left-navigation -->\r\n<div class=\"left-navigation\"></div>\r\n<!-- /end  left-navigation -->\r\n\r\n<div class=\"main-content new-company\">\r\n  <div class=\"title\">\r\n    <span class=\"icon ion-person-stalker\"></span>\r\n    <span class=\"title-text\">Новая компания</span>\r\n  </div>\r\n  <div class=\"page\">\r\n    <!--  Add new company form -->\r\n    <form id=\"add-company-form\">\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"companyName\">Название</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"companyName\" name=\"companyName\" placeholder=\"Название компании\">\r\n      </div>\r\n\r\n      <div class=\"form-group company-logo\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"description\">Деятельность компании</label>\r\n        <textarea class=\"form-control\" rows=\"5\" id=\"description\" name=\"description\"></textarea>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <p class=\"lbl\">Раздел</p>\r\n        <select class=\"form-control\" id=\"category\" name=\"category\">\r\n          <option value=\"\">&mdash;</option>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.categories : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </select>\r\n      </div>\r\n\r\n      <p class=\"lbl\">Местоположение</p>\r\n      <div class=\"country-picker\"></div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"address\">Адрес</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"address\" name=\"address\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"phones\">Телефоны</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"phones\" name=\"phones\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"website\">Веб-сайт</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"website\" name=\"website\">\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"form-group\">\r\n            <label for=\"year\">Год образования</label>\r\n            <input type=\"number\" class=\"form-control\" id=\"year\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <label for=\"count\">Численность, чел</label>\r\n          <input type=\"number\" class=\"form-control\" id=\"count\">\r\n        </div>\r\n      </div>\r\n\r\n      <br>\r\n      <button type=\"submit\" class=\"btn btn-default\">Добавить</button>\r\n      <button type=\"button\" class=\"btn btn-default back\">Отмена</button>\r\n    </form>\r\n    <!-- /end form-->\r\n  </div>\r\n\r\n\r\n</div>";
},"useData":true});
this["tpl"]["templates"]["companies"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!--  left-navigation -->\r\n<div class=\"left-navigation\"></div>\r\n<!-- /end  left-navigation -->\r\n\r\n<div class=\"main-content companies\">\r\n  <div class=\"title\">\r\n    <span class=\"icon ion-person-stalker\"></span>\r\n    <span class=\"title-text\">Мои компании</span>\r\n  </div>\r\n  <div class=\"page\">\r\n    <div class=\"btns-section\">\r\n      <button type=\"button\" class=\"btn btn-default add-company\">Добавить компанию <span class=\"ion-ios-plus-outline\"></span></button>\r\n    </div>\r\n\r\n    <div class=\"companies-list\"></div>\r\n\r\n\r\n  </div>\r\n</div>\r\n";
},"useData":true});
this["tpl"]["templates"]["companies_home"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"actions\">\r\n  <button type=\"button\" class=\"btn btn-default add-company\">Добавить Компанию<span class=\"ion-person-stalker\"></span></button>\r\n</div>\r\n<div class=\"companies-list\"></div>\r\n";
},"useData":true});
this["tpl"]["templates"]["company_logo"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"logo\" style=\"background-image: url('img/logo/"
    + alias4(((helper = (helper = helpers.logo || (depth0 != null ? depth0.logo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"logo","hash":{},"data":data}) : helper)))
    + ".png?"
    + alias4(((helper = (helper = helpers.getTimeStamp || (depth0 != null ? depth0.getTimeStamp : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"getTimeStamp","hash":{},"data":data}) : helper)))
    + "'), url('../img/logo-placeholder.jpg')\"></div>\r\n<div class=\"modal-logo-section\"></div>";
},"useData":true});
this["tpl"]["templates"]["avatar"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!-- Forgot modal -->\r\n<div class=\"modal fade\" id=\"avatar\"  tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"avatarModalLabel\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\" id=\"avatarModalLabel\">Загрузка личного аватара</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form id=\"form\">\r\n          <input id=\"upload\" type=\"file\" name=\"upload\">\r\n          <div id=\"upload-preview\"></div>\r\n      </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default btn-danger pull-left\" data-dismiss=\"modal\">Отмена</button>\r\n        <button type=\"button\" class=\"btn btn-default upload-avatar\">Загрузить</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->";
},"useData":true});
this["tpl"]["templates"]["login"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!-- Login modal -->\r\n<div class=\"modal fade\" id=\"login\"  tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"loginModalLabel\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\" id=\"loginModalLabel\">Вход</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <div class=\"alert alert-danger\" role=\"alert\"></div>\r\n\r\n        <form id=\"login-form\">\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">Email</label>\r\n            <input type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"Email адрес\" required=\"required\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"password\">Пароль</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\" placeholder=\"Пароль\">\r\n          </div>\r\n          <div>\r\n            <a class=\"forgot-password\">Забыли пароль?</a>\r\n          </div>\r\n          <button type=\"submit\" class=\"btn btn-default login-btn\">Войти</button>\r\n        </form>\r\n        <div class=\"loader-wrapper\">\r\n          <div class=\"loader\"></div>\r\n        </div>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->";
},"useData":true});
this["tpl"]["templates"]["logo"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!-- Forgot modal -->\r\n<div class=\"modal fade\" id=\"logo\"  tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"logoModalLabel\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\" id=\"logoModalLabel\">Загрузка логотипа компании</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div>\r\n          <input id=\"upload\" type=\"file\" name=\"upload\">\r\n          <div id=\"upload-preview\"></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default btn-danger pull-left\" data-dismiss=\"modal\">Отмена</button>\r\n        <button type=\"button\" class=\"btn btn-default upload-logo\">Загрузить</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->";
},"useData":true});
this["tpl"]["templates"]["registration"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!-- Registration modal -->\n<div class=\"modal fade\" id=\"registration\"  tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"registrationModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"registrationModalLabel\">Регистрация</h4>\n      </div>\n      <div class=\"modal-body\">\n\n        <div class=\"alert alert-danger\" role=\"alert\"></div>\n        <div class=\"alert alert-success\" role=\"alert\"></div>\n\n        <form id=\"registration-form\">\n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"Email адрес\" required=\"required\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Пароль</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\" placeholder=\"Выберите пароль\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"confirm_password\">Пароль еще раз</label>\n            <input type=\"password\" class=\"form-control\" name=\"confirm_password\" id=\"confirm_password\" placeholder=\"Подтвердите выбранный пароль\">\n          </div>\n          <!--\n          <div class=\"form-group checkbox\">\n            <label>\n              <input type=\"checkbox\" name=\"confirm\" id=\"confirm\"> Я соглашаюсь с правилами ресурса.\n            </label>\n          </div>\n         -->\n          <button type=\"submit\" class=\"btn btn-default registration-submit\">Зарегистрироваться</button>\n        </form>\n\n        <div class=\"loader-wrapper\">\n          <div class=\"loader\"></div>\n        </div>\n\n        <div class=\"checkmark\">\n          <span class=\"ion-checkmark-circled\"></span>\n        </div>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->";
},"useData":true});
this["tpl"]["templates"]["countries_picker"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias2).call(alias1,(depth0 != null ? depth0.id : depth0),"===",((stack1 = (depths[1] != null ? depths[1].country : depths[1])) != null ? stack1.id : stack1),{"name":"compare","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</option>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "selected";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "value=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.city : depth0)) != null ? stack1.title : stack1), depth0))
    + "\"";
},"6":function(container,depth0,helpers,partials,data) {
    return " placeholder=\"Город\"";
},"8":function(container,depth0,helpers,partials,data) {
    return "";
},"10":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"12":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <li class=\"city\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + " <span class=\"area\">"
    + alias4(((helper = (helper = helpers.area || (depth0 != null ? depth0.area : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"area","hash":{},"data":data}) : helper)))
    + "</span> <span class=\"region\"> "
    + alias4(((helper = (helper = helpers.region || (depth0 != null ? depth0.region : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"region","hash":{},"data":data}) : helper)))
    + "</span></li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=helpers.blockHelperMissing, buffer = 
  "<div class=\"form-group row\">\r\n  <div class=\"col-sm-6 col-md-6 m-b-1\">\r\n    <select class=\"form-control\" id=\"country\" name=\"country\">\r\n      <option value=\"\">Страна</option>\r\n";
  stack1 = ((helper = (helper = helpers.countries || (depth0 != null ? depth0.countries : depth0)) != null ? helper : alias2),(options={"name":"countries","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.countries) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "    </select>\r\n  </div>\r\n  <div class=\"col-sm-6 col-md-6\">\r\n    <input type=\"text\" class=\"form-control\" id=\"city\" name=\"city\"\r\n      "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.city : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.program(6, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\r\n      "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.country : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.program(10, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + ">\r\n    <div class=\"cityDropdown hide\">\r\n      <ul>\r\n";
  stack1 = ((helper = (helper = helpers.cities || (depth0 != null ? depth0.cities : depth0)) != null ? helper : alias2),(options={"name":"cities","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.cities) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "      </ul>\r\n    </div>\r\n  </div>\r\n</div>";
},"useData":true,"useDepths":true});
this["tpl"]["templates"]["empty"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"empty-message\">\r\n Ничего не найдено\r\n</div>";
},"useData":true});
this["tpl"]["templates"]["footer"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"copyright\">\r\n\r\n</div>";
},"useData":true});
this["tpl"]["templates"]["header"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "\r\n          <div class=\"user\">\r\n            <div class=\"user-profile\">\r\n              <div class=\"border\">\r\n                <span class=\"profile-photo\" style=\"background-image: url('img/avatar/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1._id : stack1), depth0))
    + ".png')\"></span>\r\n                <i class=\"ion-person\"></i>\r\n              </div>\r\n              "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.name : stack1), depth0))
    + "\r\n            </div>\r\n            <span class=\"ion-log-out logout\"></span>\r\n          </div>\r\n\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "          <button type=\"button\" class=\"btn btn-default registration\">Регистрация</button>\r\n          <button type=\"button\" class=\"btn btn-success login\">Войти</button>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row header-wrapper\">\r\n  <!-- Logo -->\r\n  <div class=\"col-md-3 logo\">\r\n    <a href=\"/\">Lignum</a>\r\n  </div>\r\n  <!-- /end logo -->\r\n  <!-- Navigation -->\r\n  <nav class=\"col-md-9 navigation hidden\">\r\n    <ul>\r\n      <li><a href=\"/\">Главная</a></li>\r\n      <li><a>Компании</a></li>\r\n      <li><a href=\"#calc\">Калькулятор</a></li>\r\n      <li><a href=\"#faq\">FAQ</a></li>\r\n      <li>\r\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.user : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "      </li>\r\n    </ul>\r\n  </nav>\r\n  <!-- /end navigation -->\r\n</div>\r\n<div class=\"hamburger visible-xs\">\r\n  <span class=\"ion-navicon\"></span>\r\n</div>";
},"useData":true});
this["tpl"]["templates"]["left_navigation"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "active";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "<ul>\r\n  <li>\r\n    <a class=\"link "
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias2).call(alias1,(depth0 != null ? depth0.activePage : depth0),"===","dashboard",{"name":"compare","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" href=\"#profile/dashboard\">\r\n      <span class=\"icon ion-person\"></span>\r\n      <span class=\"nav-item\">Мой кабинет</span>\r\n    </a>\r\n  </li>\r\n  <li>\r\n    <a class=\"link "
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias2).call(alias1,(depth0 != null ? depth0.activePage : depth0),"===","ads",{"name":"compare","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" href=\"#profile/ads\">\r\n      <span class=\"icon ion-clipboard\"></span>\r\n      <span class=\"nav-item\">Объявления</span>\r\n    </a>\r\n  </li>\r\n  <li>\r\n    <a class=\"link "
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias2).call(alias1,(depth0 != null ? depth0.activePage : depth0),"===","companies",{"name":"compare","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" href=\"#profile/companies\">\r\n      <span class=\"icon ion-person-stalker\"></span>\r\n      <span class=\"nav-item\">Компании</span>\r\n    </a>\r\n  </li>\r\n  <li>\r\n    <a class=\"link\">\r\n      <span class=\"icon ion-android-mail\"></span>\r\n      <span class=\"nav-item\">Сообщения</span>\r\n    </a>\r\n  </li>\r\n  <li>\r\n    <a class=\"link\">\r\n      <span class=\"icon ion-android-star-outline\"></span>\r\n      <span class=\"nav-item\">Избранное</span>\r\n    </a>\r\n  </li>\r\n  <li>\r\n    <a class=\"link "
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias2).call(alias1,(depth0 != null ? depth0.activePage : depth0),"===","settings",{"name":"compare","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" href=\"#profile/settings\">\r\n      <span class=\"icon ion-settings\"></span>\r\n      <span class=\"nav-item\">Настройки</span>\r\n    </a>\r\n  </li>\r\n</ul>";
},"useData":true});
this["tpl"]["templates"]["send_message_form"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"send_message_form\">\r\n  <div class=\"arrow-left\"></div>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n  <form>\r\n    <!-- USER: "
    + container.escapeExpression(((helper = (helper = helpers.userId || (depth0 != null ? depth0.userId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"userId","hash":{},"data":data}) : helper)))
    + " -->\r\n    <div class=\"form-group\">\r\n      <label for=\"text_message\">Текст сообщения:</label>\r\n      <textarea class=\"form-control\" rows=\"3\" id=\"text_message\" name=\"text_message\"></textarea>\r\n    </div>\r\n    <button type=\"button\" class=\"btn btn-default send\" disabled>Отправить</button>\r\n  </form>\r\n</div>\r\n";
},"useData":true});
this["tpl"]["templates"]["spinner"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"loader-wrapper\">\r\n  <div class=\"loader\"></div>\r\n</div>";
},"useData":true});