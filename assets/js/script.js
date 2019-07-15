//TEST FUNCTION
function shout() {
  alert("It's working boss!");
}

//HIT ENTER AND ADD NEW ITEM TO LIST
$("#add-todo").keypress(function(event){
  if(event.which === 13) {
    addItem();
    $("#add-todo").val("");
  }
});

//ADD ITEM FUNCTION
function addItem() {
  $("#todos").prepend('<li><span class="delete"><i class="fa fa-trash"></i></span>' + $("input").val() + "</li>");
}


//CROSS OUT COMPLETED ITEMS
$('ul').on('click', 'li', function(){
  $(this).toggleClass('done');
});


//DELETE LI BY CLICKING DELETE BUTTON
$(document).on('click', '.delete', function(event){
  $(this).parent().fadeOut(300 ,function(){
    $(this).remove();
  });
});



//MOVE COMPLETED ITEM TO BOTTOM OF LIST
//function moveLists(){
//$(document).on('click', 'li', function(){
//  if ($('.done'), true){
//    $('#completed').prepend($(this));
//  }
//});
//}
