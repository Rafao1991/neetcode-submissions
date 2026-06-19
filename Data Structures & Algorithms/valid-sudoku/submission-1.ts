class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rotated: string[][] = [];
        for (let i = 0; i < board.length; i++) {
            const row = [];
            for (let j = 0; j < board[i].length; j++) {
                row.push(board[j][i]);
            }
            rotated.push(row);
        }

        for (let i = 0; i < board.length; i++) {
            if (!this.isValidRow(board[i])) return false;
            if (!this.isValidRow(rotated[i])) return false;
        }

        for (let i = 0; i < board.length; i+=3) {
            for (let j = 0; j < board[i].length; j+=3) {
                if (!this.isValid3x3(board, i, j)) {
                    return false;
                }
            }
        }

        return true;
    }

    isValidRow(row: string[]): boolean {
        const set = new Set();
        for (let i = 0; i < row.length; i++) {
            if (row[i] === '.') continue;
            if (set.has(row[i])) return false;
            
            set.add(row[i]);
        }

        return true;
    }

    isValid3x3(board: string[][], startI: number, startJ: number): boolean {
        const endI = startI + 3;
        const endJ = startJ + 3;

        const set = new Set();
        for (let i = startI; i < endI; i++) {
            for (let j = startJ; j < endJ; j++) {
                if (board[i][j] === '.') continue;
                if (set.has(board[i][j])) return false;
                
                set.add(board[i][j]);
            }
        }

        return true;
    }
}
