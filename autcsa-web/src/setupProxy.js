const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/auth",
    createProxyMiddleware({
      target: "http://localhost:8080",
      changeOrigin: true,
    })
  );

  app.use(
    "/events",
    createProxyMiddleware({
      target: "http://localhost:8080",
      changeOrigin: true,
    })
  );

  app.use(
    "/news",
    createProxyMiddleware({
      target: "http://localhost:8080",
      changeOrigin: true,
    })
  );

  // app.use(
  //   "/restricted",
  //   createProxyMiddleware({
  //     target: "https://d1lsrt67f4djpu.cloudfront.net",
  //     changeOrigin: true,
  //     pathRewrite: {
  //       //路径替换
  //       "^/restricted": "/", // axios 访问/api2 == target + /api
  //     },
  //   })
  // );
};
