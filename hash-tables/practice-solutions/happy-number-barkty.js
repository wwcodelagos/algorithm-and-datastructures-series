//Brute force

var isHappy = function(n) {
    //Check if integer is equal to 1
    if(n === 1) {
        console.log(true)
        return true;
    } else if(n !== 1 && n >= 7) {
        //Check if integer has two or more digits

        //Convert it to a string and split
        const splits = n.toString().split('')
        //Declare an empty array variable
        let integer = [];
        let powered = []
        let sum = 0;
        //Loop and convert array values to numbers
        for(let i = 0; i < splits.length; i++){
            integer.push(Number(splits[i]))
        }
        console.log(integer)

        //Square each digits
        for (let j = 0; j < integer.length; j++) {
            powered.push(Math.pow(integer[j], 2))
        }
        console.log(powered)

        //Sum each integer in the array
        for(let s = 0; s < powered.length; s++) {
            sum += powered[s]
        }
        console.log(sum);

        //Recursion
        return isHappy(sum)
    }
    
    return false

};
isHappy(10)
isHappy(19)
isHappy(25)
isHappy(7)
isHappy(5)
