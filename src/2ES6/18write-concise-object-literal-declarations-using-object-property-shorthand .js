//ES6 provides syntactic sugar to remove the need for reduntant writing of property; property

const createPerson = (name, age, gender) => {
  // Only change code below this line
  // return {
  //   name; name,
  //   age; age,
  //   gender; gender
  // };
  return ({ name, age, gender });

  // Only change code above this line
};