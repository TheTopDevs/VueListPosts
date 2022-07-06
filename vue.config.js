const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, './src')
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/styles/general/_media.scss";
        `
      }
    }
  }
}
