$(document).ready(
  function(){

    var list = [
      "09.30 : lezione",
      "13.15 : pranzo con Veronica",
      "15.00 : fare esercitazione Boolean",
      "17.00 : chiamare pazienti per ambulatorio",
      "18.00 : estetista manicure",
      "18.30 : andare a fare la spesa",
      "21.00 : finire quadro"
    ];
    console.log(list);


  var source = $("#toDoList-template").html();
  var template = Handlebars.compile(source);

  for (var i = 0; i <list.length; i++){
    var context = {
      text: list[i]
    };

    var html = template(context);
    $("#toDo").append(html);
    }

  $(".delete").click(
    function(){
      $(this).parent().remove();
    }
  );

  $("#add").keypress(function(event){
    if(event.which==13 || event.keycode==13){
      var newString = $("[name = add-field]").val();
      console.log(newString);
      var context = {
        text: newString
      };

      var html = template(context);
      $("#toDo").append(html);
      $(".delete").click(
        function(){
          $(this).parent().remove();
        }
      );
    };
  });
  }
);
