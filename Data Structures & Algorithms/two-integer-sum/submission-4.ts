class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map: Record<number, number> = {};
        for (let i = 0; i < nums.length; i++) {
            const current = nums[i];
            const diff = target - current;

            if (map[current] == undefined) {
                map[diff] = i
                continue;
            }

            return [map[current], i];
        }
    }
}
