// Karma configuration
// Generated on Thu Mar 24 2016 22:08:31 GMT+0300 (MSK)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'www/app/lib/closure/goog/base.js',
      'www/app/lib/closure/goog/deps.js',
      'www/app/lib/closure/goog/app-deps.js',
      {pattern: "www/app/js/controller/*.js", watched: true, served: true, included: false},      
      {pattern: "www/app/js/service/*.js", watched: true, served: true, included: false},      
      {pattern: "www/app/js/domain/*.js", watched: true, served: true, included: false},      
      {pattern: "www/app/lib/API/Client/*.js", watched: true, served: true, included: false},
      {pattern: "www/app/lib/closure/goog/**/*.js", watched: true, served: true, included: false},
      'www/app/lib/ionic/js/ionic.bundle.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'www/app/js/initChat.js',
      'www/app/js/chat.js',
      'www/app/js/chatServices.js',
      'www/app/js/chatControllers.js',
      'test/chat/unit/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
