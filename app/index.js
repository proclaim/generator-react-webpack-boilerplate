'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
    prompting: function() {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to ' + chalk.red('React-Webpack-Boilerplate') + ' generator!'
        ));

        var prompts = [{
            type: 'input',
            name: 'appName',
            message: 'What is your app\'s name?',
            default: 'my app'
        }];

        this.prompt(prompts, function(props) {
            this.props = props;
            this.appName = props.appName;

            done();
        }.bind(this));
    },

    writing: {
        app: function() {
            this.fs.copy(this.templatePath('app.js'), this.destinationPath('src/app/app.js'));
            this.fs.copy(this.templatePath('bundle.js'), this.destinationPath('server/bundle.js'));
            this.fs.copy(this.templatePath('comp.js'), this.destinationPath('src/app/components/comp.js'));
            this.fs.copy(this.templatePath('index.html'), this.destinationPath('src/app/index.html'));
            this.fs.copy(this.templatePath('_package.json'), this.destinationPath('package.json'));
            this.fs.copy(this.templatePath('robots.txt'), this.destinationPath('src/robots.txt'));
            this.fs.copy(this.templatePath('server.js'), this.destinationPath('server.js'));
            this.fs.copy(this.templatePath('app.scss'), this.destinationPath('src/app/assets/styles/app.scss'));
        },

        projectfiles: function() {
            this.fs.copy(this.templatePath('_eslintrc'), this.destinationPath('.eslintrc'));
            this.fs.copy(this.templatePath('_gitignore'), this.destinationPath('.gitignore'));
            this.fs.copy(this.templatePath('webpack.config.js'), this.destinationPath('webpack.config.js'));
            this.fs.copy(this.templatePath('webpack.production.config.js'), this.destinationPath('webpack.production.config.js'));
        }
    },

    install: function() {
        this.installDependencies();
    }
});
