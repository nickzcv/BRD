// Profile left navigation
// Handlebars.registerPartial('leftNavigation', tpl.templates.left_navigation);


Handlebars.registerHelper('if_eq', function(a, b, opts) {
  if(a == b)
    return opts.fn(this);
  else
    return opts.inverse(this);
});