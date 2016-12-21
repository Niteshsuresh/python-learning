function convertToSortedLetters(word){
    var letters = word.split("");
    return letters.sort();
    
}

function replaceQMark(array){  
    var value = [];
      for(i = 0 ; i < array.length ; i++){
        if(array[i].charCodeAt() != '?'.charCodeAt()){
            value.push(array[i]+"?");        
        }
    }
    return value;
}

function prepareRegex(letters){
    var len = letters.length;
    letters = replaceQMark(letters);
     var regex = "^"+letters.join("")+"$";
    if(letters.length != len){
       regex = letters.join("");
       if(letters.length == 1){
           regex = regex.replace("?", "");
       }
    }   
  
    return regex;
}

function magic(letters, word){
    if (letters.length < word.length){
        return false;
    }
    letters = convertToSortedLetters(letters);
    word = convertToSortedLetters(word);    
    regex = prepareRegex(letters);    
    var regObj = new RegExp(regex, 'g');
    word = word.join("");
    return regObj.test(word);
}
