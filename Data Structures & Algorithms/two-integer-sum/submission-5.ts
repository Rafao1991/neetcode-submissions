class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map: Record<number, number> = {};
        for (let i = 0; i < nums.length; i++) {
            if (map[nums[i]] == undefined) {
                map[target - nums[i]] = i
                continue;
            }
            return [map[nums[i]], i];
        }
    }
}
