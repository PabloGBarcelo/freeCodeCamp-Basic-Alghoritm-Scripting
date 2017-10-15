function destroyer(arr) {
  // Remove all the values

  var arrayToCompare = Array.from(arguments).slice(1);
  return arr.filter(function(word){
    //console.log("Comparando arr: "+word+" con arrayToCompare");
    return !arrayToCompare.includes(word);
  });
}

function isIncludedOn(arr){

}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
