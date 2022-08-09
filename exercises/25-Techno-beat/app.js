// Add your code here
function lyricsGenerator (valor) {
    let ritmo = " ";
    for(let i = 0; i<valor.length; i++ ){
      if(valor[i] == 0) ritmo+= "Boom "
      if(valor[i] == 1) ritmo+="Drop the base "
      if(valor[i-1] === 1 && valor[i-2] === 1 && valor[i] === 1 ) ritmo+="!!!Break the base!!! "
  
    }
  return ritmo
  }
  
  // Don't change anything bellow this line
  console.log(lyricsGenerator([0,0,1,1,0,0,0]))
  console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
  console.log(lyricsGenerator([0,0,0]))
  console.log(lyricsGenerator([1,0,1]))
  console.log(lyricsGenerator([1,1,1]))