class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let l = 0;
        let r = l + 1;

        let res = Number.MIN_VALUE;
        
        while (l < s.length) {
            const map = new Map<string, number>();
            const sub = s.substring(l, r);
            const len = sub.length;

            for (const c of sub) {
                map.set(c, (map.get(c) ?? 0) + 1)
            }

            let max = Number.MIN_VALUE;
            map.forEach(v => max = Math.max(max, v));

            if (len - max <= k && r <= s.length) {
                res = Math.max(res, len);
                r++;
            } else {
                l++;
                r = l + 1;
            }
        }

        return res;
    }
}
