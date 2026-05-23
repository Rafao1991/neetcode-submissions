class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = {};
        nums.forEach((num, i) => map[target - num] = i);

        let result = [];
        nums.forEach((num, i) => {
            if (result.length > 0) return;

            if (map[num] && i !== map[num]) {
                result = [map[num], i]
                return;
            }
        });

        return result;

    }
}
