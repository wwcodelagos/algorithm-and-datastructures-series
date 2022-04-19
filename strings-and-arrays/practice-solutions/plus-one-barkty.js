var plusOne = function(digits) {
  //Brute force

  //Get the last number in the array
  let number = Number(digits.join(''));
  number += 1;
  let integer = number.toString().split('');
  
  let integerArray = [];
  integer.map(x => integerArray.push(Number(x)))
  console.log(integerArray);
  return integerArray;
}

var plusOneO = function(digits) {
  //Optimized version
  let sum = 0;
  let remainder = 1;
  let end = digits.length - 1;
  let lastDigit = digits[end];
  
  if(lastDigit < 9) {
    lastDigit += 1;
    digits.pop(digits[end]);
    digits.push(lastDigit);
    console.log(digits)
    return digits;
  } else if(lastDigit == 9) {
    for(let i = end; i >= 0; i--) {
      sum = digits[i] + 1;
      digits[i] = sum % 10;
      let prev = digits.length - 2;
      remainder = sum / 10;
      prev += remainder;
    }
   if (remainder > 0) {
      digits.length + 1;
      digits[0] = 1;
      console.log(digits)
      return digits;
   }
    console.log(digits);
  }
}
plusOne([1, 2, 3, 6, 9, 7, 8, 9]);
plusOne([7, 1, 6, 1, 2, 3])
plusOneO([9, 9])
plusOneO([1, 9])
plusOneO([2, 4])
