var maxSubArray = function(nums) {
    let max = -Infinity
    let currentMax = -Infinity
    for (let i = 0; i < nums.length; i++) {
        currentMax = Math.max(
        currentMax + nums[i],
        nums[i],
        )
        max = Math.max(max, currentMax)
    }
  return max
};