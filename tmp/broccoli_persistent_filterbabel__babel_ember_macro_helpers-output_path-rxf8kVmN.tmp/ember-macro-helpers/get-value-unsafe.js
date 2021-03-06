define('ember-macro-helpers/get-value-unsafe', ['exports', 'ember-macro-helpers/get-value'], function (exports, _getValue) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (options = {}) {
    let value = (0, _getValue.default)(options);
    if (value !== undefined) {
      return value;
    }

    return options.macro;
  };
});