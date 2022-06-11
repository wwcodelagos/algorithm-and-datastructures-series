//Leetcode 66. 
//Solved using Javascript.

var plusOne = function(digits) {
    //Join the items in the array. Remember to let the computer know, it is a type //of Number so it can be incremented by 1
  const joinNumbers = Number(digits.join(""));

    // Increment the result numbers by 1
  const incrementNumber = joinNumbers + 1;

    // convert back to string, and split to an array of items. Split method work on     //strings.
  const splitNumbers = incrementNumber.toString().split("");

  // return result
  return splitNumbers;
};
0 comments on commit 5cfb2f3
