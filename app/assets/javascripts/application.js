// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


$(document).ready(function() {

    // media query event handler
if (matchMedia) {
    var mq = window.matchMedia("(max-width: 900px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
}

// media query change
function WidthChange(mq) {

    if (mq.matches) {
         $('#locator').hide();
        $('.hamburger').click(function() {
            $('#locator').fadeToggle('slow', function() {
                $('hamburger').click()
            }).css({
                display: 'flex-inline',
            });
        });
    }
    else {
        $('#locator').show("slow").css({
            display: 'block',
        });;

    }

}
});
