// complete this js code
function Person(name, age) {
	this.name=name;
	this.age=age;
	greet(){
		console.log(`Hello, my name is ${name}, I am ${age} years old`);
		
	}
}

function Employee(name, age, jobTitle) {
Person.call(this, name,age);
this.jobtitle=jobtitle;
	jobGreet(){
		console.log(`Hello, my name is ${name},Iam ${age} years old, and my job title is ${jobtitle}` );
	}
}
Employee.prototype=Object.create(Person.prototype);
Employee.prototype.constructor=Employee;
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
