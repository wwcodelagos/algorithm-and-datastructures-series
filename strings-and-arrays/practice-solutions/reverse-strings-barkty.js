var reverseString = function(s) {
    //Using reverse() method here because reverse is an array
    //Brute force
    s.reverse();

    //Another method
    let temp;
    //let reversedArray = [];
    for (let i = 0; i < s.length; i++) {
        temp = s[i];
        s.unshift(temp);
        // for(let j = 0; j < s.length; j++) {
        //     reversedArray[j].unshift(temp)
        // }
    }
}