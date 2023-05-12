function palindrome(str) {
    let newStr = str.replace(/([^\w]+|\s+|_)/g, ''); /*replaces the whitespace, special characters,
    non word characters and underscores*/
  
    let result = newStr.toLowerCase(); //changes the new string created above to all lowerCase
  
    let newArr = result.split(''); //creates a new array from the lowercase string above
  
    let reversedArr = newArr.reverse(); //creates a new array by reversing the newArr above
  
     let reversedResult = reversedArr.join(''); //changes the array created above into a string
  
      if (result == reversedResult) { //if statement to compare the result 'string' to the reversed result 'string'.
  
      return true //returns true if the result is identical to the reversedResult(palindrome)
  
    } return false //returns false if the two aren't the same
    };
  
  console.log(palindrome("almostomla")); //returns false

  console.log(palindrome("_eye")); // returns true
  
