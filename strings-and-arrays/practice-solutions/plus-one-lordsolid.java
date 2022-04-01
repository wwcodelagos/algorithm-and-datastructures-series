//Time complexity: O(n)
//Space complexity: O(1)


public int[] plusOne(int[] digits){
    int n = digits.length;

    if(digits[n-1] != 9){  //if the last value is not 9 just add 1 to it and return the array
       digits[n-1] += 1;
       return digits;
    }


    //if that is not the case:
    int carry = 1;   //variable to hold our carry value
    int sum = 0;     //variable to hold sum

    for(int i = n-1; i >= 0; i--){
       sum = digits[i] + carry; //  add 1 to the last digit
       digits[i] = sum % 10;   //get the last digit of the sum that will reside in that index
       carry = sum / 10;       // update carry and do same for rest of the loop
    }

    if(carry > 0){  //we still have a value to carry over so create a new array to accomodate it
       digits = new int[n + 1];
       digits[0] = 1;
       return digits;
    }
}