class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let r = nums.length - 1;
        let l = 0;

        while (r >= l) {
            if (target === nums[r]) return r;
            if (target === nums[l]) return l;

            r--;
            l++;
        }

        return -1;
    }
}
