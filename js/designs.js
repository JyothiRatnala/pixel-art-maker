	// Select color input
	// Select size input

	// When size is submitted by the user, call makeGrid()




$(document).ready(function(){
	$('#submit').click(function(event) {
   let height=$('#inputHeight');
   let width=$('#inputWeight');
   rows=height.val();
   cols=width.val();
  for(let i=1;i<=rows;i++){
  $('table').append('<tr></tr>');
   for(let j=1;j<=cols;j++){
	$('tr:last-child').append('<td></td>');
	$('td').attr('class','pixel');
}
}
event.preventDefault(); 

$('#pixelCanvas').on('click','.pixel',function(){  
  let Color=$('#colorPicker').val();
  $(this).css('background-color',Color);
  })
});
});





	