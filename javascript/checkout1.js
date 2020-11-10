$(document).ready(function () {
    $("form#checkout1").submit(function () {
        var validCountry = checkCountry();
        var validEmail = checkEmail();
        var validState = checkState();
        var validZip = checkZip();
        var validAddr = checkAddr();

        if (validCountry == false || validEmail == false || validState == false || validZip == false || validAddr == false) {
            return false;
        } else {
            return true;
        }
    });


    var input_email = $('input#emailcheckout');
    input_email.change(checkEmail);

    function checkEmail() {
        var v = input_email.prop("value");
        var re = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (v.length == 0 || v.match(re) == null) {
            input_email.addClass('is-invalid');
            input_email.removeClass('is-valid');
            return false;
        } else {
            input_email.removeClass('is-invalid');
            input_email.addClass('is-valid');
            return true;
        }
    }


    var input_country = $('select#country');
    input_country.change(checkCountry);

    function checkCountry() {
        var v = input_country.prop("value");
        if (v.length == 0) {
            input_country.addClass('is-invalid');
            input_country.removeClass('is-valid');
            return false;
        } else {
            input_country.removeClass('is-invalid');
            input_country.addClass('is-valid');
            return true;
        }
    }


    var input_state = $('input#state');
    input_state.change(checkState);

    function checkState() {
        var v = input_state.prop("value");
        var re = /^[A-Za-z]+$/;
        if (v.length == 0 || v.match(re) == null) {
            input_state.addClass('is-invalid');
            input_state.removeClass('is-valid');
            return false;
        } else {
            input_state.removeClass('is-invalid');
            input_state.addClass('is-valid');
            return true;
        }
    }


    var input_zip = $('input#zip');
    input_zip.change(checkZip);

    function checkZip() {
        var v = input_zip.prop("value");
        var re = /^[0-9]*$/;
        if (v.length == 0 || v.match(re) == null) {
            input_zip.addClass('is-invalid');
            input_zip.removeClass('is-valid');
            return false;
        } else {
            input_zip.removeClass('is-invalid');
            input_zip.addClass('is-valid');
            return true;
        }
    }

    var input_adr = $('textarea#addr');
    input_adr.change(checkAddr);

    function checkAddr() {
        var v = input_adr.prop("value");
        if (v.length == 0) {
            input_adr.addClass('is-invalid');
            input_adr.removeClass('is-valid');
            return false;
        } else {
            input_adr.removeClass('is-invalid');
            input_adr.addClass('is-valid');
            return true;
        }
    }
});