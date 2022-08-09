var arrayOfCelsiusValues = [-2,34,56,-10];

var arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(value){
	//add your code here and return the new value
	if (value===0) return value + 32;
	else if (value != 0) return (value * 1.8) +32;

});

console.log(arrayOfFahrenheitValues);