var strStr = function(haystack, needle) {
    //Brute force
    if (needle === '') {
        console.log(0);
        return 0;
    } else if(haystack.includes(needle)) {
        let index = haystack.indexOf(needle)
        console.log(index)
        return index;
    } else if(!haystack.includes(needle)) {
        console.log(-1);
        return -1;
    }

    //Optimized
};

strStr('greet', 'eet');
strStr('greet', 'at');
strStr('greet', '');
strStr('greet', 'oi');