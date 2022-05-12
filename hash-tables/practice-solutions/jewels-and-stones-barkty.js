var numJewelsInStones = function(jewels, stones) {
    //Set the counter
    let counter = 0;

    stones.split('').forEach(element => {
        jewels.indexOf(element) >= 0 ? counter++ : counter
    });

    console.log(counter);


    // ?//////////////////////////////////////
    let stoneHash = {
        substring1: numberOfOccurrences
    };

    const stone = stones.split('');

    stone.forEach(element => {
        if(!stoneHash[element] || stoneHash[element] === 0) {
            stoneHash[element] = 1
        }
        stoneHash[element]++
    });

    console.log(stoneHash)
    return counter;
};

numJewelsInStones('sss', 'seDftrssdetr');