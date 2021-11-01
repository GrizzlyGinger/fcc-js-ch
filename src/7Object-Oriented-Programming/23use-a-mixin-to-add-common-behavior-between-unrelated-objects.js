//Behavior is shared through inheritance, but inheritance does not work well for unrelated objects that may have similar methods or properties
//Mixins allow other objects to use a collection of functions and are a better method for unrelated objects 
//  mixins allow methods to be reused by other unrelated objects

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line

let glideMixin = function(obj) {
  obj.glide = function() {

  }
}

glideMixin(bird);
glideMixin(boat);