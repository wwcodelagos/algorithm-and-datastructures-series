function findLucky(arr: number[]) {
  let lucky = [-1];
  let numObj: any = {};
  for (let num of arr) {
    numObj[num] ? (numObj[num] += 1) : (numObj[num] = 1);
  }
  let nums = Object.keys(numObj);
  let frequencies = Object.values(numObj);
  for (let num in nums) {
    if (nums[num] == frequencies[num]) {
      lucky.push(frequencies[num] as number);
    }
  }
  if (lucky.length === 1) {
    return lucky;
  } else {
    return Math.max(...lucky);
  }
}
