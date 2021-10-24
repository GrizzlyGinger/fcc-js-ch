//Destructuring assignment neatly assigns values taken directly from an object
//  const { name, age } = user; 
//  instead of 
//  const name = user.name;
//  const age = user.age;
//Can extract as many or as few values as needed

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

// const today = HIGH_TEMPERATURES.today;
// const tomorrow = HIGH_TEMPERATURES.tomorrow;

const { today, tomorrow } = HIGH_TEMPERATURES;

// Only change code above this line