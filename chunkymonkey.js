function chunkArrayInGroups(arr, size) {
  // Break it up.
  var arrTempo = [];
  var numVueltas = Math.ceil(arr.length/size);
  console.log("numero de vueltas: "+ Math.ceil(arr.length/size));
  while(arr.length>0){
    //for(var cont = 0; cont < size; cont++){

    //}
    arrTempo.push(arr.splice(0,size));
    console.log("Ahora ArrTempo vale"+arrTempo);
  }
  console.log("arrTempo vale: "+arrTempo);
  return arrTempo;
}

//chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
