var reverseString = function(s) {
  // Brute force
  let temp;
  let reversedArray = []
  for(let i = s.length; i > 0; i--) {
    temp = s.pop(s[i])
    reversedArray.push(temp)
  }
  console.log(reversedArray)
}

//Optimized solution using two-pointer approach
function reversed(arr, start, end) {
  //base case
  if(start == arr.length / 2) return 0;
  
  //swap items at both indices
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
    
  start++;
  end--
  //reversed(arr, start, end)
  console.log(arr);
}
//reverseString(['t', 'i', 'm', 'e'])
//reverseString(['g', 'r', 'a', 'c', 'e'])
//reversed(['g', 'r', 'a', 'c', 'e'], 0, 4)'a', 'c', 'e'], 0, 4)