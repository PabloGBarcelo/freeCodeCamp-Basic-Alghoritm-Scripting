function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (num >=1){
    if (str.length < 3){
      return str.substring(0,1)+"...";
    }
    else if (num <=3){
      return str.substring(0,num)+"...";
    }
    else if (str.length <= num){
      return str;
    }
    else if (str.length > num){
      return str.substring(0,num-3)+"...";
    }
  }

}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
