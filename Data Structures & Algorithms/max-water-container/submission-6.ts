class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let l = 0;
        let r = heights.length - 1;
        let max = 0;

        while (l < r) {
            max = Math.max(max, (r - l) * Math.min(heights[l], heights[r]))

            if (heights[l] > heights[r]) {
                r--;
                continue;
            }
            
            l++;
        }

        return max;
    }
}
