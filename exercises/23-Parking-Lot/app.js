let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]
function getParkingLotState (contenido){
  let finalState = {totalSlots: 0,
    availableSlots: 0,
    occupiedSlots:0}
  for(let i=0; i<contenido.length; i++){
      for(let j=0; j<contenido.length; j++){
        if(contenido[i][j]== 1) {
          finalState.occupiedSlots +=1, finalState.totalSlots +=1}
        else if(contenido[i][j]== 2) {
          finalState.availableSlots +=1, finalState.totalSlots +=1}
     }
  }
return finalState
}
console.log(getParkingLotState(parking_state))

