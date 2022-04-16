public class Solution 
{
  public void ReverseString(char[] s)
  {
    char temp;
    char[] array;
    foreach(char character in s) {
      temp = s.Pop(s[character]);
      array.Push(temp);
    };
    Console.WriteLine(array);
  }
}