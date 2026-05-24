class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        if (nums.length === 1) return 1;

        let longestLen = 0;

        const set = new Set(nums);
        for (const num of set.keys()) {           
            // is num start
            if (!set.has(num - 1)) {
                let length = 0

                while (set.has(num + length)) length++;

                if (length > longestLen)
                    longestLen = length;
            }
        }

        return longestLen;
    }
}
