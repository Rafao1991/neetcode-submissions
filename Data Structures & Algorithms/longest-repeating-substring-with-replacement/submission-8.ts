class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const map = new Map<string, number>();
        let result = 0;
        let l = 0;
        let maxF = 0;
        for (let r = 0; r < s.length; r++) {
            map.set(s[r], (map.get(s[r]) ?? 0) + 1)
            maxF = Math.max(maxF, map.get(s[r]));
            
            while (r - l + 1 - maxF > k) {
                map.set(s[l], map.get(s[l]) - 1);
                l++
            }

            result = Math.max(result, r - l + 1);
        }

        return result;
    }
}
