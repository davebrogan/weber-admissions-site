$(document).ready(function(){
    $(".nav-onpage-icon").click(function() {
        window.location = $(this).find("a").attr("href");
        return false;
    });
});
