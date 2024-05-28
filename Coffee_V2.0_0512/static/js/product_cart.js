// Realize the color change of the like icon
$(function () {
  $(".like_before").click(function () {
    $(this).toggleClass('like_after');
  })
})

// Subtract function
function minus(index) {
  // Get the current quantity value
  var amounts = document.getElementsByName("amount");

  // Get the value of the first amount element
  var count = parseInt(amounts[index].value); // Quantity - 1

  if (count <= 1) {
    alert("The quantity of the product cannot be less than 1 piece!");
  } else {
    // Get the value of the first amount element
    var count = parseInt(amounts[index].value) - 1; // Quantity - 1

    // Rebind the count value to the quantity text box
    amounts[index].value = count;
    var prices = document.getElementsByName("price");
    var price = parseFloat(prices[index].value);
    // Multiply by Math.pow(10, 2) to avoid precision loss
    var totalMoney = ((price * Math.pow(10, 2)) * count) / Math.pow(10, 2);

    document.getElementById("price" + index).innerHTML = "$" + totalMoney.toFixed(1);
  }

  total();
}


// Addition function
function plus(index) {

  // Get the current quantity value
  var amounts = document.getElementsByName("amount");

  // Get the value of the first amount element
  var count = parseInt(amounts[index].value) + 1; // Increase the quantity by 1

  // Rebind the count value to the quantity text box
  amounts[index].value = count;

  // The price of the current item needs to be recalculated
  // Get the unit price of the current item
  var prices = document.getElementsByName("price");
  var price = parseFloat(prices[index].value);
  // Multiply by Math.pow(10, 2) to avoid precision loss
  var totalMoney = ((price * Math.pow(10, 2)) * count) / Math.pow(10, 2);

  // Display the current price in the text
  document.getElementById("price" + index).innerHTML = "$" + totalMoney.toFixed(1);

  total();
}


// Calculate the total amount
function total() {

  // Get all quantities
  var counts = document.getElementsByName("amount");

  // Get all unit prices
  var prices = document.getElementsByName("price");

  var sumMoney = 0;

  for (var i = 0; i < counts.length; i++) {

    // Multiply by Math.pow(10, 2) to avoid precision loss
    sumMoney += (parseFloat(prices[i].value) * Math.pow(10, 2) * parseInt(counts[i].value) / Math.pow(10, 2));
  }

  // Display the total amount in the specified element
  document.getElementById("totalPrice").innerHTML = "$ " + sumMoney.toFixed(1);

}

// Delete function
function deleteRow(element) {
  if (confirm("Are you sure you want to delete it?")) {
    // Find the parent <tr> element of the element
    var row = element.parentNode.parentNode;
    row.parentNode.removeChild(row);
    alert("Successfully deleted!");
  }
  total();
}


window.onload = function () {
  total();
};





