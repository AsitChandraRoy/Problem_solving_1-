// 1. What will be the output of the following code and why?
// function scopeTest() {
//     if (true) {
//       var varVariable = "I am var";
//       let letVariable = "I am let";
//       const constVariable = "I am const";
//     }
//     console.log(letVariable);
//     console.log(constVariable);
//     console.log(varVariable);
//   }

//   scopeTest();

// Because:
  // var: varVariable block-scoped noy, eti function-scoped tai eti samasto scopeTest() function er vitor accessible thake . tai eti terminal e run hoechhe.

  //the other hand, let & const block-scope; era shudu sei block({ }) er vitare accessible jei block er vitor assign kara hoechhe. jehetu eder call kora hoechhe oi blocker baire, tai terminal e ReferenceError dibe.

// 2.  Write a function greet that takes two parameters, name and greeting.
  // greeting should have a default value of "Hello". If only the name is provided,
  // the function should return the greeting followed by the name. If both are provided,
  // it should return the custom greeting followed by the name.
  function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
  }

  console.log(greet("Alice")); // "Hello, Alice!"
  console.log(greet("Bob", "Good morning")); // "Good morning, Bob!"




// 3.  Write a function sum that takes any number of arguments and returns their sum using the rest parameter.
function sum(...args) {
  let total = 0;
  for (const a of args) {
      total += a;
  }
  return total;
}

  console.log(sum(1, 2, 3)); // 6
  console.log(sum(10, 20, 30, 40)); // 100
  console.log(sum(5)); // 5


// 4.  Given the following arrays, use the spread operator to merge them into a new array mergedArray.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

// Your code here
let mergedArray = [...array1,...array2,...array3]
console.log(mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


// 5.  Write an object person using the object literal syntax extensions.
// The object should have properties name and age, and a method greet that returns a greeting message.
{const name = "John";
const age = 30;

// Your code here
const person = {
  greet() {
    console.log(`Hi, I'm ${name} and I'm ${age} years old.`) // OR
    console.log("Hi, I'm " + name + " and I'm " + age + " years old." )
  }
}
console.log(person.greet()); // "Hi, I'm John and I'm 30 years old."
}

// 6.  Write a for...of loop to iterate over the following array and print each element to the console.
const fruits = ["apple", "banana", "cherry"];

for (let f of fruits) {
  console.log(f);
}


// 7  Use template literals to create a string that includes variables name and age.
{const name = "Alice";
const age = 25;

// Your code here
const message = `My name is ${name} and I am ${age} years old.`;
console.log(message); // "My name is Alice and I am 25 years old."
}

// 8  You have an array of objects representing students and their grades.
// Use a for...of loop to iterate over the array and print each student's name and grade.
const students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 85 },
  { name: "Charlie", grade: 92 }
];

// Your code here

for (let  {name, grade} of students) {
  console.log(`${name}: ${grade}`)
}
//OR
for (const student of students) {
  console.log(`Name: ${student.name}, Grade: ${student.grade}`);
}


// 9  You have a nested array of numbers. Use a for...of loop to iterate over each inner array and print the sum of its elements.
const nestedArrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Your code here
for (let array of nestedArrays) {
  let total = 0;
  for (let digit of array) {
    total += digit;
  }
  // console.log(total);
  console.log(`The sum of [${array}] is ${total}`);
}


// 10  Use template literals to create a string that includes variables a and b, as well as the result of their addition.
const a = 5;
const b = 10;

// Your code here
const result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result); // "The sum of 5 and 10 is 15."
