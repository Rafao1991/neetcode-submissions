class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const sorted = nums.sort((a, b) => a - b);
        const result: number[][] = [];
        
        sorted.forEach((num, i) => {
            if (i > 0 && num === sorted[i - 1]) return;

            let l = i + 1;
            let r = sorted.length - 1;
            while (l < r) {
                let sum = num + sorted[l] + sorted[r];
                if (sum > 0) {
                    r--;
                    continue;
                }

                if (sum < 0) {
                    l++;
                    continue;
                }

                result.push([num, sorted[l], sorted[r]]);
                l++;
                while (sorted[l] === sorted[l - 1] && l < r)
                    l++;
            }
        })
        
        return result;
    }
}