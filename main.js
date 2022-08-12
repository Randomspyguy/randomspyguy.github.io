$(document).ready(function(){

    $('#about').click(function(){
        $("#about").addClass('alert').removeClass('warning');
        $("#portfolio").addClass('warning').removeClass('alert');
        $("#projects").addClass('warning').removeClass('alert');
        $("#contact").addClass('warning').removeClass('alert');

        $("h1").css({'color': '#CDD3AC'});
        
    });

    $('#portfolio').click(function(){
        $("#portfolio").addClass('alert').removeClass('warning');
        $("#about").addClass('warning').removeClass('alert');
        $("#projects").addClass('warning').removeClass('alert');
        $("#contact").addClass('warning').removeClass('alert');
        $("h1").css({'color': '#DAC2D9'});
        
    });

    $('#projects').click(function(){
        $("#projects").addClass('alert').removeClass('warning');
        $("#portfolio").addClass('warning').removeClass('alert');
        $("#about").addClass('warning').removeClass('alert');
        $("#contact").addClass('warning').removeClass('alert');
        $("h1").css({'color': '#7DCBC9'});
        
    });

    $('#contact').click(function(){
        $("#contact").addClass('alert').removeClass('warning');
        $("#portfolio").addClass('warning').removeClass('alert');
        $("#projects").addClass('warning').removeClass('alert');
        $("#about").addClass('warning').removeClass('alert');
        $("h1").css({'color': '#F9E7D1'});
        
    });

});
