let tasks = [
	{ label: 'Eat my lunch', done: true },
	{ label: 'Make the bed', done: false },
	{ label: 'Have some fun', done: false },
	{ label: 'Finish the replits', done: false },
	{ label: 'Replit the finishes', done: true },
	{ label: 'Ask for a raise', done: false },
	{ label: 'Read a book', done: true },
	{ label: 'Make a trip', done: false }
];

let doneTask = tasks.filter(function(value){
	if( value.done === true) return value
});
console.log(doneTask);
//your code here
/*let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

let newArray = theBools.map(function(value){
    if (value == 1) return "wiki";
    else if (value == 0) return "woko";
});

console.log(newArray);
*/
