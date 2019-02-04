var $LS = localStorage.getItem('class');
if ($LS == 'switch-on') {
    $link = $('link:first');
    $link.attr('href', '../styles/cssContactsModern.css');
}



$(function() {
    $("#phone").mask("+38(999) 999-9999");
})


$('#reset').prop('disabled', true);
$('#conf').on('click', function(){
    var $a = $('#country option:selected').val();
    var $b = $('#flight option:selected').val();
    var $c = $('#days option:selected').val();
    var $price = parseInt($a*$c) + parseInt($b);
    if($('input:checkbox').is(':checked')){
        $price = $price * $('input:checkbox').val();
        }
    
    $('#info').removeClass('hideThis');
    $('#info1').removeClass('hideThis');
    $('#info').addClass('showThis');    
    $('#info1').addClass('showThis');    

    $(this).prop('disabled', true);
    $('#reset').prop('disabled', false);

    $('#price').append($price + ' UAH');
    console.log($price);
});


$('#reset').on('click', function(){
    $('#info').removeClass('showThis');
    $('#info1').removeClass('showThis');
    $('#info').addClass('hideThis');
    $('#info1').addClass('hideThis');
    $('form fieldset:first input:first').val('');
    $('form fieldset:first input').eq(1).val('');
    $('form fieldset:first input:last').val('');
    $('#price').text('');

    $('#conf').prop('disabled', false);
    $(this).prop('disabled', true);
})









