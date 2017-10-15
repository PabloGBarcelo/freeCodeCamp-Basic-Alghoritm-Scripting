function reverseString(str) {
  // Convert into an array
  var strSplitted = str.split("");
  // Reverse array
  strSplitted = strSplitted.reverse();
  // Join
  str = strSplitted.join("");
  return str;
}

reverseString("hello");
