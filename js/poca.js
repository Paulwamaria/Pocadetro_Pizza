$(document).ready(function(){
//Decrare variables
var costBySize=0;
var costOfCrust=0;
var costOfToppings=0;
var costOfDelivary=0;
var numberOfPizzas;

//front-end


$("form#pizza-form").submit(function(event) {
  event.preventDefault();

  var sizeOfPizza = $("#dropdown").children("option").filter(":selected").text()
  var selectedCrust=$("input[name='crust']:checked").val();
  

  $("ul#totalCost").append("<li><span class='contact'>" + selectedCrust + " hi"+ "</span></li>");


});

}

);