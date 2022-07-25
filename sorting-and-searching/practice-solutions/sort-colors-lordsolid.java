public void sortColors(int[]arr){
   int start = 0;
   int end = arr.length-1;

   for(int i = 0; i <= end;){
      if(arr[i] == 0){
        swap(arr, i, start);
        i++;
        start++;
      }else if(arr[i] == 2){
        swap(arr, i, end);
        end--;
      }else{
        i++;
      }
   }
}

public void swap(int[]arr, int i, int j){
   int temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}
