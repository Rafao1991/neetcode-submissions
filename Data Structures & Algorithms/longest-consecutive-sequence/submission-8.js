class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;

        let longestLen = 0;

        const set = new Set(nums);
        for (const num of nums) {           
            // is num start
            if (set.has(num - 1)) continue;

            let length = 1
            while (set.has(num + length)) length++;
            longestLen = Math.max(longestLen, length);
        }

        return longestLen;
    }
}
