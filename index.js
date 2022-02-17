
/*
  EXAMPLE TASK:
    - Write an Airplane class whose constructor initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` property of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property gets set to true.
        + If a plane lands, its `isFlying` property gets set to false.
*/

// EXAMPLE SOLUTION CODE:
class Airplane {
  constructor(name) {
    this.name = name;
    this.isFlying = false;
  }
  takeOff() {
    this.isFlying = true;
  }
  land() {
    this.isFlying = false;
  }
}

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1- done
    - Write a Person class whose constructor initializes `name` and `age` from arguments.
    - All instances of Person should also initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

class Person {
  constructor(name, age){           //initializing with arguments
    this.name=name;
    this.age=age;
    this.stomach=[];
  } //Person CF methods below
  eat(edible){
    if (this.stomach.length <10){
      return this.stomach.push(edible);
    }
  }
  poop(){
    this.stomach=[];
  }
  toString(){
    return `${this.name}, ${this.age}`;
  }
}

//bind object to 'this' & log out
const studentOne = new Person('V', 28);
console.log(studentOne.toString());


//fill array stomach 
studentOne.eat('taco');
studentOne.eat('chips');
studentOne.eat('salsa');
console.log(studentOne.stomach);


//empty array stomach
studentOne.poop();
console.log(studentOne.stomach);




