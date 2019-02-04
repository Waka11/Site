function switchOn() {
    $link = $('link:first');
    $link.attr('href', './styles/cssIndexModern.css');
}

function switchOff() {
    $link = $('link:first');
    $link.attr('href', './styles/cssIndexClassic.css');
}

var LS;
var $LS2 = localStorage.getItem('status');

if (localStorage.getItem('class') == 'switch-on') {
    switchOn();
    $('#roller').addClass('switch-on');
}

localStorage.clear();

if ($('#roller').hasClass('switch-on')) {
    localStorage.setItem('class', 'switch-on');
    LS = localStorage.getItem('class');
}


$('#roller').on('click', function() {
    $(this).toggleClass('switch-on').toggleClass('switch-off');
    if ($(this).hasClass('switch-on')) {
        switchOn();
    } else {
        localStorage.clear();
        switchOff();
    }
});


var roller = document.getElementById('roller');
roller.addEventListener('click', function() {
    if (roller.classList.contains('switch-on')) {
        localStorage.setItem('class', 'switch-on');
        LS = localStorage.getItem('class');
    }
})