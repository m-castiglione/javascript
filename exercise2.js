//Complete the following problems:

/************************************************************* */
// Problem 1: Refactor the for() loop to be a while loop.
//

for(let i=0; i<10; i++) {
    console.log(" the value of i in the loop is : " + i);
}


//your code...
while(i < 10)
{
    console.log(" the value of i in the loop is : " + i);
    i++;
}



/************************************************************* */
// Problem 2:
// multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
//use javascript to compute the value of the above statement. Each individual operation needs to be a function expression. run all the functions after defining them, and print the answer to the console.

//your code...
let product = function(num1, num2, num3) {
    return (num1 + num2) * num3;
  }
  
  let afterPowers = function(num1, num2) {
    return Math.pow(num1, num2);
  }
  
  let quotient = function(num1, num2) {
    return num1 / num2;
  }
  
  quotient(product(30,2,20), afterPowers(10, 2));

/************************************************************* */
//Problem 3:
//Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation.
// values : 
// 20
// 0
// "zero";
// const zero = 20;
// null
// "0"
// !""
// {}
// () => {console.log("hello TEKcamp!");
// 125
// undefined
// ""

console.log('20 is truthy because it is a value');
console.log('0 is falsy because it is zero');
console.log('"zero" is truthy because it is a string');
console.log('const zero = 20; is truthy because the value is 20 which is truthy');
console.log('null is falsy since there is no value');
console.log('"0" is truthy because it is a string value');
console.log('!"" is truthy because a not operator followed by an empty literal equates to true');
console.log('{} is truthy because it is an empty object');
console.log('() => {console.log("hello TEKcamp!")); is truthy because its a hashmap');
console.log('125 is truthy because it is a value');
console.log('undefined is falsy since it has no value');
console.log('"" is falsy because it is an empty literal');

/************************************************************* */
// Problem 4:
// Refactor the following code using a switch statement:

const day = "friday";

if(day === "monday") {
    console.log("we got a long week ahead of us...");
} else if(day === "tuesday") {
    console.log("tuesday's are still beterr than mondays, but LONG way to go still");
} else if (day === "wednesday") {
    console.log("We are smack dab in the middle of the week");
} else if (day === "thursday") {
    console.log("Thursday night... the mood is right");
} else if (day === "friday") {
    console.log("TGIF.  Friday truly is the best day of the week!")
} else {
    console.log("It's a weekend!")
}

switch(day)
{
    case "monday":
        console.log("we got a long week ahead of us...");
        break;
    case "tueday":
        console.log("tuesday's are still beterr than mondays, but LONG way to go still");
        break;
    case "wednesday":
        console.log("We are smack dab in the middle of the week");
        break;
    case "thursday":
        console.log("Thursday night... the mood is right");
        break;
    case "friday":
        console.log("TGIF.  Friday truly is the best day of the week!");
        break;
    default:
        console.log("It's a weekend!");
        break;
}

/************************************************************* */
// Problem 5: Refactor the following functions to use a ternary expression:
const age = 10;
if (age > 21) console.log("adult"); else {
    console.log("minor");
}

if (age > 13 && age < 19) console.log('teen'); else {
    console.log("not a teenager");
};

if (age > 65) console.log("retired"); else {
    console.log("still working...");
}


age > 21 ? 'adult' : 'minor';
age > 13 && age < 19 ? 'teen' : "not a teenager";
age > 65 ? "retired" : "still working...";

/************************************************************* */
// Problem 6: Create an object literal that represents yourself.  set it to a variable that appropriately describes the object.  Include the following properties:
/*
-name
-age
-gender
-hobbies
-profession
-education

-add a method on your object, named learn. the learn method should print the value of the name property using the 'this' keyword.

-add another method on your object of any action you want to perform, using some property that exists on your object, making sure to utilize the 'this' keyword.
*/

//your code...

var object = {
    name: 'Matthew Castiglione',
    age: 24,
    gender: 'Male',
    hobbies: 'Gaming, Programming, Model Gundams',
    profession: 'Full Stack Java Developer In Training',
    education: 'Bachelors of Science in Computer Science',
    learn: function() {
        return this.name;
    },
    getEducation: function () {
        return this.education;
    } 
};



/************************************************************* */
// Problem 6: Create an object literal that represents any object in the real world that you like.  Try to come up with a realistic set of properties and methods that would accurately describe that object.  In at least one of your methods, use the this keyword to refer back to one of the properties you defined on this object literal.  

//your code...

var myPC = {
    graphicsCard: "MSI Gaming X Trio Nvidia RTX 2070 Super",
    processor: "AMD Ryzen 7 3800x",
    motherBoard: "MSI MEG x570 ACE",
    memory: "Corsair Vengence RGB 32 GB @ 3200 Mhz",
    case: "MSI Sekira",
    storage: "Samsung Evo 980 Pro 500GB",
    cpuCooler: "AMD Ryzen Wraith RGB",
    monitor: "ASUS PB277Q",
    keyboard: "Razer Black Widow Elite",
    mouse: "Corsair Glaive RGB",
    powerSupply: "Corsair 800RMX",
    currentFanColor: "Blue",
    poweredOn: true,
    powerButton: function(poweredOn) {
        switch(poweredOn) {
            case true:
                poweredOn = false;
                break;
            case false:
                poweredOn = true;
                break;
        }
    }
}

/************************************************************* */
//Problem 7: create a function that outputs your 3 favorite data types, with a message explaining why you like that data type.

//your code...

var myFavDataTypes = function() {
    console.log("One of my favorite data types is Number because programming is just 1s and 0s. My favorite number being " + 42);
    console.log("Another data type that I like is Boolean because it can only be true or false. Not really confusing" + true);
    console.log("My last favorite data type is String because of all the cool functions it can use");
}

/************************************************************* */
//Bonus assignments:

//1. Create a Higher Order Function called multiple(x) that takes a single parameter.  This HOF should return another function fn(y) that takes another single parameter y.  This inner function should compute the product of it's parameter with the parameter passed into multiple.  Use this returned "first-class" function to compute triples of any given number.

//your code...


// 2. Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable called message that holds " is how much the stock has increased".  Return an inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%. Console log your calculation.
// Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis and a number for the number of years.  Run the function returned by the higher order function to display the future value of the stock.  

//your code...


