class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map: Record<number, number> = {};
        nums.forEach((num, i) => {
            if (map[num] === undefined)
                map[num] = i;
        });

        console.log(map);

        let key = 0;
        let comp = 1;

        while (key < nums.length) {
            if (nums[key] + nums[comp] === target){
                return [map[nums[key]], comp];
            }
            
            if (comp === nums.length - 1) {
                key += 1;
                comp = key + 1;
            } else {
                comp +=1
            }
        }
    }
}
