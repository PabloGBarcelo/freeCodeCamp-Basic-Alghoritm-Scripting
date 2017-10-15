function findLongestWord(str) {
  var arrWord = str.split(" ");
  str = "";
  arrWord.map(function(word){
    if(word.length>str.length){
      str = word;
    }
  });

  return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
