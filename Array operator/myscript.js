//PUSH
var arr = [1, 2, 3];
arr.push(4);
// arr is now [1,2,3,4]

//POP
var arr = [1, 2, 3].pop();
// arr becomes [1,2]

//SHIFT
var arr = [1, 2, 3].shift();
// arr becomes [2,3]

//UNSHIFT
var arr = [1, 2, 3];
arr.unshift[4];
// arr becomes [4,1,2,3]

//SLICE
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
// citrus is ["Orange", "Lemon"]

//FOREACH
var color = ["red", "green", "blue"];
function print(val) {
  console.log(val);
}
color.forEach(print);
//red
//green
//blue

//MAP
var color = ["red", "green", "blue"];
function capitalize(val) {
  return val.toUpperCase();
}
var capitalisedColor = color.map(capitalize);
// ['RED','GREEN','BLUE']

//FILTER
var value = [2, 4, 6, 8];
function lessThen5(val) {
  return val < 5;
}
var valueLessThan5 = value.filter(lessThen5);
// [2,4]

//FIND
var ages = [2, 10, 18, 22, 50];
function checkAdults(val) {
  return val >= 18;
}
var firstAdult = ages.find(checkAdults);
//18

//EVERY
var ages = [22, 33, 44, 55];
function checkAdult(age) {
  return age >= 18;
}
console.log(ages.every(checkAdult));
//false

//SOME
var ages = [3, 10, 18, 20];
function checkAdult(age) {
  return age >= 18;
}
console.log(ages.some(checkAdult));
//true

//RESDUCE
var numbers = [65, 44, 12, 4];
function getSum(total, num) {
  return total + num;
}
console.log(ages.reduce(getSum));
//125
