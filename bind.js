function target(technology1, technology2, method) {
    console.log('method:' + method);
    console.log(this.language + " requires " + technology1 + " and " + technology2);
    console.log();
}

let js = {
    language: 'JavaScript'
};

let java = {
    language: "Java"
};

let python = {
    language: 'Python'
};

// target();
target.call(js, 'CSS', 'HTML', 'call()');
target.apply(java, ['Spring', 'Hibernate', 'apply()']);

let bindFunction = target.bind(python); //delayed call
bindFunction('Django', 'PIP', 'bind()');

function save() {

    let table = document.getElementById('paragraphs');
    let row = table.insertRow();

    let p = document.createElement('p');
    let input = document.getElementById('paragraph');
    p.innerText = input.value;
    row.insertCell().appendChild(p);

    let button = document.createElement('button');
    button.innerText = 'Delete';

    //addEventListener(event type, function declaration | callback)
    button.addEventListener('click', removeSelfElement.bind(row, input.value));


    row.insertCell().appendChild(button);
    input.value = '';
}

let person = {
    remove: function () {
        console.log('person remove method was called');
    }
};

let notPerson = {
    name: 'Alien'
};

// let anotherBindFunction = removeSelfElement.bind(notPerson, '\u0447\u0442\u043e\u002d\u0442\u043e \u0441\u044e\u0434\u0430');
let anotherBindFunction = removeSelfElement.bind(document.getElementById('paragraph'), 'abc');
anotherBindFunction();

function removeSelfElement(paragraph) {
    alert('Element ' + paragraph + ' was deleted');
    //button.remove()
    //input.remove()
    //table.remove()
    //HTML element.remove()

    //person.remove()
    //notPerson.remove() - error

    this.remove();
}


//call and apply - вызывает функцию сразу
//bind - возвращает копию оригинальной функции, которую нужно отдельно вызвать
//bind состоит из 2 частей:
// - 1 - объявление с параметрами и контекстом
// - 2 - вызов