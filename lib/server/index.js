'use strict';

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('../shared/config');

var _util = require('../shared/util');

var _renderApp = require('./render-app');

var _renderApp2 = _interopRequireDefault(_renderApp);

var _routes = require('../shared/routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _compression2.default)());
app.use(_config.STATIC_PATH, _express2.default.static('dist'));
app.use(_config.STATIC_PATH, _express2.default.static('public'));

app.get('/', function (req, res) {
    res.send((0, _renderApp2.default)(_config.APP_NAME));
});

app.get((0, _routes.helloEndpointRoute)(), function (req, res) {
    res.json({ serverMessage: 'Hello from the server! (received ' + req.params.num + ')' });
});

app.listen(_config.WEB_PORT, function () {
    // eslint-disable-next-line no-console
    console.log('Server running on port ' + _config.WEB_PORT + ' ' + (_util.isProd ? '(production)' : '(development).\nKeep "yarn dev:wds" running in an other terminal') + '.');
});