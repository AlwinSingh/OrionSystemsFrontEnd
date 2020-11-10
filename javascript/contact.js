$(document).ready(function () {
    /* Gets the form that will be used for submission */
    $("form#contactForm").submit(function () {
        /* Outcome of the functions (true / false) are stored in variables that hold the function */
        var validName = checkName();
        var validEmail = checkEmail();
        var validMsg = checkMsg();

        /* If any value is false, it will not show the modal and return false, otherwise, it will return false (prevent submission) and SHOW the modal */
        if (validName == false || validEmail == false || validMsg == false) {
            return false;
        } else {
            /* Main Modal with the ID 'contact' will be hidden while the new modal to show the success message will be shown */
            $('#Contact').modal('hide');
            $('#sentContact').modal('show');
            return false;
        }
    });

    var input_name = $('input#name');
    input_name.change(checkName);

    function checkName() {
        var v = input_name.prop("value");
        /* isNaN(v) returns false / true whether the value is a number or not. By adding '!' we inverse the values. */
        if (v.length < 1 || !isNaN(v)) {
            input_name.addClass('is-invalid');
            input_name.removeClass('is-valid');
            return false;
        } else {
            input_name.removeClass('is-invalid');
            input_name.addClass('is-valid');
            return true;
        }
    }

    var input_email = $('input#email');
    input_email.change(checkEmail);

    function checkEmail() {
        var v = input_email.prop("value");
        /* re stores the regular expression if v.match(re) is null, as in no matches, then it will be invalid else, there is match(es), then is valid */
        var re = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (v.length == 0 || v.match(re) == null) {
            input_email.addClass('is-invalid');
            input_email.removeClass('is-valid');
            return false; /* to prevent submission in event the form needs to be converted so that to show a new html page. Future use, for this contact form, these values are not 
            needed as they are defined false above*/
        } else {
            input_email.removeClass('is-invalid');
            input_email.addClass('is-valid');
            return true; /*to allow submission */
        }
    }

    var input_msg = $('textarea#message');
    input_msg.change(checkMsg);

    function checkMsg() {
        var v = input_msg.prop("value");
        if (v.length < 5) {
            input_msg.addClass('is-invalid');
            input_msg.removeClass('is-valid');
            return false;
        } else {
            input_msg.removeClass('is-invalid');
            input_msg.addClass('is-valid');
            return true;
        }
    }
});