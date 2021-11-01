//Constructors can accept parameters like other functions, making property assignment possible when the constructor is called

function Dog(name, color) {
  this.numLegs = 4;
  this.name = name;
  this.color = color;
}

let terrier = new Dog("Bambi", "blonde");