class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const ASCII_a = 'a'.charCodeAt(0);
        const map: Record<string, string[]> = {};

        strs.forEach((str) => {
            const count = new Array<number>(26).fill(0);

            for (const c of str)
                count[c.charCodeAt(0) - ASCII_a] += 1;

            const key = count.toString();

            if (map[key] === undefined) map[key] = [];

            map[key].push(str);
        });

        return [...Object.values(map)]
    }
}
