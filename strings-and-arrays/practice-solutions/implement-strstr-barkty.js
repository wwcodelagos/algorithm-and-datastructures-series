var strStr = function(haystack, needle) {
    //Brute force
    if (needle === '') {
        console.log(0);
        return 0;
    } else if(haystack.includes(needle)) {
        let index = haystack.indexOf(needle)
        console.log(index)
        return index;
    } 
    console.log(-1);
    //return -1;

    //Optimized
    //Time Complexity O(n)

    if (needle === '') {
        return 0;
    }
    const map = {}
    const len = needle.length
    for(let i = 0; i < len; i++) {
        map[needle[i]] = i
    }
    let j = 0
    for(let i = 0; i < haystack.length;) {
        if (haystack[i + j] == needle[j]) {
            if (j == len - 1) {
            return i;  
            } 
            j++;
        } else {
            let index = map[haystack[i + len]]
            if(index === undefined) {
                i += len + 1
            } else {
                i += len - index
            }
            j = 0
        }
    }
    return -1
};