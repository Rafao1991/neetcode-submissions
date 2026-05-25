class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        return Math.max(this.getMaxFromWidgths(heights), this.getMaxFromHeights(heights));
    }

    private getHeighestBarIndex(heights: number[]): number {
        let h = -1;
        let i = 0;

        heights.forEach((v, j) => {
            if (v > h) {
                h = v;
                i = j;
            }
        });

        return i;
    }

    private getMaxFromHeights(heights: number[]): number {
        const heighestIndex = this.getHeighestBarIndex(heights);
        const heighest = heights[heighestIndex];
        
        let max = 0;
        heights.forEach((height, i) => {
            if (i === heighestIndex) return;
            max = Math.max(max, this.getArea(i, heighestIndex, heighest, height));
        });

        return max;
    }

    private getMaxFromWidgths(heights: number[]): number {
        let l = 0;
        let r = heights.length - 1;
        let max = 0;

        while (l < r) {
            max = Math.max(max, this.getArea(l, r, heights[l], heights[r]));

            if (heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }

        return max;
    }

    private getArea(i: number, j: number, hh: number, h: number): number {
        const max = Math.abs(i - j) * Math.min(hh, h);
        return max;
    }
}