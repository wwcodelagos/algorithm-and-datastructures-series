var reverseString = function(s) {
  // Brute force
  let temp;
  let reversedArray = []
  for(let i = s.length; i > 0; i--) {
    temp = s.pop(s[i])
    reversedArray.push(temp)
  }
  return reversedArray;
}

//Optimized solution using two-pointer approach
function reversed(arr, start, end) {
  let end = arr.length - 1;
  let len = arr.length - 1;
  for (let i = 0; i < len / 2; i++) {
    //base case
    if(start == arr.length / 2) {
      return;
    } else {
    //swap items at both indices
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    
    start++;
    end--
    }
  }
}