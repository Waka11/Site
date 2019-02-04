var $LS = localStorage.getItem('class');
if ($LS == 'switch-on') {
    $link = $('link:first');
    $link.attr('href', '../styles/cssWeareModern.css');
}



var limit = $(window).height() / 15,
$backToTop = $('#back-to-top');
$(window).scroll(function () {
    if ($(this).scrollTop() > limit) {
        $backToTop.fadeIn();
    } else {
        $backToTop.fadeOut(); 
    }
});
$backToTop.click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 1500);
    return false;
});









