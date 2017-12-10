'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compareState = exports.Reducer = exports.initialState = undefined;

var _immutable = require('immutable');

var _actions = require('./actions.layout');

var Actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = exports.initialState = (0, _immutable.fromJS)({
  state: {
    hidden: true
  },
  data: {
    location: undefined // the current app resource
  }
});

var Reducer = exports.Reducer = function Reducer(state, action) {
  var payload = void 0;
  switch (action.type) {
    case Actions.TOGGLE_MENU:
      var currentHiddenState = state.getIn(["state", "hidden"]);
      return state.setIn(["state", "hidden"], !currentHiddenState);
    case Actions.SHOW_MENU:
      return state.setIn(["state", "hidden"], false);
    case Actions.HIDE_MENU:
      return state.setIn(["state", "hidden"], true);
    case Actions.SET_LOCATION:
      return state.setIn(["state", "hidden"], true).setIn(["data", "location"], action.payload);
    default:
      return state;
  }
};

var compareState = exports.compareState = function compareState(state, props) {
  return state.equals((0, _immutable.fromJS)(props));
};