$('#add-return-reason').click(function() {
    $('.block-reasons:last').before('<div class="block-reasons section-bottom-20">' +
    '<div class="range">'+
        '<div class="cell-lg-10">'+
        '<input class="form-control" value="" id="retourneReasons" type="text" name="retourneReasons">'+
        '</div>'+
        '<div class="cell-lg-2 text-left">'+
        '<span class="remove"><i class="fa fa-trash text-red"></i></span>'+
        '</div>'+
    '</div>'+
    '</div>');
});
$('.optionBox-reason').on('click','.remove',function() {
 	$(this).parent().parent().parent().remove();
});

$('#add-return-condition').click(function() {
    $('.block-conditions:last').before('<div class="block-conditions section-bottom-20">' +
    '<div class="range">'+
        '<div class="cell-lg-10">'+
        '<input class="form-control" value="" id="retourneConditions" type="text" name="retourneConditions">'+
        '</div>'+
        '<div class="cell-lg-2 text-left">'+
        '<span class="remove-condition"><i class="fa fa-trash text-red"></i></span>'+
        '</div>'+
    '</div>'+
    '</div>');
});
$('.optionBox-condition').on('click','.remove-condition',function() {
 	$(this).parent().parent().parent().remove();
});


$('#add-return-mapping').click(function() {
    $('.block-mapping:last').before('<div class="block-mapping section-bottom-20">' +
    '<div class="range">'+
    '<div class="cell-lg-6 cell-xs-12">'+
        '<label class="form-label form-label-outside" for="name">Source</label>'+
        '<input class="form-control" value="" id="sourceShipmentMapping" type="text" name="sourceShipmentMapping">'+
    '</div>'+
    '<div class="cell-lg-6 cell-xs-12">'+
        '<label class="form-label form-label-outside" for="name">Target</label>'+
        '<input class="form-control" value="" id="targetShipmentMapping" type="text" name="targetShipmentMapping">'+
    '</div>'+
    '</div>' +
    '<span class="remove-mapping"><i class="fa fa-trash text-red"></i></span>'+
    '</div>');
});
$('.optionBox-mapping').on('click','.remove-mapping',function() {
 	$(this).parent().remove();
});

$( "#next-to-2" ).click(function() {
    $( "#trigger-2" ).trigger( "click" );
  });
$( "#next-to-3" ).click(function() {
    $( "#trigger-3" ).trigger( "click" );
  });
  