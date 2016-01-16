'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
    initializing : function() {
        this.pkg = require('../package.json');
    },

    prompting : function() {
        var done = this.async();
        var me = this;
        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the ' + chalk.red('Angm Flask Gae') + ' generator!'
        ));

        var firstPrompt = [
            {
                name    : 'appName',
                message : 'How would you like to call your main angular module',
                default : this.appname
            }
        ];

        var otherPrompts = [
            {
                name    : 'gaeAppName',
                message : 'What\'s thee PROJECT ID of your Google App Engine project? <project-id>.appspot.com'
            },
            {
                name    : 'appAuthor',
                message : 'What is your company/author name?'
            }
        ];

        this.prompt(firstPrompt, function(props) {
            me.appName = props.appName;
            otherPrompts[0].default = me.appName;
            me.prompt(otherPrompts, function(props2) {
                me.gaeAppName = props2.gaeAppName;
                me.slugifiedAppName = me._.slugify(me.appName);
                me.humanizedAppName = me._.humanize(me.appName);
                me.appAuthor = props2.appAuthor;
                me.capitalizedAppAuthor = me._.capitalize(me.appAuthor);
                done();
            });
        });
    },

    writing : {
        rootFiles : function() {
            this.template('_package.json', 'package.json');
            this.template('_bower.json', 'bower.json');

            this.copy('editorconfig', '.editorconfig');
            this.copy('gitignore', '.gitignore');
            this.copy('hgignore', '.hgignore');

            this.copy('bowerrc', '.bowerrc');
            this.copy('jscsrc', '.jscsrc');
            this.copy('pylintrc', '.pylintrc');
            this.copy('jshintrc', '.jshintrc');
            this.copy('jslintrc.json');
            this.copy('htmlhintrc.json');

            this.copy('LICENSE');
            this.copy('README.md');
            this.copy('bowerrc');
            this.copy('requirements.txt');

            this.copy('gruntfile.js');
            this.copy('gulpfile.js');

            this.copy('run.py');


            // Copy config folder
            this.mkdir('main');
            this.directory('main/api');
            this.directory('main/auth');
            this.directory('main/control');
            this.directory('main/model');

            // Public directory
            this.mkdir('public');
            this.directory('main/public/modules');
            this.template('main/public/_application.js', 'main/public/application.js');
            this.copy('main/public/humans.txt');
            this.copy('main/public/robots.txt');

            // Jinja templates
            this.template('main/templates/_base.html', 'main/templates/base.html');
            this.copy('main/templates/index.html');
            this.directory('main/templates/bit');

            // Files in main directory
            this.copy('main/__init__.py');
            this.template('main/_app.yaml', 'main/app.yaml');
            this.copy('main/appengine_config.py');
            this.copy('main/index.yaml');
            this.copy('main/main.py');
            this.copy('main/config.py');
            this.copy('main/task.py');
            this.copy('main/util.py');


        }
    },


    finalMsg : function () {
        this.log(yosay(
            'Ohhh ' + chalk.yellow('Everything looks OK' ) + ', let\'s install some dependencies!'
        ))
    },

    install : function() {
        this.installDependencies({
            skipInstall : this.options['skip-install']
        });
    }
});
