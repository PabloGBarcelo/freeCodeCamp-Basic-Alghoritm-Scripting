function titleCase(str) {
  var newString = str.split(" ");
  var newArrayString = [];
  newString.map(function(word){
  console.log("analizando: "+word);
    newArrayString.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  });
  console.log("newarraystring: "+newArrayString);
  str = newArrayString.join(" ");
  return str;
}

titleCase("I'm a little tea pot");
