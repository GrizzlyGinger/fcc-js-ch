//Properties defined directly on an instance object are called 'own properties'
//  each instance has its own separate copy of these properties

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
for(let property in canary) {
  ownProps.push(property);
}