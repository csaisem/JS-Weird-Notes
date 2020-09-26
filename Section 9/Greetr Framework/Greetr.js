/* Create framework/ library that help in greetings

 * Greetr

 * When given a first name, last name, and optional language, it generates formal and informal gretings
 * 
 * Support English & Spanish languages
 * 
 * Reusable library/ framework
 * 
 * Easy to type "G$()" structure 
 * 
 * Support jQuery
 */

/* adding a semicolon before the IEFE is a trick just in case the script abouve ours in the HTML doesn't 
finish its
 * semicolons properly
 * this allows us to use our librar unhindered
 */
;(function(global, $) {
    // create a function that returns the results of a different function constructor 
    // 'new' an object
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language)
    }

    // hidden within the scope of the IEFE and never directly accessible 
    var supportedLanguages = ['es', 'en']

    // informal greetings
    var greetings = {

        en: 'Hello',
        es: 'Hola'
    }

    // formal greetings
    var formalGreetings = {

        en: 'Greetings',
        es: 'Saludos'
    }

    // logger messages
    var logMessages = {

        en: 'Logged in',
        es: 'Inicio sesion'
    }

    // prototype holds methods to save memory space
    Greetr.prototype = {

        // 'this' refers to the calling object at execution time
        fullName: function() {
            return this.firstName + ' ' + this.lastName
        },

        validate: function() {

            // check that is a valid langauge
            // references the externally inaccessible 'supportedlangs' within the closure
            if (supportedLanguages.indexOf(this.language) === -1) {
                throw 'Invalid language'
            }
        },

        // retrive messages from object by referring to properties using [] syntax 
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!'
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ' ' + this.fullName()
        },

        greet: function(formal) {
            var msg;
            // if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting()
            } else {
                msg = this.greeting()
            }
            
            if (console) {
                console.log(msg)
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this
        },

        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ':' + this.fullName())
            }

            // make chainable
            return this
        },

        setLang: function(lang) {

            // set the language
            this.language = lang

            // validate
            this.validate()

            // make chainable
            return this 
        },

        HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loaded'
            }

            if (!selector) {
                throw 'Missing jQuery selector'
            }

            var msg;
            if (formal) {
                msg = this.formalGreeting()
            } else {
                msg = this.greeting()
            }

            // inject the message in the chosen place in the DOM
            $(selector).html(msg)

            return this
        }
    }

    // the actual object is created here, allowing us to 'new' an object without calling 'new'
    Greetr.init = function(firstName, lastName, language) {

        var self = this
        this.firstName = firstName || ''
        this.lastName = lastName || ''
        this.language = language || 'en'

        self.validate()

    }

    // trick borrowed from jQuery so we don't have to use the 'new' keyword
    Greetr.init.prototype = Greetr.prototype

    // attach Greetr to the global object, and provide a shorthand '$G' for ease our fingers
    global.Greetr = global.G$ = Greetr

}(window, jQuery))