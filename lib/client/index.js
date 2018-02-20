'use strict';

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = require('react-hot-loader');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _hello = require('./reducer/hello');

var _hello2 = _interopRequireDefault(_hello);

var _util = require('../shared/util');

var _config = require('../shared/config');

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)((0, _redux.combineReducers)({ hello: _hello2.default }),
// eslint-disable-next-line no-underscore-dangle, comma-dangle
_util.isProd ? undefined : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

var rootEl = document.querySelector(_config.APP_CONTAINER_SELECTOR);

var wrapApp = function wrapApp(AppComponent, reduxStore) {
    return _react2.default.createElement(
        _reactRedux.Provider,
        { store: reduxStore },
        _react2.default.createElement(
            _reactHotLoader.AppContainer,
            null,
            _react2.default.createElement(AppComponent, null)
        )
    );
};

_reactDom2.default.render(wrapApp(_app2.default, store), rootEl);

if (module.hot) {
    // flow-disable-next-line
    module.hot.accept('./app', function () {
        // eslint-disable-next-line global-require
        var NextApp = require('./app').default;
        _reactDom2.default.render(wrapApp(NextApp, store), rootEl);
    });
}