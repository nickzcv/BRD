/**
 * Compare two values
 *
 * @param {Number} lvalue Left value to compare
 * @param {String} operator Operator to apply while comparing
 * @param {Number} rvalue Right value to compare
 * @param {Object} options
 * @property {Function} options.fn
 * @property {Function} options.inverse
 *
 * @todo Clarify parameters' types and descriptions.
 * @function external:HandlebarsHelper#compare
 */
Handlebars.registerHelper('compare', function(lvalue, operator, rvalue, options) {
  let operators, result;
  if (arguments.length < 3) {
    throw new Error("Handlerbars Helper 'compare' needs 2 parameters");
  }
  if (options === undefined) {
    options = rvalue;
    rvalue = operator;
    operator = "===";
  }
  operators = {
    '==': function(l, r) {
      return l == r; },
    '===': function(l, r) {
      return l === r; },
    '!=': function(l, r) {
      return l != r; },
    '!==': function(l, r) {
      return l !== r; },
    '<': function(l, r) {
      return l < r; },
    '>': function(l, r) {
      return l > r; },
    '<=': function(l, r) {
      return l <= r; },
    '>=': function(l, r) {
      return l >= r; },
    'typeof': function(l, r) {
      return typeof l == r; }
  };
  if (!operators[operator]) {
    throw new Error("Handlerbars Helper 'compare' doesn't know the operator " + operator);
  }
  result = operators[operator](lvalue, rvalue);
  if (result) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

/*
 * Formatting date before show
 */
Handlebars.registerHelper('formatDate', function(datetime, format) {
  if (moment) {
    return moment(datetime).format(format);
  } else {
    return datetime;
  }
});

/*
 *
 */
Handlebars.registerHelper('getSelected', function(context, options) {
  if (context) {
    return context.map(function(item) {
      if (item.selected) {
        return options.fn(item);
      }

      }).join(",");
  } else {
    return 'NOTHING'
  }

});

Handlebars.registerHelper('cutFloat', function(value, dec) {
  if (value) {
    let string = value.toString();
    return string.substring(0, string.indexOf('.') + dec);
  } else {
  return 0;
  }
});