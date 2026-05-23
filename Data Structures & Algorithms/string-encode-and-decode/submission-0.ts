class Solution {
    targets: number[] = [];
    
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        strs.forEach((str) => this.targets.push(str.length));
        return strs.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let start = 0;
        const result: string[] = [];
        this.targets.forEach((target) => result.push(str.slice(start, start += target)));
        return result;
    }
}
