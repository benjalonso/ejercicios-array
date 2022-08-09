let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];


let simplifier = function(person){
    function getEdad (fechaString) {
        let today = new Date()
        let age = today.getFullYear() - person.birthDate.getFullYear()
        return age;
    }
    
    
	return " Hello, my name is "+person.name+" and I am "+ getEdad() +" years old.";
};

console.log(people.map(simplifier));








/*let names = ['Alice','Bob','Marry','Joe','Hilary','Stevia','Dylan'];

let prepender = function(name){
	return 'My name is: '+name;
};
let newArray = names.map(prepender);
console.log(newArray)*/