var intersect = function(nums1, nums2) {
    const obj = {}
    const result =[]

    //Convert array to hashtable
    for(let i = 0; i < nums1.length; i++) {
        obj[nums1[i]] = obj[nums1[i]] + 1 || 1
        
    }

    //Loop through the second array
    for(let i = 0; i < nums2.length; i++) {
        //Check if the current array element exists in the hashtable
        if(obj[nums2[i]] !== undefined) {
            for(key in obj) {
                //Get the key of object
                if(obj[key] == obj[nums2[i]]) {
                    //Convert to number and push to array
                    result.push(key * 1)
                }
            }
        }
    }
    console.log(result)
};

intersect()