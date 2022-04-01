//Time complexity: O(n)
//Space complexity: O(1)

//using two pointers approach and recursion
//you can use iteration but start and end will end up at the middle
public void reverseString(char[] s) {
    int start = 0;
    int end = s.length - 1;
    reversed(s, start, end);
}

public void reversed(char[] c, int start, int end){

     if(start == c.length / 2) return; //base case

     //swap the items at the both indices
     char temp = c[start];
     c[start] = c[end];
     c[end] = temp;

     start++;
     end--;

     reversed(c, start, end);   //recurse for the rest.
}