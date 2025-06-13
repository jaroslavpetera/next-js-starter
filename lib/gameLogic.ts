import type { Board, Player } from "../types/game";

export function calculateWinner(board: Board): Player | null {
    // const lines = [
    //     [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    //     [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    //     [0, 4, 8], [2, 4, 6]    // diagonals
    // ];
    const bigLines = [
        [0, 1, 2, 3], [1, 2, 3, 4], [5, 6, 7, 8], [6, 7, 8, 9], [10, 11, 12, 13], [11, 12, 13, 14], [15, 16, 17, 18], [16, 17, 18, 19], [20, 21, 22, 23], [21, 22, 23, 24], // rows
        [0, 5, 10, 15], [1, 6, 11, 16], [2, 7, 12, 17], [3, 8, 13, 18], [4, 9, 14, 19], [5, 10, 15, 20], [6, 11, 16, 21], [7, 12, 17, 22], [8, 13, 18, 23], [9, 14, 19, 24],// columns
        [0, 6, 12, 18], [1, 7, 13, 19], [5, 11, 17, 23], [6, 12, 18, 24], // top-left to bottom-right diagonals
        [3, 7, 11, 15], [4, 8, 12, 16], [9, 13, 17, 21], [8, 12, 16, 20]  // top-right to bottom-left diagonals
    ]

    for (const [a, b, c, d] of bigLines) {
        if (board[a] && board[a] === board[b] && board[a] === board[c] && board[a] === board[d]) {
            return board[a];
        }
    }
    return null;
}

export function isDraw(board: Board): boolean {
    return board.every(square => square !== null);
}