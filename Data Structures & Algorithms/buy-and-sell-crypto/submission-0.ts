class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let result = 0
        let l = 0;
        let r = prices.length - 1;

        while (l < prices.length) {
            const profit = prices[r] - prices[l];
            if (profit > result) result = profit;

            if (r > l) {
                r--;
                continue;
            }

            r = prices.length - 1;
            l++;
        }

        return result < 0 ? 0 : result;
    }
}
