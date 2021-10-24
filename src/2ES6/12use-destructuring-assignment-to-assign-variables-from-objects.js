//Destructuring also allows assigning a new variable name when extracting values
//Put new name after a colon when assigning
//const { name: userName, age: userAge } = user;

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
  
// const highToday = HIGH_TEMPERATURES.today;
// const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

const { today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;

// Only change code above this line