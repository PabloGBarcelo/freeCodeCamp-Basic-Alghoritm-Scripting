
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var arr2=[];
  var arr3="";
  arr.sort(function (a, b) {  return a - b;  });
  //console.log("Analizando arr: "+arr+" con num "+num);
  for(var cont = 0; cont < arr.length; cont++){
    if (arr[cont] >= num){
      arr3=cont;
      break;
    }else{
      arr3=arr.length;
    }
  }
  return arr3;
  /* FIRST TRY
  arr.reduce(function(val,actNum,index){
    if (val == num && index==1){
      console.log("Estoy devolviendo 0");
      arr2.push(0);
      return 0;
    }
    while (actNum >= num){
      arr2.push(index);
      return index;
    }
  });
  //return num;
  if (arr2.length == 0){
    return arr.length;
  }
  else{
    return arr2[0];
  }
  */

}

getIndexToIns([40, 60], 50);
