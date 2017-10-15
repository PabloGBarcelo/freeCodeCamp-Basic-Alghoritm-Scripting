function slasher(arr, howMany) {
  // it doesn't always pay to be first
  console.log("Valor "+arr.slice(howMany,arr.length));
  return arr.slice(howMany,arr.length);
}

slasher([1, 2, 3], 2);
