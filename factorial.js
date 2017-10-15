function factorialize(num) {
  var total=1;
  for (var x = 1; x<=num;x++){
    console.log("total vale "+total+" * "+x);
    total *= x;
  }
  return total;
}

factorialize(5);
