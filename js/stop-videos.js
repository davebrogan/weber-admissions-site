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
    //just one element with one id
    $('#pursuit-left-arrow, #pursuit-right-arrow').on('click', function() {
        let vidContainer = $('#ytplayer');
        let video = vidContainer.attr('src');
        vidContainer.attr('src','');
        vidContainer.attr('src', video);
        //changeScene(count, this);
    });
    //to get parent id from child element button
    //'this' refers to the DOM object that called on()
    $('.check-id').on('click', function(){
        alert($(this).parent().attr('id'));
    });

    //get id of video currently playing when multiple vids present
    $('.close-button').on('click', function(e) {
        let vidContainer = $(this).parent().attr('id'); //string object
        let vidElement = $('#' + vidContainer).find('iframe'); //jquery object
        let video = vidElement.attr('src'); //string object
        console.log('The container is ' + vidContainer + ' and the src attribute is ' + video);
        vidElement.attr('src', ''); //set the vid source url to null
        vidElement.attr('src', video); //reset the source to vid url
    });
});
