var twoSum = function(nums, target) {
    let hashSum = {}

    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i]

        if(hashSum[difference] || hashSum[difference] === 0) {
            console.log([hashSum[difference], i])
            return [hashSum[difference], i]
        } else {
            hashSum[nums[i]] = i
        }
            
    }
    console.log(hashSum)

    // let seen = {}
   
    // for(let i = 0; i < nums.length; i++){
    //       let num2 = target - nums[i]
    //       if(seen[num2] || seen[num2] === 0){
    //           console.log([seen[num2],i])
    //            return [seen[num2],i]
    //         } else {
    //           seen[nums[i]] = i
    //         }
    // } 
};

twoSum([2,7,11,15], 9)
twoSum([3,2,4], 6)
twoSum([3,3], 6)