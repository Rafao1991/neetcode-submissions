class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        const tMap: Record<string, number> = {};
        let l = 0;
        let r = l + t.length;
        let result = '';

        if (s === t) return s;

        if (t.length === 1 && s.includes(t)) return t;

        for (let c of t) {
            tMap[c] = (tMap[c] ?? 0) + 1;
        }

        while (r <= s.length && l <= s.length - 2) {
            const sub = s.substring(l, r);
            const subMap: Record<string, number> = {};
            let containAll = true;

            for (let c of sub) {
                subMap[c] = (subMap[c] ?? 0) + 1;
            }

            for (let c of Object.keys(tMap)) {
                if (!subMap[c] || subMap[c] < tMap[c]) {
                    containAll = false;
                }
            }

            console.log(tMap, subMap, containAll);

            if (containAll) {
                if (result.length > 0) {
                    result = result.length > sub.length ? sub : result
                } else {
                    result = sub;
                }
                
                l++;
            } else {
                if (r < s.length) {
                    r++;
                } else {
                    l++;
                }
            }
        }

        return result;
    }
}
