var twoSum = function(nums, target) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] == target && i != j) {
                arr.push(i)
            }
        }
    }
    return arr
}