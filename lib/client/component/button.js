'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
    var label = _ref.label,
        handleClick = _ref.handleClick;
    return _react2.default.createElement(
        'button',
        { onClick: handleClick },
        label
    );
};

Button.propTypes = {
    label: _propTypes2.default.string.isRequired,
    handleClick: _propTypes2.default.func.isRequired
};
exports.default = Button;