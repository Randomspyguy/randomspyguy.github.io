$(document).ready(function(){




    $('#about').click(function(){
        $("#about").addClass('alert').removeClass('warning');
        $("#portfolio").addClass('warning').removeClass('alert');
        $("#projects").addClass('warning').removeClass('alert');
        $("#contact").addClass('warning').removeClass('alert');

        $("h1").css({'color': '#DAC2D9'});
        
    });

    $('#portfolio').click(function(){
        $("#portfolio").addClass('alert').removeClass('warning');
        $("#about").addClass('warning').removeClass('alert');
        $("#projects").addClass('warning').removeClass('alert');
        $("#contact").addClass('warning').removeClass('alert');
        $("h1").css({'color': '#B5A8CE'});
        
    });

    $('#projects').click(function(){
        $("#projects").addClass('alert').removeClass('warning');
        $("#portfolio").addClass('warning').removeClass('alert');
        $("#about").addClass('warning').removeClass('alert');
        $("#contact").addClass('warning').removeClass('alert');
        $("h1").css({'color': '#9CC4C4'});
        
    });

    $('#contact').click(function(){
        $("#contact").addClass('alert').removeClass('warning');
        $("#portfolio").addClass('warning').removeClass('alert');
        $("#projects").addClass('warning').removeClass('alert');
        $("#about").addClass('warning').removeClass('alert');
        $("h1").css({'color': '#8EB1C6'});
        
    });

});
