'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Message = function Message(_ref) {
    var message = _ref.message;
    return _react2.default.createElement(
        'p',
        null,
        message
    );
};

Message.propTypes = {
    message: _propTypes2.default.string.isRequired
};
exports.default = Message;