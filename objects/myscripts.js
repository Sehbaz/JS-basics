// It is consider a good practice to name constructor with upper-case first letter
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// With a constructor function you can use 'new' keyword to create new objects
var myFather = new Person("Rafik", "Nizam", "54", "Black");
var myMother = new Person("Nargis", "Rafik", "39", "Blue");

//The JavaScript prototype property allows you to add new properties to an existing prototype

Person.prototype.nationality = "English";

Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};
