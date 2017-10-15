function rot13(str) { // LBH QVQ VG!
  var cadenaLegible=[];
  var suma=0;
  for(var cont=0; cont < str.length; cont++){
    //console.log("Entrada: ")
    if(str[cont]>= "A" && str[cont]<="M"){
      suma = 13;
    }else if (str[cont]>"M" && str[cont]<="Z"){
      suma = -13;
    }
    if (str[cont]>="A" && str[cont]<="Z"){
      cadenaLegible.push(String.fromCharCode(str.charCodeAt(cont)+suma));
    }else{
      cadenaLegible.push(str[cont]);
    }
  }
  console.log(cadenaLegible);
  return cadenaLegible.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
