//We build a table of n rows(1-indexed).We start by writing 0in the 1st row.Now in every subsequent row,
//we look at the previous row and replace each occurrence of 0with 01,and each occurrence of 1with 10.
//
//For example,for n=3,the 1st row is 0,the 2nd row is 01,and the 3rd row is 0110.
//Given two integer n and k,return the kth(1-indexed)symbol in the nth row of a table of n rows.
//
//
//Example 1:
//Input: n = 1, k = 1
//Output: 0
//Explanation: row 1: 0
//
//Example 2:
//Input: n = 2, k = 1
//Output: 0
//Explanation:
//row 1: 0
//row 2: 01
//
//Example 3:
//Input: n = 2, k = 2
//Output: 1
//Explanation:
//row 1: 0
//row 2: 01
//
//Constraints:
//1 <= n <= 30
//1 <= k < (2^n)-1
//
//Approach 1:
//Brute Force:
//Create arrays to represent each row data and return the kth gate value on the nth row
//Runtime: O(2^n)
//Memory: O(n * 2^n)
//
//Recurrence relation:
//kthSymbol[n,k] = kthSymbol[n-1,ceil(k/2)]: if 1, and k is even
//kthSymbol[n,k] = !kthSymbol[n-1,ceil(k/2)]: if 0and k is odd

//Implementation:
public int kthGrammar(int n,int k){
    if(n == 1) return 0;

    int parent = kthGrammar(n-1, k/2 + k%2);    //(k / 2 + k % 2) => 3%2 + 3/2 = 2; 4%2 + 4/2 = 2 => This is because 2 produces
    boolean isKOdd = (k % 2 == 1);

    if(parent == 1){
      if(isKOdd){
        return 1;
      }else return 0;
    }else{
      if(isKOdd){
        return 0;
      }else return 1;
    }
}