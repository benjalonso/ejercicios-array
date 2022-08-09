let allColors = [
	{ label: 'Red', sexy: true },
	{ label: 'Pink', sexy: false },
	{ label: 'Orange', sexy: true },
	{ label: 'Brown', sexy: false },
	{ label: 'Pink', sexy: true },
	{ label: 'Violet', sexy: true },
	{ label: 'Purple', sexy: false },
  ];
  
  function generateLI(color) {
	let tagInicio = "<li>";
	let tagFin = "</li>";
	let colour = color.label;
	let resultado = tagInicio + colour + tagFin;
	return resultado
  }
  
  function filterColors(color) {
	if (color.sexy == true) {
	  return color
	}
  
  }
  
  function generateHTMLFromArray(array) {
  
	let filteredOptions = array.filter(filterColors);
	let LIs = filteredOptions.map(generateLI);
	let htmlString = '<ul>';
	LIs.forEach(function (elm) {
	  htmlString += elm;
	})
	htmlString += '</ul>';
	return htmlString;
  }
  
  console.log(generateHTMLFromArray(allColors));