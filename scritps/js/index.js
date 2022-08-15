$(document).ready(function(){

    $('#home').click(function(){
        $("#home").addClass('btn-success').removeClass('btm-warning');
        $("#about").addClass('btn-warning').removeClass('btn-success');
        $("#portfolio").addClass('btn-warning').removeClass('btn-success');
        $("#projects").addClass('btn-warning').removeClass('btn-success');
        $("#contact").addClass('btn-warning').removeClass('btn-success');
    });
    
    
    $('#about').click(function(){
        $("#about").addClass('btn-success').removeClass('btn-warning');
        $("#home").addClass('btn-warning').removeClass('btn-success');
        $("#portfolio").addClass('btn-warning').removeClass('btn-success');
        $("#projects").addClass('btn-warning').removeClass('btn-success');
        $("#contact").addClass('btn-warning').removeClass('btn-success');
        $(".title").animate({"margin-bottom" : "80vh", "margin-top" : "0"}, 2000);
        $(".title").css({"bottom" : "auto"});

        
    });

    $('#portfolio').click(function(){
        $("#portfolio").addClass('btn-success').removeClass('btn-warning');
        $("#home").addClass('btn-warning').removeClass('btn-success');
        $("#about").addClass('btn-warning').removeClass('btn-success');
        $("#projects").addClass('btn-warning').removeClass('btn-success');
        $("#contact").addClass('btn-warning').removeClass('btn-success');
        
    });

    $('#projects').click(function(){
        $("#projects").addClass('btn-success').removeClass('btn-warning');
        $("#home").addClass('btn-warning').removeClass('btn-success');
        $("#portfolio").addClass('btn-warning').removeClass('btn-success');
        $("#about").addClass('btn-warning').removeClass('btn-success');
        $("#contact").addClass('btn-warning').removeClass('btn-success');
        
    });

    $('#contact').click(function(){
        $("#contact").addClass('btn-success').removeClass('btn-warning');
        $("#home").addClass('btn-warning').removeClass('btn-success');
        $("#portfolio").addClass('btn-warning').removeClass('btn-success');
        $("#projects").addClass('btn-warning').removeClass('btn-success');
        $("#about").addClass('btn-warning').removeClass('btn-success');
        
    });
});
