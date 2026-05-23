class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const ASCII_a = 'a'.charCodeAt(0);
        const map = new Map<string, string[]>();

        strs.forEach((str) => {
            const count = new Array<number>(26).fill(0);

            for (const c of str)
                count[c.charCodeAt(0) - ASCII_a] += 1;

            const key = count.join('|');

            if (map.get(key) === undefined) map.set(key, []);

            map.get(key).push(str);
        });

        const result: string[][] = [];
        for (const v of map.values())
            result.push(v);

        return result;
    }
}
