class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack: string[] = [];

        for (const c of s) {
            if (['(', '[', '{'].includes(c)) {
                stack.push(c);
                continue;
            }

            if (c === ')' && stack[stack.length - 1] !== '(') return false;
            if (c === ']' && stack[stack.length - 1] !== '[') return false;
            if (c === '}' && stack[stack.length - 1] !== '{') return false;
            
            stack.pop();
        }

        return stack.length === 0;
    }
}
