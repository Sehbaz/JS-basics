// Only variable x is hoisted not the assigment
var x = 10;
// Function Declared are hoisted
function sum(a, b) {
  return a + b;
}
//only ' var sum ' is hoisted
var sum = function(a, b) {
  return a + b;
};

var example = 5; // Assign value
console.log(example); // expect output :5
var example; // Declare variable
