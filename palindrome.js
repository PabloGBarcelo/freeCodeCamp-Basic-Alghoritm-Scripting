function palindrome(str) {
  // Good luck!
   // Same as input.replace(/\W/g, '')
  var newString = str.replace(/[^0-9a-z]/gi, '');
  var compareString;
  newString = newString.toLowerCase();
  console.log("newstring vale: "+newString);
  compareString = newString.split('').reverse().join('');
  if (compareString == newString){
    return true;
  }
  else{
    return false;
  }

}

palindrome("0_0 (: /-\ :) 0-0");
palindrome("eye");
