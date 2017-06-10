$(document).ready(function() {

	//Clear button for search fields
	$("#clear").on("click", function() {
		$("input[type=text], textarea").val("");
		clearMap();
	});

	$("#submit").on("click", meetUpAjax);

});