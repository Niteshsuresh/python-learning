function convertToSortedLetters(word){
    var letters = word.split("");
    for (var i = 0; i < letters.length; i++)
   {    
      for (j = i+1; j < letters.length; j++){
            if (letters[j].charCodeAt() < letters[i].charCodeAt()){
                    temp = letters[i];
                    letters[i] = letters[j];
                    letters[j] = temp;
            }
   }
}
    return letters;
    
}

function IsSeqMissing(sortedWordLetter, sortedLetter){
    var flag = true;  
    if(sortedLetter.charCodeAt() > sortedWordLetter.charCodeAt()){
            return flag;
    }    
    return !flag;
}

function countQSymbol(array){
    var count = 0;
    for(i = 0 ; i < array.length ; i++){
        if(array[i].charCodeAt() == '?'.charCodeAt()){
            count++;           
        }
    }
    return count;
}
function compare(sortedWordLetters, sortedLetters){
    var matchCount = 0;
        sortedLetters = dumpChars(sortedLetters, sortedWordLetters.length);
        qMarkCount = countQSymbol(sortedLetters);
   
    if(IsSeqMissing(sortedWordLetters[0], sortedLetters[0])){
       return false; 
    }

    for(i = 0; i < sortedWordLetters.length; i++){ 
        for(j =0; j< sortedLetters.length; j++){
              if(sortedWordLetters[i].charCodeAt() == sortedLetters[j].charCodeAt()){
                matchCount++;          
                 sortedLetters[j] = "";
              }
            else if(qMarkCount > 0){
                qMarkCount--;
                matchCount++;
            }
            
        }
          
                
    }
 
    return matchCount == sortedWordLetters.length;
    
    
}

function dumpChars(array, toLength){
    var fillSize = toLength - array.length;
    for(i = 0 ; i < fillSize; i++){
        array.push("");
    }
    return array;
}

compare(convertToSortedLetters("wheel"), convertToSortedLetters("whe??"));