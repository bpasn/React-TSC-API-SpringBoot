const { createProxyMiddleware } = require('http-proxy-middleware');

console.log(process.env.REACT_APP_URI_ENPOINT)
module.exports = function(app:any) {
    
  app.use(
    '/api',
    createProxyMiddleware({
      target: "http://localhost:8080",
      changeOrigin: true,
    })
  );
};