class MedianFinder {
    data: number[];

    constructor() {
        this.data = [];
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num: number): void {
        this.data.push(num);
    }

    /**
     * @return {number}
     */
    findMedian(): number {
        const len = this.data.length;
        if (len === 0) return null;
        if (len === 1) return this.data[0];
        
        const sorted = this.data.sort((a, b) => a - b);
        console.log(sorted)

        if (len % 2 === 0){
            return (sorted[len / 2] + sorted[(len/2) - 1]) / 2;
        }

        return sorted[Math.floor(len / 2)];
    }   
}
