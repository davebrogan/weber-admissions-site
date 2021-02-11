$(document).ready(function() {
    // set unique id to videoplayer for the Webflow video element
    var src = $('#videoplayer').children('iframe').attr('src');

    // when object with class open-popup is clicked...
    $('.open-popup').click(function(e) {
        e.preventDefault();
        // change the src value of the video
        $('#videoplayer').children('iframe').attr('src', src);
        $('.popup-bg').fadeIn();
    });

    // when object with class close-popup is clicked...
    $('.close-popup').click(function(e) {
        e.preventDefault();
        $('#videoplayer').children('iframe').attr('src', '');
        $('.popup-bg').fadeOut();
    });

    //stop video play when navigating away from page
    $('#pursuit-left-arrow, #pursuit-right-arrow').on('click', function() {
        let vidContainer = $('#ytplayer');
        let video = vidContainer.attr('src');
        vidContainer.attr('src','');
        vidContainer.attr('src', video);
        //changeScene(count, this);
    });
});


