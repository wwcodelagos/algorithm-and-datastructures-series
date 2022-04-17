public class Solution 
{
  public void ReverseString(char[] s)
  {
    int start = 0;
    int end = s.Length;
    int length = s.Length - 1;
    for(int i = 0; i < length / 2; i++) {
      if(start == s.Length / 2)
      var temp = s[start];
      s[start] = arr[end];
      s[end] = temp;
      
      start++;
      end--
    };
    Console.WriteLine(s);
  }
}