
// write a variable that is a string and output to console (hint: it's console.log(variable name))

let myString = "Hi!";
console.log("String",myString);

// write a variable that is a number and output to console (hint: it's console.log(variable name))

let myNum = 10;
console.log("Number:",myNum);

// write a variable that takes any two numbers and adds them 

let myAddition = 10 + 10;
console.log("Addition:",myAddition);

// write a variable that takes any two numbers and subtracts them and output to console

let mySubtraction = 20 - 10;
console.log("Subtraction:",mySubtraction);

// write a variable that takes any two numbers and performs a modulo that has a value of 1  and output to console 

let myModulo = 20 % 8;
console.log("Modulo:",myModulo);

// write a variable that takes any two numbers and perform an exponential value and output to console 

let myExponent = 5 ** 2;
console.log("Exponent:",myExponent);

// write a statement that is false using a conditional statement and output to console 

let isFalse = 5 < 2;
if(!isFalse){
    console.log("This statement is", isFalse);
}

// I have created an object below, output to console the value of "breed" (hint: the structure is ObjectName.value you want to call)
// the keyword "this" is self referencing the object 

let siggy = {
    breed : "cat", 
    baby: "big baby", 
    fluffy: "fluffy", 
    output: function() {

        return `Siggy is a ${this.breed} that is a ${this.fluffy} ${this.baby}`

    }
}

console.log(siggy.breed);

// methods! You call methods the same way you call a function.  I'll call siggy.output() below. 

console.log(siggy.output()); 

// copy + paste the siggy object below and rename the variable from Siggy to an animal or name of your choice 
// then, I want you to change the object to the value of your choosing  

let benson = {
    breed : "dog", 
    baby: "chonky baby", 
    fluffy: "furry", 
    output: function() {

        return `Benson is a ${this.breed} that is a ${this.fluffy} ${this.baby}`

    }
}

// console.log the values of that object one by one. 

console.log(benson.breed);
console.log(benson.fluffy);
console.log(benson.baby);

// create an array 

let favAnimals = ["Dogs", "Cats", "Raccoons", "Pandas", "Beluga Whales", "Birds"];

// call the value in the 3 position of this array and output to console 

let someArray = ["Ishrat", "Is", "Really", "Proud", "Of", "You"]

console.log(someArray[2]);

// call all values in the array using a loop 

for(let i = 0; i < someArray.length; i++){
    console.log(someArray[i]);
}

// what is the value of the variable ifStatement, leave your answer in the console. 

let ifStatement; 
let value = 5; 

if(value < 5)
{
    ifStatement = true;
}

else{
    ifStatement = false; 
}
console.log("The statement is not true so it is",ifStatement);