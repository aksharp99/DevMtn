//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
  function isTyler(name) {

    if (name === 'Tyler') {
      return true;
    } else {
      return false;
    }
  }
isTyler();
//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

function getName() {
  return prompt("What is your name?");
}
getName();
  //Code Here


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome() {
  var name = getName();
  alert("Welcome, " + name);
}

welcome();


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Parameter is variable in the declaration of a function.
  //Argument is the actual value of this variable that gets passed to function.


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
  //The six falsy values in javascript are 0, null, '', false, undefined, NaN
  //If its not truthy its falsy. I would use an if statement. if (0) {alert('ALERT');}
  // if the if statement above does not execute, we know its falsy.



//////////////////PROBLEM 6////////////////////



//Create a function called myName that return the name variable

function myName() {
  return name;
}
//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName;
//Now alert the result of invoking newMyName

alert(newMyName);

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

// function outerFn() {
//
//
//
//   // var anon = function() {
//   //   return alert("This is "+name);
//   // };
//   // anon();
// }
// outerFn();

function outerFn() {
  return function() {
    return name;
  }
}

//Now save the result of invoking outerFn into a variable called innerFn.

  var innerFn = outerFn();

//Now invoke innerFn
innerFn();
