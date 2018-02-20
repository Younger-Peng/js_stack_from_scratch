'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sayHello = exports.SAY_HELLO = undefined;

var _reduxActions = require('redux-actions');

var SAY_HELLO = exports.SAY_HELLO = 'SAY_HELLO';

var sayHello = exports.sayHello = (0, _reduxActions.createAction)(SAY_HELLO);