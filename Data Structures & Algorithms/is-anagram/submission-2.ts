class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length)
            return false;
        
        const sFreq = this.getFreq(s);
        const tFreq = this.getFreq(t);

        for (const k in sFreq) {
            if (!sFreq[k] || !tFreq[k] || sFreq[k] !== tFreq[k])
                return false;
        }

        return true;
    };

    private getFreq(s: string): Record<string, number> {
        const map: Record<string, number> = {};
        for (const c of s) {
            map[c] = (map[c] ?? 0) + 1;
        }
        return map;
    };
}
