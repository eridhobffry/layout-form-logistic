$('.add').click(function() {
    console.log(this.getAttribute('data-type'))
    var data = this.getAttribute('data-type')
    $('.block-'+data+':last').before('<div class="block-'+data+' section-bottom-20">' +
    '<div class="range">'+
        '<div class="cell-lg-10">'+
        '<input class="form-control" value="" id="'+data+'" type="text" name="'+data+'">'+
        '</div>'+
        '<div class="cell-lg-2 text-left">'+
        '<span class="remove-'+data+'" data-type="'+data+'"><i class="fa fa-trash text-red"></i></span>'+
        '</div>'+
    '</div>'+
    '</div>');
    $('.optionBox-'+data+'').on('click','.remove-'+data+'',function() {
        $(this).parent().parent().parent().remove();
   });
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
  