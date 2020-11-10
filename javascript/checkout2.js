$(document).ready(function () {
    $("form#checkout2").submit(function () {
        var validCName = checkCName();
        var validMonth = checkMonth();
        var validYear = checkYear();
        var validCCNum = checkCCNum();
        var validCVV = checkCVV();

        if (validCName == false || validMonth == false || validYear == false || validCCNum == false || validCVV == false) {
            return false;
        } else {
            var length = 1 + Math.floor(Math.random() * 6);
            makeid(length);
            var refid = 1000000 + Math.floor(Math.random() * 2000000);
            $('div#randomRefID').text(refid + result);
            $('#PaymentSummary').modal('show');
            $('div#ccname').text($('input#card-holder').prop('value'));
            $('div#ccnumber').text($('input#card-number').prop('value'));
            $('div#ccmonth').text($('input#exp-month').prop('value'));
            $('div#ccyear').text($('input#exp-year').prop('value'));
            $('div#cvv').text($('input#cvc').prop('value'));
            return false;
        }
    });

    var input_cname = $('input#card-holder');
    input_cname.change(checkCName);

    function checkCName() {
        var v = input_cname.prop("value");
        var re = /^[a-zA-Z ]*$/;
        if (v.length == 0 || v.match(re) == null) {
            input_cname.addClass('is-invalid');
            input_cname.removeClass('is-valid');
            return false;
        } else {
            input_cname.removeClass('is-invalid');
            input_cname.addClass('is-valid');
            return true;
        }
    }

    var input_year = $('input#exp-year');
    input_year.change(checkYear);

    function checkYear() {
        var v = input_year.prop("value");
        if (v < 2019 || isNaN(v)) {
            input_year.addClass('is-invalid');
            input_year.removeClass('is-valid');
            return false;
        } else {
            input_year.removeClass('is-invalid');
            input_year.addClass('is-valid');
            return true;
        }
    }

    var input_month = $('input#exp-month');
    input_month.change(checkMonth);

    function checkMonth() {
        var v = input_month.prop("value");
        var re = /^[0-9]*$/;
        if (v < 1 || v > 12 || v.match(re) == null) {
            input_month.addClass('is-invalid');
            input_month.removeClass('is-valid');
            return false;
        } else {
            input_month.removeClass('is-invalid');
            input_month.addClass('is-valid');
            return true;
        }
    }

    var input_ccnum = $('input#card-number');
    input_ccnum.change(checkCCNum);

    function checkCCNum() {
        var v = input_ccnum.prop("value");
        var re = /^(\d{4}[- ]){3}\d{4}|\d{16}$/;
        if (v.length == 0 || v.match(re) == null || isNaN(v)) {
            input_ccnum.addClass('is-invalid');
            input_ccnum.removeClass('is-valid');
            return false;
        } else {
            input_ccnum.removeClass('is-invalid');
            input_ccnum.addClass('is-valid');
            return true;
        }
    }

    var input_cvv = $('input#cvc');
    input_cvv.change(checkCVV);

    function checkCVV() {
        var v = input_cvv.prop("value");
        if (v.length != 3) {
            input_cvv.addClass('is-invalid');
            input_cvv.removeClass('is-valid');
            return false;
        } else {
            input_cvv.removeClass('is-invalid');
            input_cvv.addClass('is-valid');
            return true;
        }
    }

    function makeid(length) {
        result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
});