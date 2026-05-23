class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map: Record<string, string[]> = {};
        strs.forEach((str) => {
            const sorted = this.getSortedStr(str);
            
            if (map[sorted] === undefined) {
                map[sorted] = [str];
                return;
            }

            map[sorted].push(str)
        });
        
        return [...Object.values(map)]
    }

    private getSortedStr(str: string): string {
        const arr: string[] = [];
        for (let s of str)
            arr.push(s);
        return arr.sort().toString();
    }
}
