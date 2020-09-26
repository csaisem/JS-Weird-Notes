// get a new object ( the architecture allows us not to have to use the 'new' keyword here)
var g = G$('Charles', 'Mesias');

// use our chainable methods
g.greet().setLang('es').greet(true).log();

// let's use our object on the click of the login button
$('#login').click(function() {

    // create a new Greetr object
    var loginGrtr = G$('Charles', 'Mesias')

    // hide the login on the screen
    $('#logindiv').hide()

    // fire off an HTML greeting, pass the '#greeting' as the selector and the chosen language,
    // and log the welcome as well 
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log()
})