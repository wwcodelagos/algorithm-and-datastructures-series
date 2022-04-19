var plusOne = function(digits) {
   // Brute force
  let singleNumber = Number(digits.join(''));
  singleNumber += 1;
  let number = singleNumber.toString().split('');
   
  let integerArray = [];
   
  for(let i = 0; i < number.length; i++) {
    integerArray.push(Number(number[i]))
  }
  return integerArray;
}

//Optimized
