const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
    proxy.web(req, res, { target: 'http://network.rushhosting.net:10026' });
});

server.listen(process.env.PORT || 3000, () => {
    console.log('Proxy server is running...');
});
