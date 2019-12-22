const webpack = require("webpack");
module.exports = {
  chainWebpack(config) {
    config.plugin("medium-editor").use(webpack.ProvidePlugin, [
      {
        MediumEditor: "medium-editor"
      }
    ]);
    config.plugin("jquery").use(webpack.ProvidePlugin, [
      {
        $: "jquery",
        jQuery: "jquery"
      }
    ]);
  }
};
