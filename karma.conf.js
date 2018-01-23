// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const {
  makeSureNoAppIsSelected
} = require("@nrwl/schematics/src/utils/cli-config-utils");
// Nx only supports running unit tests for all apps and libs.
makeSureNoAppIsSelected();

module.exports = function(config) {
  config.set({
    basePath: "",
    browserNoActivityTimeout: 30000,
    frameworks: ["jasmine", "@angular/cli"],
    proxies: {
      "/api": "/dev/null"
    },
    proxyReq: (proxyReq, req, res) => {
      res.end();
    },
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-electron"),
      require("karma-jasmine-html-reporter"),
      require("karma-mocha-reporter"),
      require("karma-coverage-istanbul-reporter"),
      require("@angular/cli/plugins/karma")
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: ["html", "lcovonly"],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: "dev"
    },
    reporters: ["mocha", "kjhtml"],
    port: Math.floor(Math.random() * 999) + 9000,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Chrome"],
    singleRun: false
  });
};
