function isPalindromeRecursive(word){
    return isPalindromeHelper(word, 0, word.length -1);
}

function isPalindromeHelper(word, beginPos, endPos){
    if(beginPos >= endPos){
        return true;
    }
    if(word.charAt(beginPos)!= word.charAt(endPos)){
        return false;
    }else{
        return isPalindromeHelper(word, beginPos+1, endPos-1);
    }
}

console.log(isPalindromeRecursive("aibohphobia"));
console.log(isPalindromeRecursive("oakye"));
 