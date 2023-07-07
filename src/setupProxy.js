const { createProxyMiddleware } = require('http-proxy-middleware');
import config from '../config';

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: config.REACT_APP_API_URL,
            changeOrigin: true,
            secure: false,
            // pathRewrites: { '^/api': '' },
        }),
    )
}