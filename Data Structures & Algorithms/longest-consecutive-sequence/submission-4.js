class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        if (nums.length === 1) return 1;

        const map = {};

        let i = 0;
        let j = 1;
        let min = nums[i];
        let current = min;
        let longestLen = 1;

        console.log(map, i, j, current, longestLen)
        while (i < nums.length) {
            if (j >= nums.length) {
                map[min] = longestLen;
                i++;
                j = 0;
                min = nums[i];
                current = min;
                longestLen = 1;
                continue;
            }

            if (nums[j] === current + 1) {
                longestLen++;
                current++;
                j = 0;
                continue;
            }

            j++;
        }

        let maxLen = Number.MIN_VALUE;
        for (const num of Object.values(map))
            if (num > maxLen)
                maxLen = num;

        return maxLen;
    }
}
