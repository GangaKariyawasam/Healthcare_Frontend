const CracoLessPlugin = require('craco-less');

// this is a variable that's going to be available in both .less and .module.less files
const modifiedTheme = {
  '@font-family': '"Open Sans", "Chivo", "Helvetica Neue", Helvetica, Arial, sans-serif',
};

module.exports = {
  plugins: [
    // This plugin takes care of the .less files 
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: modifiedTheme,
          },
        },
      },
    },
    // This plugin take scare of the .less.module files
    {
      plugin: CracoLessPlugin,
      options: {
        modifyLessRule: function (lessRule, _context) {
          lessRule.test = /\.module\.(less)$/;
          lessRule.use = [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  modifyVars: modifiedTheme,
                  javascriptEnabled: true,
                },
              },
            },
          ];
          lessRule.exclude = /node_modules/;
          return lessRule;
        },
      },
    },
  ]
};
