const findLucky = function(arr) {
    // let lucky = [];
    // let temp = 0
    // for(let i = 0; i < arr.length; i++) {
    //     temp = arr[i]
    //     for(let j = 1; j < arr.length; j++) {
    //         if(arr[j] === temp) {
    //             lucky.push(arr[j])
    //         }
    //     }
    //     // lucky.push(temp)
    // }
    // console.log(lucky);


    let lucky = [-1];
    let hashObj = {};
    
    for (let num of arr) {
        hashObj[num] ? hashObj[num] += 1 : hashObj[num] = 1;
    }
    
    let nums = Object.keys(hashObj);
    let frequencies = Object.values(hashObj);

    for (let num in nums) {
        if (nums[num] == frequencies[num]) {
            lucky.push(frequencies[num]);
        }
    }

    if (lucky.length === 1) {
        console.log(lucky)
        return lucky;
    } else {
        console.log(Math.max(...lucky))
        return Math.max(...lucky);
    }
};

findLucky([2,2,3,4])
findLucky([1,2,2,3,3,3])