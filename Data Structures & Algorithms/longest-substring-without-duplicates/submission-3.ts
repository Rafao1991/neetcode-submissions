class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const len = s.length;

        if (len === 0) return 0;
        if (len === 1) return 1;

        const map = new Map<string, number>();
        let st = 0;
        let e = st + 1;
        let r = 0;

        map.set(s[st], st);
        while (e < len) {
            const sub = s.substring(st, e);
            
            if (!sub.includes(s[e])) {
                map.set(s[e], e);
                e++;
                r = Math.max(r, sub.length + 1);
                continue;
            }

            r = Math.max(r, sub.length);
            st = map.get(s[e]) + 1;
            map.set(s[e], e);
            e++;
        }

        return r;
    }
}
