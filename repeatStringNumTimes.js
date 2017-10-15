function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num < 1){
    return "";
  }else{

    var newString ="";
    for (var count = 0; count < num; count++){
      newString = newString.concat(str);
    }
    return newString;
  }

}

repeatStringNumTimes("abc", 3);
