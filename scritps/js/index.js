$(document).ready(function(){

    $.fn.extend({
        qcss: function(css) {
          return $(this).queue(function(next) {
            $(this).css(css);
            next();
          });
        }
      });

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
        $(".title").animate({"margin-bottom" : "80vh"}, 2000).qcss({
            bottom: '',
            'margin-top': '2.8vh'
        })
    });


    $('#portfolio').click(function(){
        $("#portfolio").addClass('btn-success').removeClass('btn-warning');
        $("#home").addClass('btn-warning').removeClass('btn-success');
        $("#about").addClass('btn-warning').removeClass('btn-success');
        $("#projects").addClass('btn-warning').removeClass('btn-success');
        $("#contact").addClass('btn-warning').removeClass('btn-success');
        $(".title").animate({"margin-bottom" : "80vh"}, 2000).qcss({
            bottom: '',
            'margin-top': '2.8vh'
        })
    });

    $('#projects').click(function(){
        $("#projects").addClass('btn-success').removeClass('btn-warning');
        $("#home").addClass('btn-warning').removeClass('btn-success');
        $("#portfolio").addClass('btn-warning').removeClass('btn-success');
        $("#about").addClass('btn-warning').removeClass('btn-success');
        $("#contact").addClass('btn-warning').removeClass('btn-success');
        $(".title").animate({"margin-bottom" : "80vh"}, 2000).qcss({
            bottom: '',
            'margin-top': '2.8vh'
        })
    });

    $('#contact').click(function(){
        $("#contact").addClass('btn-success').removeClass('btn-warning');
        $("#home").addClass('btn-warning').removeClass('btn-success');
        $("#portfolio").addClass('btn-warning').removeClass('btn-success');
        $("#projects").addClass('btn-warning').removeClass('btn-success');
        $("#about").addClass('btn-warning').removeClass('btn-success');
        $(".title").animate({"margin-bottom" : "80vh"}, 2000).qcss({
            bottom: '',
            'margin-top': '2.8vh'
        })
    });

});
