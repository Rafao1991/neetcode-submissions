class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let i = 0;
        let j = 0;
        let product: number | null = null;

        const result: number[] = [];
        while (i < nums.length) {
            if (i === j) {
                j += 1;
                continue;
            }

            if (j >= nums.length) {
                result.push(product);
                product = null
                i += 1;
                j = 0;
                continue;
            }

            if (product === null)
                product = nums[j];
            else
                product *= nums[j];

            j += 1;
        }

        return result;
    }
}
