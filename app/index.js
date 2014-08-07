'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var FractalJSGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();
    var prompts = [];
    this.prompt(prompts, function (props) {
      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('components');
    this.mkdir('templates');

    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
    this.copy('_Gruntfile.js', 'Gruntfile.js');
    this.copy('app.js', 'app.js');
    this.copy('index.html', 'index.html');
    this.copy('components/main.js', 'components/main.js');
    this.copy('templates/main.tmpl', 'templates/main.tmpl');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = FractalJSGenerator;
