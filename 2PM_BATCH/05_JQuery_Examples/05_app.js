// likes app
let likes = 0;
let dislikes = 0;
let total = 0;

$('#likes-btn').click(function() {
    likes++;
    total++;
    $('#likes').text(likes);
    $('#total').text(total);
});

$('#dislikes-btn').click(function() {
    dislikes++;
    total++;
    $('#dislikes').text(dislikes);
    $('#total').text(total);
});


// Hobbies Selection app
// eating card
$('#eating-check').change(function() {
    toggleCard($('#eating-card'));
});

// coding card
$('#coding-check').change(function() {
    toggleCard($('#coding-card'));
});

// sleeping card
$('#sleeping-check').change(function() {
    toggleCard($('#sleeping-card'));
});

// toggleCard
let toggleCard = (card) => {
    if(card.hasClass('d-none')){
        card.removeClass('d-none');
    }
    else{
        card.addClass('d-none');
    }
};