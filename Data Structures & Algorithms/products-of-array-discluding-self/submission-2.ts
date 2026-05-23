class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const result = new Array<number>(nums.length).fill(1);

        // prefix - from 0 to n
        let p = 1;
        for (let i = 0; i < nums.length; i++) {
            // if (i - 1 < 0) continue;

            result[i] = p;
            p *= nums[i];
        }

        // postfix - from n to 0
        p = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            // if (i + 1 >= nums.length) continue;

            result[i] *= p 
            p *= nums[i];
        }

        return result;
    }
}
