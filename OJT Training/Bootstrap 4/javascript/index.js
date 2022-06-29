$(document).ready(function () {

    $('#editButton').click(function(){

        $('.modal-content').draggable({
            "handle":".modal-header"
        });

        $('#saveChanges').click(function () {
            $('#fullName').text($('#inputName').val());
            $('#address').text($('#inputStreet').val() + ", " + $('#inputCity').val() + ", " + $('#inputState').val() + ", " + $('#inputZip').val());
            $('#facebook').attr('href', $('#inputFacebook').val());
            $('#instagram').attr('href', $('#inputInstagram').val());
            $('#twitter').attr('href', $('#inputTwitter').val());
        });
    
        
    });

});



