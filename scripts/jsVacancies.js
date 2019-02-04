var $LS = localStorage.getItem('class');
if ($LS == 'switch-on') {
    $link = $('link:first');
    $link.attr('href', '../styles/cssVacanciesModern.css');
}



$(document).ready(function () {
    $('a[href^="#"]').click(function () {
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top
        }, 2000);
        return false;
    });
});
