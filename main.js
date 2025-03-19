document.getElementById("Button1").addEventListener("click", orderPizza);

function orderPizza() {
  var size = prompt("What Size would you like (inches)?");
  var Topping1 = prompt("What is the first topping would you like?");
  var Topping2 = prompt("What is the second topping would you like?");
  var spInstruct = prompt(
    "Are there any special instructions? (Type N/A if No)"
  );
  var Address = prompt("What adress will this be delivered to?");

  var output = `Your ${size}in Pizza with ${Topping1} and ${Topping2}. It will be delivered to ${Address} in 15min!`;
  alert(output);
}
