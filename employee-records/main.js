// You are to create a collection of employee's information for your company. Each employee has the following attributes:

// 1. Name
// 2. Job title
// 3. Salary
// 4. Status

// First, you will create an empty array named `employees`

// Next, you will create an `Employee` constructor with the first three attributes defined at the time of instantiation and the fourth will be defaulted to `"Full Time"`.

// This constructor will also have a method called `printEmployeeForm` that prints the employee's information to the console.

// (e.g. `"Name: Bob, Job Title: V School Instructor, Salary: $3000/hour, Status: Part time"`)

// You will then:

// 1. Instantiate three employees
// 2. Override the status attribute of one of them to either "Part Time" or "Contract"
// 3. Call the `printEmployeeForm` method for each employee
// 4. Put the generated employees into the `employees` array using whichever method you prefer.

// Here's a refresher for the constructor syntax. Attempt writing yours without using the following code:

// Constructor Functions
 
// They build objects
// "new" - instantiates the object

// function Car(make, model, year, honkSound){
//     this.make = make
//     this.model = model
//     this.year = year
//     this.honkSound = honkSound
//     // this.honk = function(){
//     //     console.log(this.honkSound)
//     // }
//  }
  
//  var jeep = new Car("Jeep", "Cherokee", 1995, "MEEERRRP")
//  var mazda = new Car("Mazda", "3 hatchback", 2015, "BLAAARP")
  
  
//  Car.prototype.honk = function(){
//      console.log(this.honkSound)
//  }
//  jeep.honk()
//  mazda.honk()
 
var employees = [];

function Employee (name, jobTitle, salary, statusType){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.statusType = statusType
    // this.status = function(){
    //     console.log(this.statusType)
    // }
 }
  
 var ed = new Employee("Ed", "CEO", 150000, "Full Time")
 var edd = new Employee("Edd", "CTO", 125000, "Part Time")
 var eddy = new Employee("Eddy", "CPO", 115000, "Contract")
  
  
 Employee.prototype.status = function(){
     console.log(this.statusType)
 }

 //ed.status()
 //edd.status()
 //eddy.status()

//  var printEmployeeForm = carl + yoda + gerald

//  for (var i = 0; i < printEmployeeForm.length; i++) {
//     console.log([i])

//  }

//console.log(ed)

employees.push(ed)
employees.push(edd)
employees.push(eddy)

var printEmployeeForm = employees
console.log(printEmployeeForm)