class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        if (nums.length === 1) return nums[0];

        const median = Math.floor(nums.length / 2);
        return Math.min(
            this.findMin(nums.slice(0, median)),
            this.findMin(nums.slice(median, nums.length))
        );
    }
}
