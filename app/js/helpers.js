// Profile left navigation
// Handlebars.registerPartial('leftNavigation', tpl.templates.left_navigation);



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
/* jshint ignore:start */
/* eslint-disable */
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