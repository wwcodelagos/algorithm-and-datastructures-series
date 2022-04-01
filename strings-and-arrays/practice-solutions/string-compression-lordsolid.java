
// Time Complexity: O(n)
// Space Complexity: O(1)


public int compress(char[]chars){
     // prevent NPE and empy array processing
     if(chars==null||chars.length==0)  return 0;

     // Since sb.length is never > than chars.length, required space is known
     StringBuilder sb=new StringBuilder(chars.length);


     // using two pointers algo
     int i = 0,j = 1;
     while(i < chars.length || j < chars.length){
         //if the values i and j indices are equal, keep moving the j pointer
        //till the values don't match.
        if(j < chars.length && chars[i] == chars[j]) {
            j++;
        }else{ //found values that don't match
           if(j - i == 1){ //check if group length is 1 & append single character
             sb.append(chars[i]);
           }else sb.append(chars[i]).append(j-i);  //else append the character and the group length
            i = j; j++;           //sset i to j index and increment j
           }
        }

        // modify chars populating it with characters from sb
        i = 0;
        while(i < sb.length()){
          chars[i++] = sb.charAt(i);
        }

     return sb.length(); //length of the string is the length of the result array
}