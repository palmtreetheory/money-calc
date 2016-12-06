$(function () {
    $(".qtyplus").click(function () {
        var $this = $(this);
        var quantity = parseFloat($this.siblings("#spltAmnt").val()) + 1;
        $(this).siblings("#spltAmnt").val(quantity);
        updateTotal();
    });
    $(".qtyminus").click(function () {
        var $this = $(this);
        var quantity = parseFloat($this.siblings("#spltAmnt").val()) - 1;
        $(this).siblings("#spltAmnt").val(quantity);
        updateTotal();
    });
    $('#number').keyup(function () {
        updateTotal();
    });
    var updateTotal = function () {
        var number = parseFloat($('#number').val());
        var spltAmnt = parseFloat($('#spltAmnt').val());
        if (isNaN(number) || isNaN(spltAmnt)) {
            if (!spltAmnt) {
                $('#total').val($('#number').val());
            }
            if (!number) {
                $('#total').val($('#spltAmnt').val());
            }
        }
        else {
            $('#total').val(number / spltAmnt);
        }
        var total = number / spltAmnt;
        total = total.toFixed(2);
        output_total.val(total);
    };
    var output_total = $('#total');
});
$('#10per').click(function () {
    $('#10per').toggleClass("tipEngage");
    $('#15per').removeClass("tipEngage");
    $('#18per').removeClass("tipEngage");
    $('#20per').removeClass("tipEngage");
    var perCho = parseFloat($('#total').val());
    var perTotal = perCho * .10;
    var allTotal = perCho + perTotal;
    var output_total = $('#tipTots');
    var output_final = $('#finalTotal');
    output_total.val(perTotal.toFixed(2));
    output_final.val(allTotal.toFixed(2));
});
$('#15per').click(function () {
    $('#15per').addClass("tipEngage");
    $('#10per').removeClass("tipEngage");
    $('#18per').removeClass("tipEngage");
    $('#20per').removeClass("tipEngage");
    var perCho = parseFloat($('#total').val());
    var perTotal = perCho * .15;
    var allTotal = perCho + perTotal;
    var output_total = $('#tipTots');
    var output_final = $('#finalTotal');
    output_total.val(perTotal.toFixed(2));
    output_final.val(allTotal.toFixed(2));
});
$('#18per').click(function () {
    $('#18per').addClass("tipEngage");
    $('#15per').removeClass("tipEngage");
    $('#10per').removeClass("tipEngage");
    $('#20per').removeClass("tipEngage");
    var perCho = parseFloat($('#total').val());
    var perTotal = perCho * .18;
    var allTotal = perCho + perTotal;
    var output_total = $('#tipTots');
    var output_final = $('#finalTotal')
    output_total.val(perTotal.toFixed(2));
    output_final.val(allTotal.toFixed(2));
});
$('#20per').click(function () {
    $('#20per').addClass("tipEngage");
    $('#15per').removeClass("tipEngage");
    $('#18per').removeClass("tipEngage");
    $('#10per').removeClass("tipEngage");
    var perCho = parseFloat($('#total').val());
    var perTotal = perCho * .20;
    var allTotal = perCho + perTotal;
    var output_total = $('#tipTots');
    var output_final = $('#finalTotal')
    output_total.val(perTotal.toFixed(2));
    output_final.val(allTotal.toFixed(2));
});
$('#splitYN').change(function () {
    $('#share-amount').toggle();
    $('#myForm').toggle();
});