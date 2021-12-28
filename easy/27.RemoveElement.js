var removeElement = function(nums, val) {
    let i = 0
    let j = 0;
    for (let n of nums) {
        if (n !== val) {
            nums[i] = n;
            i++;
        } else {
            j++;
        }
    }
    return nums.length - j;
}