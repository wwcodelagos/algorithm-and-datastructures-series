var plusOne = function(digits) {
  //Brute force
  
  //Get the last number in the array
  let last = digits.length - 1;
  let num = digits.pop([last]);
  num += 1;
  
  //Check if number is more than 9
  if (num > 9) {
    let str = num.toString().split('');
    let first = str[0] * 1;
    digits.push(first);
    let second = str[1] * 1;
    digits.push(second);
  } else {
    digits.push(num);
  }
  return(num);
}