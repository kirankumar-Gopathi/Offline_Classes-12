// click on login button
$('#login-button').click(function() {
    $('#display-modal').modal('show');
    $('#form-card-header').removeClass('bg-teal').removeClass('bg-warning').addClass('bg-success');
    $('#modal-title').text('Login Here');
    $('#modal-button').removeClass('btn-teal').removeClass('btn-warning').addClass('btn-success').text('Login')
});

// click on Register button
$('#register-button').click(function() {
    $('#display-modal').modal('show');
    $('#form-card-header').removeClass('bg-teal').removeClass('bg-success').addClass('bg-warning');
    $('#modal-title').text('Register Here');
    $('#modal-button').removeClass('btn-teal').removeClass('btn-success').addClass('btn-warning').text('Register')
});

// click on Signup button
$('#signup-button').click(function() {
    $('#display-modal').modal('show');
    $('#form-card-header').removeClass('bg-warning').removeClass('bg-success').addClass('bg-teal');
    $('#modal-title').text('Signup Here');
    $('#modal-button').removeClass('btn-warning').removeClass('btn-success').addClass('btn-teal').text('Signup')
});