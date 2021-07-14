// VARIABLES

let bill = $(".bill");
let tip = $(".custom");
let tipB = $("button.tip-btn");
let pNum = $(".people");
let reset = $(".reset-btn");
let billValue = 0;
let tipValue = 0;
let numPerson = 1;


// BILL CALCULATION FUNCTION

function calcBill () {

  let tipTotal = (billValue*tipValue).toFixed(2);
  let tipPerP = (tipTotal/numPerson).toFixed(2);

  $(".total h1").text(String("$" + tipTotal));
  $(".tip h1").text(String("$" + tipPerP));

}


// BILL INPUT

bill.keyup(function(event) {

  billValue = bill.val();

  if (billValue < 0) {
    bill.addClass("invalid");
    bill.removeClass("valid");
    alert("Value cannot be less than 0");
    billValue = 0;
  }

  else if (billValue === "") {
    billValue = 0;
    calcBill();
    bill.removeClass("valid invalid");
  }

  else {
    bill.addClass("valid");
    bill.removeClass("invalid");
    calcBill();
  }

});


//TIP INPUT

tip.keyup(function(event) {

  tipValue = (tip.val())/100;

  if (tipValue < 0) {
    tip.addClass("invalid");
    tip.removeClass("valid");
    alert("Value cannot be less than 0");
    billValue = 0;
  }

  else if (tipValue === "") {
    tipValue = 0;
    calcBill();
    tip.removeClass("valid invalid");
  }

  else {
    tip.addClass("valid");
    tip.removeClass("invalid");
    calcBill();
  }

});

tipB.each(function() {

  let tipI = $(this);
  tipI.click(function(event){

    let percentage = (Number(tipI.text().slice(0,-1)))/100;
    tipValue = percentage;
    calcBill();

  });});


// PERSON INPUT

pNum.keyup(function(event) {

  numPerson = pNum.val();

  if (numPerson < 1 && numPerson !== "") {
    pNum.addClass("invalid");
    pNum.removeClass("valid");
    numPerson = 1;
    alert("Value cannot be less than 1");
  }

  else if (numPerson === "") {
    numPerson = 1;
    calcBill();
    pNum.removeClass("valid invalid");
  }

  else {
    pNum.addClass("valid");
    pNum.removeClass("invalid");
    calcBill();
  }

});


// RESET BUTTON

reset.click(function(event) {

  billValue = 0;
  tipValue = 0;
  numPerson = 1;

  $(".tip h1").text("$0.00");
  $(".total h1").text("$0.00");

  $(".input-field").each(function(){
    $(this).removeClass("valid invalid");
    $(this).val("");

  });});
