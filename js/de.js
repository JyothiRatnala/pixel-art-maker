// Select color input
	// Select size input

	// When size is submitted by the user, call makeGrid()




function makeGrid() {
	
	
	// Select size input
	
	var canvas, cell, Height, Width, rows;
	
	canvas = $('#pixelCanvas');
	Height = $('#inputHeight').val();
	Width = $('#inputWeight').val();
	canvas.children().remove();
	for (i= 0; i< Height; i++) {
	canvas.append('<tr></tr>');
	}
	for (j= 0; j< Width; j++) {
	$('tr').append('<td></td>');
	} 
	cell = canvas.find('td');
	cell.click(function() {
	let	color = $("#colorPicker").val();
		$(this).css('background-color', color);
	});
	}
	$("#resetButton").on("click",function(evt) {$("#pixelCanvas").empty();
 });


	
	$('#pixelCanvas').find()
$('input[type="submit"]').click(function(event) {
  event.preventDefault();
  makeGrid();
});
