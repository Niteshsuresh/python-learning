function removeQMark(array){  
    var value = [];
    for(i = 0 ; i < array.length ; i++){
        if(array[i].charCodeAt() != '?'.charCodeAt()){
            value.push(array[i]);           
        }
    }
    return value;
}


function addQToRegex(qCount){
    var exp = "[\\w]{1,"+qCount+"}";
    return exp;
}

function prepareRegex(letters){
    var trimmedLetters = removeQMark(letters);
    var count = letters.length - trimmedLetters.length;
    var exp = addQToRegex(count);
    var regex = "^(["+trimmedLetters.join("")+"])("+exp+")$";
    console.log(regex);
    return regex;
}

function magic(letters, word){
    var regex = prepareRegex(letters);
    var regObj = new RegExp(regex, 'g');
    return regObj.test(word);
}



magic("wh?????", "wheels");
