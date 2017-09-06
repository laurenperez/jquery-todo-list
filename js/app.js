$('ol').on('click', 'span', function(e) {
    $(e.target).parent().remove();
});

$('#submit').on('click', function(e){
  var inputFeild = $('#inputBox');
  var inputData = $('#inputBox').val();
  $('#toDoList').append('<li>'+inputData+'<span> x </span></li>');
  inputFeild.val(" ");
  focusInput();
  e.preventDefault();
});

var focusInput = function() {
  $('#inputBox').focus();
};

focusInput();
