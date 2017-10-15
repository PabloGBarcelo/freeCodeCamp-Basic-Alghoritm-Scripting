function largestOfFour(arr) {
  // You can do this!
  // MAP Create new array with values.
  return arr.map(function(listNumbers){
    // REDUCE go through listNumbers values comparing until finish with the
    // bigger of them.
    return listNumbers.reduce(function(antNum,postNum){
      // ALTERNATIVE return postNum > antNum ? postNum : antNum;
      if (postNum > antNum){
        console.log ("Devolviendo: "+postNum);
        return postNum;
      }
      else{
        console.log ("Devolviendo: "+antNum);
        return antNum;
      }
    }, 0);
  });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
