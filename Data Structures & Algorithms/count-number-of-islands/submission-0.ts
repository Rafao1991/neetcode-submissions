class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        let count = 0;

        grid.forEach((r, ri) => {
            r.forEach((_, ci) => {
                if (grid[ri][ci] === '1') {
                    count++;
                    this.dfs(grid, ri, ci);
                }
            });
        });

        return count;
    }

    private dfs(grid: string[][], r: number, c: number): void {
        if (r < 0 || r >= grid.length) return;
        if (c < 0 || c >= grid[0].length) return;
        if (grid[r][c] === '0') return;

        grid[r][c] = '0';

        this.dfs(grid, r, c + 1);
        this.dfs(grid, r, c - 1);
        this.dfs(grid, r + 1, c);
        this.dfs(grid, r - 1, c);
    }
}
