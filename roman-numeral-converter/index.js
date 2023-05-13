function convertToRoman(num) { // function to convert arabic numbers to roman numerals
    if (num < 10) { // checks if the number is less than 10
      return unitConverter(num); // return- calls the function for numbers under 10
    } else {
      num = num.toString(); // converts the number to a string dince it will be iterated in an array
      var thousands = Number(num[num.length-4]); // checks if the number is in the thousandths by checking the number of digits
      var hundreds = Number(num[num.length-3]); // checks if the number is in the hundredths
      var tens = Number(num[num.length-2]); // checks if the number is in the tenths
      var unit = Number(num[num.length-1]); // checks if the number has only one digit/ ones.
     if (num < 100) { // checks if the number is less than 100
      return tensConverter(tens) + unitConverter(unit); // if true, returns the tens and ones results
    } else if (num < 1000){  // checks if the number is less than 1000
      return hundredsConverter(hundreds) + tensConverter(tens) + unitConverter(unit); // if true, returns the hundreds, tens and ones results
    } else if (num < 10000) { // checks if the number is less than 10000
      return thousandsConverter(thousands) + hundredsConverter(hundreds) + tensConverter(tens) + unitConverter(unit);// if true, returns the thousands, hundreds, tens and ones results
    } else {
      return "You broke the converter!" // if the number is more than 10,000
    }
  }
  }
  
  var unitConverter = function(num){  // function to convert ones arabic numbers to roman numerals
    var string = ""; // an empty string to which the results will be added
    if (num < 4) { // checks if the number is less than 4
      for (let i = 1; i <= num; i++){ //iterates through the array of number[s]
        string += "I"; // if true, adds the roman numeral I to the string string
      }
    } else if (num === 4) { // if the number is 4
      string = "IV"; // the roman numeral is IV
    } else if (num < 9) { // checks if the number is less than 9
      string = "V"; // the default value in the string is roman numeral V
      for (let i = 5; i < num; i++){  // sets i to 5(V)
        string += "I"; // adds the value 'I' to the string(V)
      }
    } else {
      string = "IX"; // returns IX if the string is 9
    }
    return string;
  };
  var tensConverter = function(num){ // function to convert tenths arabic numbers to roman numerals
    var string = ""; // an empty string to which the results will be added
    if (num < 4) { // checks if the number is less than 4
      for (let i = 1; i <= num; i++){ //iterates through the array of number[s]
        string += "X"; // if true, adds the roman numeral X(10) to the string 'string'
      }
    } else if (num === 4) { // if the number is 4
      string = "XL"; // the roman numeral is XL (40)
    } else if (num < 9) { // checks if the number is less than 9
      string = "L"; // the default value in the string is roman numeral L(50)
      for (let i = 5; i < num; i++){ // sets i to 5(L)
        string += "X"; // adds the value 'X'(10) to the string(L)
      }
    } else {
      string = "XC"; // returns XC if the string is 90
    }
  
    return string;
  };
  
  var hundredsConverter = function(num){ // function to convert hundredths arabic numbers to roman numerals
    var string = ""; // an empty string to which the results will be added
    if (num < 4) { // checks if the number is less than 4
      for (let i = 1; i <= num; i++){  //iterates through the array of number[s]
        string += "C"; // if true, adds the roman numeral C(100) to the string 'string'
      }
    } else if (num === 4) { // if the number is 4
      string = "CD"; // the roman numeral is CD(400)
    } else if (num < 9) { // checks if the number is less than 9
      string = "D"; // the default value in the string is roman numeral D(500)
      for (let i = 5; i < num; i++){ // sets i to 5(D)
        string += "C"; // adds the value 'C'(100) to the string(L)
      }
    } else {
      string = "CM"; // returns CM if the string is 90
    }
  
    return string;
  };
  
  var thousandsConverter = function(num){ // function to convert hundredths arabic numbers to roman numerals
    var string = ""; // an empty string to which the results will be added
      for (let i = 1; i <= num; i++){  //iterates through the array of number[s]
        string += "M"; // adds the value 'M'(1000) to the empty string
      }
    return string;
  };
  
  
  console.log(convertToRoman(3999)); //logs MMMCMXCIX
