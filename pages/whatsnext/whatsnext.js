<!-- Hotjar Tracking Code for weber.edu -->
(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:1987894,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');

$(document).ready(function(){
    $("#menu-item-step1").click(function(){
        $('html, body').animate({
            scrollTop: $("#step1-scroll").offset().top
        },1000);
    });

    $("#menu-item-step2").click(function (){
        $('html, body').animate({
            scrollTop: $("#step2-scroll").offset().top
        },1000);
    });

    $("#menu-item-step3").click(function (){
        $('html, body').animate({
            scrollTop: $("#step3-scroll").offset().top
        },1000);
    });
});
