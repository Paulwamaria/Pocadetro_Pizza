//Decrare variables
var costBySize;
var costOfCrust;
var costOfToppings;
var costOfDelivary;
var numberOfPizzas;

  //create constructors
  //back-end
  function PizzaPriceCalc(costBySize,costOfCrust,costOfToppings,numberOfPizzas){
    this.sizeOfPizza=costBySize,
    this.selectedCrust=costOfCrust,
    this.totalToppingCost=costOfToppings,
    this.numberOfPizzas=numberOfPizzas;
  }
  //create a prototype
  PizzaPriceCalc.prototype.pizzaPrice=function(){
    return this.numberOfPizzas*(this.sizeOfPizza + this.selectedCrust + this.totalToppingCost);
  }


$(document).ready(function(){

//front-end


$("form#pizza-form").submit(function(event) {
  event.preventDefault();

  var inputedSizeOfPizza =parseInt($("#dropdown").children("option").filter(":selected").val())
  var userSelectedCrust=parseInt($("input[name='crust']:checked").val());
  //Access the selected toppings and put them in an array
  var toppings=[];
  var userTotalToppingCost=0;
  $("input[name='toppings']:checked").each(function(){            
    toppings.push(parseInt(($(this).val())));
   
    // toppings.forEach(topping=> totalToppingCost =totalToppingCost+topping);
    userTotalToppingCost=toppings.reduce((userTotalToppingCost,topping)=>userTotalToppingCost+topping);
    
});
  var delivaryBool=$("input[name='delivary']:checked").val();
  var inputedNumberOfPizzas=parseInt($("input#how-many").val());
  var locationName=$("input#locationName").val();
  var newLocation="";
  

   //create a new object
   var newPizza= new PizzaPriceCalc(inputedSizeOfPizza,userSelectedCrust,userTotalToppingCost,inputedNumberOfPizzas);
   var newPrice=newPizza.pizzaPrice();
   function askDelivary(){
    if(delivaryBool==="true"){
      newLocation=prompt("Enter the location for delivary");
    }else{
      return false;
    }
 
   }
   askDelivary()



  $("ul#totalCost").append("<li><span class='contact'>" + newLocation + " "+ "</span></li>");
  console.log(newPrice)
  
});

});