/*
  TASK 2- HELPPPPPPP lol
    - Write a Car class whose constructor initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with a `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

class Car {
  constructor (model, mpg){
    this.model = model,
    this.mpg = mpg,
    this.tank = [],       // or 0?
    this.odometer = []
  } //Car CF methods below
  fill(gallons){
    return this.tank.push(gallons);
  }
  // drive(distance){
  //   if (this.odometer.push(distance){
  //     return --
  //   }
  // }
}


// const addmpg = 
//   this.tank.reduce(function(accumulator, item){
//     return accumulator + item.tank;
//   },0);



const carOne = new Car('honda', 10);
carOne.fill(5);
carOne.fill(1);
console.log(carOne.tank);







/*
  TASK 3 - done
    - Write a Lambdasian class.
    - Its constructor takes a single argument - an object with the following keys:
        + name
        + age
        + location
    - Its constructor should initialize `name`, `age` and `location` properties on the instance.
    - Instances of Lambdasian should be able to `.speak()`:
        + Speaking should return a phrase `Hello my name is {name}, I am from {location}`.
        + {name} and {location} of course come from the instance's own properties.
*/
class Lambdasian {
  constructor(attributes){              //initialize with object
    this.name = attributes.name,
    this.age = attributes.age,
    this.location = attributes.location
  }
  speak(){
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

const speaker = new Lambdasian({
  name: 'V',
  age: 28,
  location: 'Texas'
});

console.log(speaker.speak());









/*
  TASK 4 - done?
    - Write an Instructor class extending Lambdasian.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `specialty`: what the instance of Instructor is good at, i.e. 'redux'
        + `favLanguage`: i.e. 'JavaScript, Python, Elm etc.'
        + `catchPhrase`: i.e. `Don't forget the homies`.
    - The constructor calls the parent constructor passing it what it needs.
    - The constructor should also initialize `specialty`, `favLanguage` and `catchPhrase` properties on the instance.
    - Instructor instances have the following methods:
        + `demo` receives a `subject` string as an argument and returns the phrase 'Today we are learning about {subject}' where subject is the param passed in.
        + `grade` receives a `student` object and a `subject` string as arguments and returns '{student.name} receives a perfect score on {subject}'
*/
class Instructor extends Lambdasian{        // subclass of Lambdasian CF
  constructor(attributes){
    super(attributes);
    this.specialty = attributes.specialty;    //Child's special attributes
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
    this.subject = attributes.subject
  } // Child's methods below
  demo(subject){
    return `Today we are learning about ${subject}`;
  }
  grade(subject){
    return `${this.name} receives a perfect score on ${subject}`;
  }
}

const instructorOne = new Instructor({
  name: 'P',
  age: 18,
  location: 'California',
  specialty: 'Business',
  language: 'English',
  catchPhrase: 'hi',
  subject: 'Math'
});


console.log(instructorOne.grade('anatomy'));
console.log(instructorOne.demo('geography'));


// I set the parent constructor function to new Lambdasian instead of new instructor. instructorOne is a child of Instructor.
// unsure what this means "`demo` receives a `subject` string as an argument" so I made it an attribute instead...










/*
  TASK 5 - done
    - Write a Student class extending Lambdasian.
    - Its constructor takes a single argument -  an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `previousBackground` i.e. what the Student used to do before BloomTech
        + `className` i.e. CS132
        + `favSubjects`. i.e. an array of the student's favorite subjects ['HTML', 'CSS', 'JS']
    - The constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `previousBackground`, `className` and `favSubjects` properties on the instance.
    - Student instances have the following methods:
        + `listSubjects` a method that returns all of the student's favSubjects in a *single string: `Loving HTML, CSS, JS!`.
        + `PRAssignment` a method that receives a subject as an argument and returns `student.name has submitted a PR for {subject}`
        + `sprintChallenge` similar to PRAssignment but returns `student.name has begun sprint challenge on {subject}`
*/
class Student extends Lambdasian{
  constructor(attributes){
  super(attributes);
  this.subject = attributes.subject;
  this.previousBackground = attributes.previousBackground;
  this.className = attributes.className;
  this.favSubjects = []
  }
  addSubj(topic){
    // if (this.favSubjects.length < 5){    //don't need a loop
      this.favSubjects.push(topic);
  }
  listSubjects(){
    return `Loving ${this.favSubjects.join()}`;
  }
  PRAssignment(){
    return `${this.name} has submitted a PR for ${this.subject}`;
  }
  sprintChallenge(subj){
    return `${this.name} has begun sprint challenge on ${subj}`;
  }
}

const studentTwo = new Student({
  name: 'P',
  age: 18,
  location: 'California',
  specialty: 'Business',
  language: 'English',
  catchPhrase: 'hi',
  subject: 'Math',
  background: 'Art',
  class: 'Lambda',
});
  

studentTwo.addSubj('art');
studentTwo.addSubj('logic');
console.log(studentTwo.listSubjects());
//i forgot to call the method. i logged it instead. also forgot to make it into a single string. how do I only return the word 'loving' once?
// push topics into favSubjects empty array
// then make array into string with a different method - use .join() 



console.log(studentTwo.PRAssignment());
console.log(studentTwo.sprintChallenge('life'));
// i forgot that student didn't inherit Instructor's attributes
// i made a param so I could determine the subject











/*
  TASK 6
    - Write a ProjectManager class extending Instructor.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Instructor.
        + `gradClassName`: i.e. CS1
        + `favInstructor`: i.e. Sean
    - Its constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `gradClassName` and `favInstructor` properties on the instance.
    - ProjectManager instances have the following methods:
        + `standUp` a method that takes in a slack channel and returns `{name} announces to {channel}, @channel standy times!`
        + `debugsCode` a method that takes in a student object and a subject and returns `{name} debugs {student.name}'s code on {subject}`
*/
class ProjectManager extends Instructor{
   constructor(attributes){
     super(attributes);
     this.gradClassName = attributes.gradClassName;
     this.favInstructor = attributes.favInstructor;
   }
   standUp(name, channel){
     return `${name} announces to ${channel}, @${channel} standy times!`;
   }
   debugsCode(name, subject){
     return `${name} debugs ${this.student}'s code on ${subject}`;
   }
}

const studentThree = new ProjectManager({
  name: 'P',
  age: 18,
  location: 'California',
  specialty: 'Business',
  language: 'English',
  catchPhrase: 'hi',
  subject: 'Math',
  className: "22",
  favInstructor: "Jess"
});

console.log(studentThree.standUp('V', 'help'));
//i forgot to return the string so terminal returned 'undefined' - fixed
console.log(studentThree.debugsCode('C', 'Javascript'));



/*
  STRETCH PROBLEM (no tests!)
    - Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
    - Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
    - Add a graduate method to a student.
      + This method, when called, will check the grade of the student and see if they're ready to graduate from BloomTech
      + If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/









//End of Challenge
/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  return 'bar';
}

module.exports = {
  foo,
  Person,
  Car,
  Lambdasian,
  Instructor,
  Student,
  ProjectManager
}
