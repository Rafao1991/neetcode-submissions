class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        return Object.entries(
            nums.reduce<Record<string, number>>((freq, n) => {
                freq[n] = (freq[n] ?? 0) + 1;
                return freq;
            }, {}))
            .sort(([,a], [,b]) => b - a)
            .slice(0, k)
            .map(([a]) => Number(a));
    }
}
