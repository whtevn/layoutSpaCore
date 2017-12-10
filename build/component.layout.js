'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _component = require('./footer/component.footer');

Object.defineProperty(exports, 'Footer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_component).default;
  }
});

var _component2 = require('./header/component.header');

Object.defineProperty(exports, 'Header', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_component2).default;
  }
});

var _component3 = require('./navigation/component.navigation');

Object.defineProperty(exports, 'Navigation', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_component3).default;
  }
});

var _component4 = require('./subnavigation/component.subnavigation');

Object.defineProperty(exports, 'SubNavigation', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_component4).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }