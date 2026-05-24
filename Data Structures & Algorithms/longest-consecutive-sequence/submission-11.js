class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let longestLen = 0;

        for (let num of nums) {           
            // is num start
            if (set.has(num - 1)) continue;

            let length = 1
            while (set.has(num + length)) length++;
            longestLen = Math.max(longestLen, length);
        }

        return longestLen;
    }
}
