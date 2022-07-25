/* The isBadVersion API is defined in the parent class VersionControl.
      bool IsBadVersion(int version); */

// Time Complexity: O(log n)
// Space Complexity: O(1)


public class Solution : VersionControl {
    public int FirstBadVersion(int n)
    {
        // had to use long else I ll get overflow with (2126753390 + 1702766719)/2
        
        long start = 1;
        long end = n;

        while (start <= end)
        {
            long mid = (start + end) / 2;

            if (IsBadVersion((int)mid)) // then first bad version is between current start and mid
            {
                if (!IsBadVersion((int)(mid - 1))) // if the previous version before mid is good, then mid is the first bad
                {
                    return (int)mid;
                }

                end = mid - 1;
            }
            else // then first bad version is between current mid and end
            {
                if (IsBadVersion((int)(mid + 1))) // if the next version after mid is bad, then that is the first bad
                {
                    return (int)(mid + 1);
                }

                start = mid + 1;
            }
        }

        return (int)start;
    }
}
