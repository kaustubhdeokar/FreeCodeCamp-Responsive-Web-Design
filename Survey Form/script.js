funtion isspecialchar(character)
{
    if(character.match([ !@#$%^&*])){
        return false;
    }
    else{
        return true;
    }
}

function palindrome(str) {
    str = str.toLowerCase();
    var len = str.length;
    for(i=0;i<str.length;i++){
        console.log(isspecialchar(str[i]));
        if(str[i]!=str[len-i-1])
        {
            return false;
        }
    }
    return true;
  }
  
  
  
console.log(palindrome("eye"));
  