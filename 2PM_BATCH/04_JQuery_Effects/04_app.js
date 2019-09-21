// hide() , show()
$('#btn-1').click(function() {
    let buttonText = $(this).text();
    if(buttonText === 'hide'){
        $('#card-1').hide(500);
        $(this).text('show');
    }
    else{
        $('#card-1').show(500);
        $(this).text('hide');
    }
});

// toggle()
$('#btn-2').click(function() {
    let buttonText = $(this).text();
    $('#card-2').toggle(500);
    (buttonText === 'hide') ? $(this).text('show') : $(this).text('hide');
});

// fadeIn() , fadeOut() -> fadeToggle()
// slideUp() , slideDown() -> slideToggle()
