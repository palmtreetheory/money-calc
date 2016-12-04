$(document).ready(function () {
	$('.modal-trigger').leanModal();
	$('ul.tabs').tabs('select_tab', 'tab_id');
	$('select').material_select();
});

$(".button-collapse").sideNav();


$('.datepicker').pickadate({
	selectMonths: true,
	selectYears: 15
});

$('#otbToggle').click(function () {
	$("#abOtb").toggle();
	$("#abbyMic").toggle();
});

$('#hideAbby').click(function () {
	$("#topBox").slideToggle();
	$(".homeRow").css("top", "0").slide("slow");
});

$('#showAbby').click(function () {
	$("#topBox").slideToggle();
	$(".homeRow").css("top", "13em").slide("slow");
});

$('#fullAbby').click(function () {
	$('.bigAbby').show();
	$('.cropAbby').hide();
	$('#minBtn').show();
	$('#maxBtn').hide();
	$('#fullAbby').hide();
	$("#abbyMic").css("top", "90%").slide("slow");
	$("#topBox").css("height", "100%").slide("slow");
	$('.abbyMenu-left').css("top", "35%").slide("slow");
});

$('#minAbby').click(function () {
	$('.bigAbby').hide();
	$('.cropAbby').show();
	$('#minBtn').hide();
	$('#maxBtn').show();
	$('#fullAbby').show();
	$("#abbyMic").css("top", "35%").slide("slow");
	$("#topBox").css("height", "15em").slide("slow");
});
$('#abbyMic').click(function () {
	$('#abbyMic i').html('mic');
});

$(function () {
	var availableTags = [

"Risperdal - 1mg/ml Solution",
"Risperdal - 1mg Tablet",
"Risperdal - 2mg Tablet",
"Risperdal - 3mg Tablet",
"Risperdal - 4mg Tablet",
"Risperidone - 1mg/ml Solution",
"Risperidone - 0.25mg Tablet",
"Risperidone - 0.5mg Tablet",
"Risperidone - 1mg Tablet",
"Risperidone - 2mg Tablet",
"Risperidone - 3mg Tablet",
"Risperidone - 4mg Tablet"
    ];
	$("#tags").autocomplete({
		source: availableTags
	});
});

function changeFunc($i) {
	$('#dodoRow').show();
}


$('#phnBtn').click(function () {
	$("#phnBtn").toggleClass("activeHow");
});
$('#txtBtn').click(function () {
	$("#txtBtn").toggleClass("activeHow");
});
$('#notBtn').click(function () {
	$("#notBtn").toggleClass("activeHow");
});

$('input[name=nick]').keyup(function () {
	if ($(this).val().length > 2)
		$('#hidColl').show();
	else
		$('#hidColl').hide();
});
$('input[name=drug]').keyup(function () {
	if ($(this).val().length > 2)
		$('#hidColl').show();
});




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
		var input1 = parseFloat($('#number').val());
		var input2 = parseFloat($('#spltAmnt').val());


		if (isNaN(input1) || isNaN(input2)) {

			if (!input2) {
				$('#total').val($('#number').val());
			}

			if (!input1) {
				$('#total').val($('#spltAmnt').val());
			}

		} else {
			$('#total').val(input1 / input2);
		}
	};


	//Bills Counter

	$(".monPlus").click(function () {
		var $this = $(this);
		var quantity = parseFloat($this.siblings("#oneAmnt").val()) + 1;
		$(this).siblings("#oneAmnt").val(quantity);
		updateBank();
		updateBroll();
	});

	$(".monMinus").click(function () {
		var $this = $(this);
		var quantity = parseFloat($this.siblings("#oneAmnt").val()) - 1;
		$(this).siblings("#oneAmnt").val(quantity);
		updateBank();
		updateBroll();
	});

	$(".monPlus").click(function () {
		var $this = $(this);
		var quantity = parseFloat($this.siblings("#fiveAmnt").val()) + 1;
		$(this).siblings("#fiveAmnt").val(quantity);
		updateBank();
		updateBroll();
	});

	$(".monMinus").click(function () {
		var $this = $(this);
		var quantity = parseFloat($this.siblings("#fiveAmnt").val()) - 1;
		$(this).siblings("#fiveAmnt").val(quantity);
		updateBank();
		updateBroll();
	});

	$(".monPlus").click(function () {
		var $this = $(this);
		var quantity = parseFloat($this.siblings("#tenAmnt").val()) + 1;
		$(this).siblings("#tenAmnt").val(quantity);
		updateBank();
		updateBroll();
	});

	$(".monMinus").click(function () {
		var $this = $(this);
		var quantity = parseFloat($this.siblings("#tenAmnt").val()) - 1;
		$(this).siblings("#tenAmnt").val(quantity);
		updateBank();
		updateBroll();
	});

	$(".monPlus").click(function () {
		var $this = $(this);
		var quantity = parseFloat($this.siblings("#20Amnt").val()) + 1;
		$(this).siblings("#20Amnt").val(quantity);
		updateBank();
		updateBroll();
	});

	$(".monMinus").click(function () {
		var $this = $(this);
		var quantity = parseFloat($this.siblings("#20Amnt").val()) - 1;
		$(this).siblings("#20Amnt").val(quantity);
		updateBank();
		updateBroll();
	});

	var updateBank = function () {

		var input3 = parseFloat($('#oneAmnt').val()) * 1;
		var input4 = parseFloat($('#fiveAmnt').val()) * 5;
		var input5 = parseFloat($('#tenAmnt').val()) * 10;
		var input6 = parseFloat($('#20Amnt').val()) * 20;

		if (isNaN(input3) || isNaN(input4) || isNaN(input4) || isNaN(input6)) {

			if (!input3) {
				$('#bankRoll').val($('#oneAmnt').val());
			}

			if (!input4) {
				$('#bankRoll').val($('#fiveAmnt').val());
			}

			if (!input5) {
				$('#bankRoll').val($('#tenAmnt').val());
			}

			if (!input6) {
				$('#bankRoll').val($('#20Amnt').val());
			}

		} else {
			$('#bankRoll').val(input3 + input4 + input5 + input6);
		}

	};


	var updateBroll = function () {

		var input7 = parseFloat($('#bankRoll').val());

		if (isNaN(input7)) {

			if (!input7) {
				$('#bRoll').val($('#bankRoll').val());
			}

		} else {
			$('#bRoll').val(input7 + 0);
		}

	};


	var total = input1 / input2;
	total = total.toFixed(2);
	var bank = input3 + input4 + input5 + input6;
	var roll = input7 + 0;


	var output_total = $('#total')
	var bank_total = $('#bankRoll');
	var bRoll_total = $('#bRoll');


	output_total.val(total);
	bank_total.val(bank.toFixed(2));
	bRoll_total.val(roll.toFixed(2));

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