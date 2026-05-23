class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map: Record<string, string[]> = {};
        strs.forEach((str) => {
            const key = this.getKey(str)
            map[key] = map[key] === undefined ? [str] : [...map[key], str];
        });
        return [...Object.values(map)];
    }

    private getKey(str: string): string {
        const map: Record<string, number> = {};
        for (const s of str) {
            map[s] = (map[s] ?? 0) + 1;
        }

        const r = Object.entries(map).sort().reduce<string>(
            (result, [k, v]) => result.concat(`${k}${v},`), '')
        
        console.log(r)
        return r;
    }
}
