var reverseString = function(s) {
  // Brute force
  let temp;
  let reversedArray = []
  for(let i = s.length; i > 0; i--) {
    temp = s.pop(s[i])
    reversedArray.push(temp)
  }
  console.log(reversedArray);
  return reversedArray;
  
  //let start = 0;
  //let end = reversedArray.length - 1;
  //reversed(reversedArray, start, end)
}

//Optimized solution using two-pointer approach
function reversed(arr, start) {
  let end = arr.length;
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
  console.log(arr)
}
//reverseString(['t', 'i', 'm', 'e'])
//reversed(['t', 'r', 'e', 'e'], 0)
//reversed(['g', 'r', 'a', 'c', 'e'], 0);