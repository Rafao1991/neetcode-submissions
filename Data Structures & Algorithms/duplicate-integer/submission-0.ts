class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const map: Record<number, boolean> = {}
        for (const num of nums) {
            if (!map[num]) {
                map[num] = true;
                continue;
            }

            return true;
        }

        return false;
    }
}
