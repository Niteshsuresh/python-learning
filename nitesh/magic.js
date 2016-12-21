function convertToSortedLetters(word){
    var letters = word.split("");
    return letters.sort();
    
}

function replaceQMark(array){  
      for(i = 0 ; i < array.length ; i++){
        if(array[i].charCodeAt() == '?'.charCodeAt()){
            array[i] = "\\w";           
        }else{
              array[i] =  array[i]+"?";
        }
    }
    return array;
}

function prepareRegex(letters){
    letters = replaceQMark(letters);    
    var regex = "^"+letters.join("")+"$"; 
    console.log(regex);
    return regex;
}

function magic(letters, word){
    letters = convertToSortedLetters(letters);
    word = convertToSortedLetters(word);    
    regex = prepareRegex(letters);    
    var regObj = new RegExp(regex, 'g');
    return regObj.test(word.join(""));
}



magic("wh?????", "wheels");
