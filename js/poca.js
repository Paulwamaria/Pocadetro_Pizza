//Decrare variables
var costBySize;
var costOfCrust;
var costOfToppings;
var costOfDelivary=250;
var numberOfPizzas;
var newPrice;
var totalCost=0;
var selectedCrustName;

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

  var inputedSizeOfPizza =parseInt($("#dropdown").children("option").filter(":selected").val());
  var inputedSizeName=$("#dropdown").children("option").filter(":selected").text();
  var userSelectedCrust=parseInt($("input[name='crust']:checked").val());
  //get the name of the selected radioButton
  $("input[name='crust']:checked").each(function(){
    var idVal = $(this).attr("id");
     selectedCrustName=$("label[for='"+idVal+"']").text()
  })
 

  //Access the selected toppings and put them in an array
  var toppings=[];
  var toppingNames=[];
  var userTotalToppingCost=0;
  $("input[name='toppings']:checked").each(function(){            
    toppings.push(parseInt(($(this).val())));
   
    // toppings.forEach(topping=> totalToppingCost =totalToppingCost+topping);
    userTotalToppingCost=toppings.reduce((userTotalToppingCost,topping)=>userTotalToppingCost+topping);

   
    
});

 //Get the tooping names
 $("input[name='toppings']:checked").each(function(){
  var idValue = $(this).attr("id");
  toppingNames.push($("label[for='"+idValue+"']").text() +" topping @ "+ parseInt(($(this).val())) );
 });
//  toppingNames.forEach(function(toppingName){
//   $("ul#totalCost").append("<li><span class='contact'>" +"You selected " +toppingNames + "ksh"+"</span></li>");
//  });

  var delivaryBool=$("input[name='delivary']:checked").val();
  var inputedNumberOfPizzas=parseInt($("input#how-many").val());
  var locationName=$("input#locationName").val();
  var newLocation="";
  

 
   //delivary options
   function askDelivary(){
    if(delivaryBool==="true"){
      newLocation=prompt("Enter the location for delivary");
    }else{
      return false;
    }
 
   }
   askDelivary()

     //create a new object

     //findindig the overall cost
     function fullCost(){
      var newPizza= new PizzaPriceCalc(inputedSizeOfPizza,userSelectedCrust,userTotalToppingCost,inputedNumberOfPizzas);
      newPrice=newPizza.pizzaPrice();
      if(delivaryBool==="true"){
         totalCost= newPrice + costOfDelivary;
         $("ul#totalCost").append("<li><span class='contact'>" +"You requested for delivary at location " +newLocation + " at a fixed charge of "+costOfDelivary+ " ksh"+"</span></li>"); 
      }else{
        totalCost=newPrice;
      }
      return totalCost;
     }
     fullCost();


     //display output
     $(".output").show();

     $("ul#totalCost").append("<li><span class='contact'>" +"You selected " +toppingNames + "ksh"+"</span></li>");  
  $("ul#totalCost").append("<li><span class='contact'>" +"You selected " +inputedSizeName + " pizza @ "+inputedSizeOfPizza+ "ksh"+"</span></li>");
  $("ul#totalCost").append("<li><span class='contact'>" +"You orderd " +inputedNumberOfPizzas +" "+inputedSizeName+" pizza @ "+inputedSizeOfPizza+ "ksh"+"</span></li>"); 
  $("ul#totalCost").append("<li><span class='contact'>" +"You selected " +selectedCrustName + " crust type @ "+userSelectedCrust+ "ksh"+"</span></li>");
  $("ul#totalCost").append("<li><span class='contact'>" +"Total cost is: "+ totalCost+ " "+ "ksh"+"</span></li>");
 
  
});

});