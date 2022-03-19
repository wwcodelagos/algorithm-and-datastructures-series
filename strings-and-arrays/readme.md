# Quick Overview

<br>

## Relationship Between Strings and Arrays

- An array is a sequential collection of elements of similar datatypes while a string is a sequence of characters
- Arrays can hold elements of any data type while strings contains only characters
- String is an array of characters.
- Strings are immutable but arrays are mutable.

<br>
<br>

## Fast Facts (Things to note for any language you are using)

### Strings

- Cost of Modification
    - For most languages strings are immutable (can't change the content of the string once it's initialized)
    - Think of converting to char array when modification is needed
    - String s2 = s1 + "x”
- Comparison: how do you compare two strings
    - .equals, .compare or ==
    - Is it case sensitive or not by default
- How to convert string to array and vice versa

### Arrays

- Static and dynamic arrays
    - what is the default
    - arrays
    - arraylists
    - lists
- Multidimensional arrays

<br>
<br>

## Common Operations

- Accessing the ith element
- Finding the index of an element
- Iterating with or without index
- Getting the length
- Getting the sub (string or array)
- Splitting or slicing
- Checking if it contains an element

<br>
<br>

## Common Patterns

When you are preparing for interviews, instead of trying to memorize as many leetcode problems as possible with the hope that you’ll get asked one of those exact questions, you can learn common patterns that can be applied to many different problems.

### ****Using a HashMap or Length-256 Integer Array****

- Counting the occurrence
- Store for the future

### Using 2 pointers

- Whenever you have to use a nested for loop
- Comparing or swapping two elements
- Do an operation in-place
- Fast and slow runner

Example:

- Reverse a string or array
- Sort an array in place

### Sliding Window

- Finding sub (array or string) within another (array or sting)
- Perform an operation from a starting point to ending point within the string or array

Example

- Find longest substring without repeating characters
- Maximum sum subarray of size ‘K’

<br>
<br>

## Common Mistakes

- Not knowing the string or array operations available in your language
- Time complexity of an operation: put into account under the hood operations
- Modifying strings

<br>
<br>

## Practice Questions

### Beginner:

[https://leetcode.com/problems/reverse-string/](https://leetcode.com/problems/reverse-string/) (come up with an optimal O(log n) solution using 2-pointer approach)

[https://leetcode.com/problems/plus-one/](https://leetcode.com/problems/plus-one/)  

[https://leetcode.com/problems/implement-strstr/](https://leetcode.com/problems/implement-strstr/)

[https://leetcode.com/problems/maximum-subarray/](https://leetcode.com/problems/maximum-subarray/)

### Intermediate

[https://leetcode.com/problems/string-compression/](https://leetcode.com/problems/string-compression/) (come up with an optimal solution using 2-pointer approach)

[https://leetcode.com/problems/container-with-most-water/](https://leetcode.com/problems/container-with-most-water/)

[https://leetcode.com/problems/longest-substring-without-repeating-characters/](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

[https://leetcode.com/problems/circular-array-loop/](https://leetcode.com/problems/circular-array-loop/)
