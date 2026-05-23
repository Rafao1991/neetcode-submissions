class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const cs = s
            .toLowerCase()
            .replace(/[^a-z0-9]/g, '');

        let l = 0;
        let r = cs.length - 1;

        while (l <= r) {
            if (cs[l] !== cs[r])
                return false;

            l++;
            r--;
        }

        return true;
    }
}
