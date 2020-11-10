$(document).ready(function () {
    /* Gets the form that will be used for submission */
    $("form#register").submit(function () {
        /* Outcome of the functions (true / false) are stored in variables that hold the function */
        var validRegName = checkRegName();
        var validRegPass = checkRegPass();
        var validRegPassCfm = checkRegPassCfm();
        var validRegEmail = checkEmail();

        /* If any value is false, it will not show the modal and return false, otherwise, it will return false (prevent submission) and SHOW the modal */
        if (validRegName == false || validRegPass == false || validRegPassCfm == false || validRegEmail == false) {
            return false;
        } else {
            $('span#regname-modal').text($('input#regname').prop('value'));
            $('span#regpass-modal').text($('input#regpass').prop('value'));
            $('span#regemail-modal').text($('input#emailreg').prop('value'));
            $('#registerSuccess').modal('show');
            return false;
        }
    });

    /* Gets the form that will be used for submission */
    $("form#login").submit(function () {
        /* Outcome of the functions (true / false) are stored in variables that hold the function */
        var validName = checkName();
        var validPass = checkPass();

        /* If any value is false, it will not show the modal and return false, otherwise, it will return false (prevent submission) and SHOW the modal */
        if (validName == false || validPass == false) {
            return false;
        } else {
            $('span#name-modal').text($('input#name-login').prop('value'));
            $('#loginSuccess').modal('show');
            return false;
        }
    });

    var input_name = $('input#name-login');
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

    var input_passwd = $('input#pass-login');
    input_passwd.change(checkPass);

    function checkPass() {
        var v = input_passwd.prop("value");
        /* isNaN(v) returns false / true whether the value is a number or not. By adding '!' we inverse the values. */
        if (v.length < 5) {
            input_passwd.addClass('is-invalid');
            input_passwd.removeClass('is-valid');
            return false;
        } else {
            input_passwd.removeClass('is-invalid');
            input_passwd.addClass('is-valid');
            return true;
        }
    }


    var input_regname = $('input#regname');
    input_regname.change(checkRegName);

    function checkRegName() {
        var v = input_regname.prop("value");
        /* isNaN(v) returns false / true whether the value is a number or not. By adding '!' we inverse the values. */
        if (v.length < 1 || !isNaN(v)) {
            input_regname.addClass('is-invalid');
            input_regname.removeClass('is-valid');
            return false;
        } else {
            input_regname.removeClass('is-invalid');
            input_regname.addClass('is-valid');
            return true;
        }
    }

    var input_regpasswd = $('input#regpass');
    input_regpasswd.change(checkRegPass);

    function checkRegPass() {
        var v = input_regpasswd.prop("value");
        /* isNaN(v) returns false / true whether the value is a number or not. By adding '!' we inverse the values. */
        if (v.length < 5) {
            input_regpasswd.addClass('is-invalid');
            input_regpasswd.removeClass('is-valid');
            return false;
        } else {
            input_regpasswd.removeClass('is-invalid');
            input_regpasswd.addClass('is-valid');
            return true;
        }
    }

    var input_regpasswdcfm = $('input#regpass-cfm');
    input_regpasswdcfm.change(checkRegPassCfm);

    function checkRegPassCfm() {
        var v = input_regpasswdcfm.prop("value");
        /*  if it does not match the input in the input#regpass, then return invalid else valid */
        if (v != $('input#regpass').prop("value")) {
            input_regpasswdcfm.addClass('is-invalid');
            input_regpasswdcfm.removeClass('is-valid');
            return false;
        } else {
            input_regpasswdcfm.removeClass('is-invalid');
            input_regpasswdcfm.addClass('is-valid');
            return true;
        }
    }

    var input_email = $('input#emailreg');
    input_email.change(checkEmail);

    function checkEmail() {
        var v = input_email.prop("value");
        /* re stores the regular expression if v.match(re) is null, as in no matches, then it will be invalid else, there is match(es), then is valid */
        var re = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (v.length == 0 || v.match(re) == null) {
            input_email.addClass('is-invalid');
            input_email.removeClass('is-valid');
            return false;
            /* to prevent submission in event the form needs to be converted so that to show a new html page. Future use, for this contact form, these values are not 
                       needed as they are defined false above*/
        } else {
            input_email.removeClass('is-invalid');
            input_email.addClass('is-valid');
            return true; /*to allow submission */
        }
    }
});