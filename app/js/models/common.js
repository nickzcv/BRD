/**
 * Get a deep copy of an object, to ensure Backbone doesn't think it's identical
 * to the original object
 *
 * @param {Object} object Object to clone
 * @return {Object}
 * @function external:"Backbone.Model"#deepClone
 */
Backbone.Model.prototype.deepClone = function(object) {
  return JSON.parse(JSON.stringify(object));
};