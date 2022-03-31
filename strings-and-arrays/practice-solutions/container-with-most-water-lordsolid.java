


//Using two pointer approach
public int maxArea(int[] heights) {
    int left = 0;
    int right = heights.length - 1;
    int res = 0;  //result variablle


   //Here we will calculate the area of each height conidering only the minimum height
   //then we record the highest area we have seen so far
    while(left < right){
       int area = (right - left) * Math.min(heights[left], heights[right]);
       res = Math.max(res, area);   //assign the maximum area so far, to the result variable

       if(heights[left] < heights[right]){  //if we have lesser height in the left, increment to find more less from left
         left++;
       }else if(heights[right] < heights[left]){  //if we have lesser in right, decrement to find more less from right
         right--;
       }else{  //if equal we can decrement right or increment left it doesn't matter, both will still give the same value.
        right--;
       }
    }

    return res;
}