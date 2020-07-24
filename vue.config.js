// vue.config.js
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

const proxyConfig = require("./proxy.config");
const port = 8000;

module.exports = {
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: process.env.NODE_ENV === "development",
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: proxyConfig
  },
  chainWebpack: config => {
    config.module
      .rule("svg")
      .exclude.add(resolve("src/icons"))
      .end();

    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      });
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [resolve("./src/styles/variable.scss")]
    }
  },
  configureWebpack: config => {
    // yarn add  terser-webpack-plugin -D
    if (process.env.NODE_ENV === "production") {
      // 配置生产环境去掉console.log
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
    }
  }
};
