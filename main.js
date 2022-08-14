$(document).ready(function(){

    $('#about, #portfolio, #projects, #contact').click(function(){
        $(".title").addClass("animate-5vw-up");
    }) 

    $('#home').click(function(){
        $("#home").addClass('success').removeClass('warning');
        $("#about").addClass('warning').removeClass('alert');
        $("#portfolio").addClass('warning').removeClass('alert');
        $("#projects").addClass('warning').removeClass('alert');
        $("#contact").addClass('warning').removeClass('alert');
        $("h1").css({'color': '#CDD3AC'});
    })
    
    
    $('#about').click(function(){
        $("#about").addClass('success').removeClass('warning');
        $("#home").addClass('warning').removeClass('alert');
        $("#portfolio").addClass('warning').removeClass('alert');
        $("#projects").addClass('warning').removeClass('alert');
        $("#contact").addClass('warning').removeClass('alert');
        $("h1").css({'color': '#CDD3AC'});

        
    });

    $('#portfolio').click(function(){
        $("#portfolio").addClass('success').removeClass('warning');
        $("#home").addClass('warning').removeClass('alert');
        $("#about").addClass('warning').removeClass('alert');
        $("#projects").addClass('warning').removeClass('alert');
        $("#contact").addClass('warning').removeClass('alert');
        $("h1").css({'color': '#DAC2D9'});
        
    });

    $('#projects').click(function(){
        $("#projects").addClass('success').removeClass('warning');
        $("#home").addClass('warning').removeClass('alert');
        $("#portfolio").addClass('warning').removeClass('alert');
        $("#about").addClass('warning').removeClass('alert');
        $("#contact").addClass('warning').removeClass('alert');
        $("h1").css({'color': '#7DCBC9'});
        
    });

    $('#contact').click(function(){
        $("#contact").addClass('success').removeClass('warning');
        $("#home").addClass('warning').removeClass('alert');
        $("#portfolio").addClass('warning').removeClass('alert');
        $("#projects").addClass('warning').removeClass('alert');
        $("#about").addClass('warning').removeClass('alert');
        $("h1").css({'color': '#F9E7D1'});
        
    });
});
