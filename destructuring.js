const names = ["Fred", "Kate", "Cindy", "Ricky", "Keith"];
console.log(names);

//Creating two new variables to store two strings
//from the "names" array without the destructuring syntax
// const fred = names[0];
// const kate = names[1];
// console.log(kate);

//Using Destructuring syntax:
// const [fred, kate] = names;
// console.log(kate);
// console.log(fred);
//NOTE: []'s on the left side of the operator!!


//skip over variables by ignoring them:
// const [fred, kate, , ricky] = names;
// console.log(ricky);


//Combining the syntax with the 'spread' operator '...'
// const [fred, kate, ...remainingNames] = names;
// console.log(remainingNames);


//Object Destructuring:
//to unpack variables from objects
//So array destructuring is done by position - 
//object destructuring is done by property name
// using .notation & [] notation
const person = {
    name: "Joni",
    age: 76
}
// const name = person.name;
// const age = person["age"];

// console.log(name);
// console.log(age);

//can also access these values using destructuring
//{}'s on the left side of the assignment operator:
const { name, age } = person;
console.log(name);
console.log(age);

