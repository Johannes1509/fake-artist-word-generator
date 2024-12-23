const minHeightShortest = 720;
    const minHeightShorter = 730;
    const minHeightShort = 750;

$(document).ready(function () {
    

    displayHeightSensibleElements()

    $(window).resize(displayHeightSensibleElements);
});

function displayHeightSensibleElements(){
    if ($(window).height() >= minHeightShortest) {
        $('.hide-on-shortest').removeClass("d-none"); 
    }else{
        $('.hide-on-shortest').addClass("d-none"); 
    }

    if ($(window).height() >= minHeightShorter) {
        $('.hide-on-shorter').removeClass("d-none"); 
    }else{
        $('.hide-on-shorter').addClass("d-none"); 
    }

    if ($(window).height() >= minHeightShort) {
        $('.hide-on-short').removeClass("d-none"); 
    }else{
        $('.hide-on-short').addClass("d-none"); 
    }
}
