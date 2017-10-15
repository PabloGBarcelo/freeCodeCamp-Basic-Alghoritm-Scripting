function mutation(arr) {
  for (var cont = 0; cont < arr[1].length; cont++){

    if(arr[0].toLowerCase().indexOf(arr[1][cont].toLowerCase()) == -1){

      return false;

    }

  }
    return true;
  //return arr;
}

mutation(["hello", "hey"]);
