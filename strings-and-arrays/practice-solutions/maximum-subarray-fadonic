
var maxSubArray = function(nums) {
    let ans = -Infinity;
    let sum = 0;
    for(let num of nums){
        sum += num;
        ans = Math.max(ans, sum);
        sum = Math.max(sum, 0);
    }
    return ans;
};
