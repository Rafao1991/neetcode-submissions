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

            console.log(sub.length)
            console.log('*')
            
            if (!sub.includes(s[e])) {
                console.log('no dup')
                console.log(st, e);
                console.log(sub, s[st], s[e], map);
                console.log('-')
                map.set(s[e], e);
                e++;
                r = Math.max(r, sub.length + 1);
                continue;
            }

            console.log('dup')
            console.log(st, e);
            console.log(sub, s[st], s[e], map);
            console.log('-')
            console.log(map.get(s[e]))
            console.log('-')

            r = Math.max(r, sub.length);
            st = map.get(s[e]) + 1;
            map.set(s[e], e);
            e++;
        }

        return r;
    }
}
