function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var stringToCompare = str.substring(str.length-target.length,str.length);
  return stringToCompare == target ? true : false;
  // Simplified
  //return str.substring(str.length-target.length,str.length) == target ? true: false;
}

confirmEnding("Bastian", "n");
