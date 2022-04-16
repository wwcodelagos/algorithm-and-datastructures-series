

# Quick Overview

<br>

## What are Hash Tables

- Hash Table is a data structure which maps a key to a value using hash functions through a process called hashing.
- Key/value pairs.
- Supports quick insertion and searching.
- Keys and values can be any datatype, as long as it is hashable, technically keys are primitive datatype.
- There are two different kinds of hash tables: hashset and hashmap.

<br>
<br>

## Key Concepts

### **Hash function**

This is any function that can be used to map map the key to the index of a specific bucket. The values (index) returned by a hash function are called hashes. 

The values are used to index a fixed-size table called a hash table. 

Use of a hash function to index a hash table is called *hashing.*

The hash function is the most important component of a hash table. 

Example: y = x % 5
where x is the key value and y is the index of the assigned bucket.

### Hashing

This is the practice of using an algorithm (or hash function) to map data of any size to a fixed length. 
In hashing, keys are converted into hash values called hashes.

Hashing is a one-way function.

### Hash Collision

There’s always a chance that two different keys for hash function will generate the same hash value. This is known as a hash collision.

For instance, in our previous hash function (y = x % 5), both 1987 and 2 have the same hash value of 2.

<br>
<br>

## HashSet and HashMaps

| HashSet | HashMap |
| --- | --- |
| Implementation of a set data structure to store no repeated values | Implementation of a map data structure to store (key, value) pairs |
| Stores just values | Stores keys and values |
| Doesn't allow duplicate values | Doesn't allow duplicate keys, but allows duplicate values |
| Useful when uniqueness needs to be maintained  | Useful when you want to store more information rather than only the key |

<br>
<br>

## Identifying Hash Table Questions

- Check if an item has been visited or checked before e.g. Detect if a List is Cyclic .
- Check if an item is unique.
- Count the occurrence of an item.
- Check if a list or array contains duplicate.
- When you are using nested for loop.
- When you need to search.
- When you need to aggregate information.
- When working with dynamic programming.

<br>
<br>

## Things to Note

- Space complexity; most times it is O(n)
- Time complexity; average and amortized case is O(1), worst case could be O(n)
- How they are implemented, try implementing one.
- How collisions are handled in hash tables.
- They do not maintain the order of insertion.
- They are named differently in several programming languages.
- How common operations work.

<br>
<br>

## Common Operations (In the language you are using)

- Checking if it contains a key.
- Adding and inserting.
- Getting the length.
- Getting all keys and values.
- Iterating through the hash tables.

<br>
<br>

## Practice Questions

### Beginner:

[https://leetcode.com/problems/find-lucky-integer-in-an-array/](https://leetcode.com/problems/find-lucky-integer-in-an-array/)

[https://leetcode.com/problems/two-sum](https://leetcode.com/problems/two-sum)

[https://leetcode.com/problems/happy-number/](https://leetcode.com/problems/happy-number/)

[https://leetcode.com/problems/jewels-and-stones/](https://leetcode.com/problems/jewels-and-stones/)

[https://leetcode.com/problems/intersection-of-two-arrays-ii/](https://leetcode.com/problems/intersection-of-two-arrays-ii/)

### Intermediate

[https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/](https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/)

[https://leetcode.com/problems/group-anagrams/](https://leetcode.com/problems/group-anagrams/)

[https://leetcode.com/problems/valid-sudoku/](https://leetcode.com/problems/valid-sudoku/)

[https://leetcode.com/problems/top-k-frequent-words/](https://leetcode.com/problems/top-k-frequent-words/)

<br>
<br>

## Resources

- [video on hash tables by Gayle Laakmann McDowell](https://youtu.be/shs0KM3wKv8)
- [https://leetcode.com/explore/learn/card/hash-table/](https://leetcode.com/explore/learn/card/hash-table/)
- [https://www.interviewbit.com/courses/programming/topics/hashing/](https://www.interviewbit.com/courses/programming/topics/hashing/)
