/**
 * Backbone extension. Return promise, that will be resolved from received time
 * to necessary route according to it
 *
 * @param {int} ms Number of milliseconds to wait
 * @function external:"Backbone"#defTimeout
 */
Backbone.defTimeout = function(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};