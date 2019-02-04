var $LS = localStorage.getItem('class');
if ($LS == 'switch-on') {
    $link = $('link:first');
    $link.attr('href', '../styles/cssContriesModern.css');
}



$greeceButton = $('#switchContry #switchContry2 li:first');
$egyptButton = $('#switchContry #switchContry2 li').eq(1);
$turkeyButton = $('#switchContry #switchContry2 li:last');
$greeceDiv = $('#greece'); 
$egyptDiv = $('#egypt');
$turkeyDiv = $('#turkey');

$greeceButton.on('click', function(){
    $greeceDiv.addClass('showThis').removeClass('hideThis');
    
    $egyptDiv.addClass('hideThis').removeClass('showThis');
    
    $turkeyDiv.addClass('hideThis').removeClass('showThis');
    
})

$egyptButton.on('click', function () {
    $egyptDiv.addClass('showThis').removeClass('hideThis');
    
    $greeceDiv.addClass('hideThis').removeClass('showThis');
    
    $turkeyDiv.addClass('hideThis').removeClass('showThis');
    
})

$turkeyButton.on('click', function () {
    $turkeyDiv.addClass('showThis').removeClass('hideThis');
  
    $egyptDiv.addClass('hideThis').removeClass('showThis');
    
    $greeceDiv.addClass('hideThis').removeClass('showThis');
    
})

$(document).ready(function () {
    $('a[href^="#"]').click(function () {
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top
        }, 2000);
        return false;
    });
});















