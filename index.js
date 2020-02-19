//.call - .apply
//.bind

//static vs object
function printName() {

}

Person(); //new object = new context

function Person() {
    console.log(this);
}

//this = window


//printName(); //static
//new printName(); //object



let person1 = {
    firstName: 'John',
    lastName: 'Smith'
};

let person2 = {
    firstName: 'Anna',
    lastName: 'Doe'
};

let employee = {
    lastName: 'Smith',
    position: 'Developer'
};

function someFunction() {
    console.log('First Name:' + this.firstName);
    console.log('Last Name:' + this.lastName);
}

someFunction.call(employee);

//.call .apply
//call
//1. вызывает функцию
//2. принимает ПЕРВЫМ аргументом - контекст (object)



function paintElement(backgroundColor, borderColor) {
    //this = button
    this.style.backgroundColor = backgroundColor;
    this.style.borderColor = borderColor;
}

//Function
// let f = function () {
//
// };
// f.call()
// f.apply()
// f.bind()


function trigger() {
    let buttons = document.getElementsByTagName('button');
    for (let button of buttons) {
        paintElement.call(button, 'lightblue', 'lightgreen');

        let parametersForMyFunction = ['lightblue', 'lightgreen'];
        paintElement.apply(button, parametersForMyFunction);
    }
}