def twoSum(nums, target):
        res = {}
        for i, num in enumerate(nums):
            if target - num in res:
                return [res[target-num], i]
            else:
                res[nums[i]] = i
print (twoSum([2,7,11,15], 9 ))