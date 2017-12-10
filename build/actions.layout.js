"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavigateTo = NavigateTo;
var Type = "Navigation";

var TOGGLE_MENU = exports.TOGGLE_MENU = Type + " TOGGLE_MENU";
var ToggleMenu = exports.ToggleMenu = function ToggleMenu(payload) {
  return {
    type: TOGGLE_MENU,
    payload: payload
  };
};

var SHOW_MENU = exports.SHOW_MENU = Type + " SHOW_MENU";
var ShowMenu = exports.ShowMenu = function ShowMenu(payload) {
  return {
    type: SHOW_MENU,
    payload: payload
  };
};

var HIDE_MENU = exports.HIDE_MENU = Type + " HIDE_MENU";
var HideMenu = exports.HideMenu = function HideMenu(payload) {
  return {
    type: HIDE_MENU,
    payload: payload
  };
};

var SET_LOCATION = exports.SET_LOCATION = Type + " SET_LOCATION";
var SetLocation = exports.SetLocation = function SetLocation(payload) {
  return {
    type: SET_LOCATION,
    payload: payload
  };
};

function NavigateTo(payload) {
  return function (dispatch, getState) {
    dispatch(SetLocation(payload));
    window.location = "#" + payload;
  };
}