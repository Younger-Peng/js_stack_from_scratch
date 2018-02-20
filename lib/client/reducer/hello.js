'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _hello = require('../action/hello');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = _immutable2.default.fromJS({
    message: 'Initial reducer message'
});

var helloReducer = function helloReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case _hello.SAY_HELLO:
            return state.set('message', action.payload);
        default:
            return state;
    }
};

exports.default = helloReducer;