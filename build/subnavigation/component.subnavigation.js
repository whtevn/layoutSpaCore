"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubNavigation = function (_React$Component) {
  _inherits(SubNavigation, _React$Component);

  function SubNavigation() {
    _classCallCheck(this, SubNavigation);

    return _possibleConstructorReturn(this, (SubNavigation.__proto__ || Object.getPrototypeOf(SubNavigation)).apply(this, arguments));
  }

  _createClass(SubNavigation, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children.map ? this.props.children : [this.props.children];
      return _react2.default.createElement(
        "ul",
        { className: "link-list" },
        children.map(function (child, key) {
          return _react2.default.createElement(
            "li",
            { key: key, className: (child.props.to && _this2.props.navigation.getIn(["data", "location"]).match(child.props.to) ? "is-selected" : "") + " link-list-element" },
            _react2.default.cloneElement(child, _extends({}, _this2.props, child.props))
          );
        })
      );
    }
  }]);

  return SubNavigation;
}(_react2.default.Component);

exports.default = SubNavigation;