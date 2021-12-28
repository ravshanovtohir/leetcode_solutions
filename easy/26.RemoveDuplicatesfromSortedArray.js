var removeDuplicates = function(nums) {
    var len = nums.length;
    var last = null;
    var count = 0;
    for (var i = 0; i < len; i++) {
        if (nums[i] !== last) {
            nums[count] = nums[i];
            last = nums[i];
            count++;
        }
    }
    return count;
};
console.log(removeDuplicates(1, 1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 9));