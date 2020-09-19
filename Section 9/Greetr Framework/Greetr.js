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


(function(global, $) {
    // create a function that returns the results of a different function constructor 
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language)
    }

    var supportedLanguages = ['es', 'en']

    var greetings = {

        en: 'Hello',
        es: 'Hola'
    }

    var formalGreetings = {

        en: 'Greetings',
        es: 'Saludos'
    }

    var logMessages = {

        en: 'Logged in',
        es: 'Inicio sesion'
    }

    Greetr.prototype = {

        fullName: function() {
            return this.firstName + ' ' + this.lastName
        },

        validate: function() {
            if (supportedLanguages.indexOf(this.language) === -1) {
                throw 'Invalid language'
            }
        },

        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!'
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ' ' + this.fullName()
        },

        greet: function(formal) {
            var msg;
            if (formal) {
                msg = this.formalGreeting()
            } else {
                msg = this.greeting()
            }
            
            if (console) {
                console.log(msg)
            }
            return this
        },

        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ':' + this.fullName())
            }
            return this
        },

        setLang: function(lang) {
            this.language = lang

            this.validate()

            return this 
        }
    }

    Greetr.init = function(firstName, lastName, language) {

        var self = this
        this.firstName = firstName || ''
        this.lastName = lastName || ''
        this.language = language || 'en'

    }

    Greetr.init.prototype = Greetr.prototype

    global.Greetr = global.G$ = Greetr

}(window, jQuery))