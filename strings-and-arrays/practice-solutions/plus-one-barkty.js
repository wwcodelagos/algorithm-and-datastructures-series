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
  
    // 1. reverse array
    // 2. add 1, check if < 10
    // a3. <10 - reverse array back and return
    // b3. >10 - replace element with result%10
    // b4. add one to next element and repeat actions

    let rev = digits.reverse();
    let i = 0;

    function add(arr, i) {
      // debugger
      // if (arr[i]+1) {
      if (i !== arr.length) {
        if (arr[i] + 1 > 9) {
          arr[i] = (arr[i] + 1) % 10;
          i++
          add(arr, i)
        } else {
          arr[i] = arr[i] + 1
        }
      } else {
        arr.push(1)
      }
    }

  add(rev, i)
    console.log(rev.reverse());
  return rev.reverse();
}
plusOne([1, 2, 3, 6, 9, 7, 8, 9]);
plusOne([7, 1, 6, 1, 2, 3])
plusOneO([9, 9])
plusOneO([1, 9])
plusOneO([2, 4])
