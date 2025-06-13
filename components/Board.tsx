'use client';

import { useState } from 'react';
import Square from './Square';
import { calculateWinner, isDraw } from '../lib/gameLogic';
import type { Board, Player } from '../types/game';
import ResetButton from './ResetButton';

export default function Board() {
    const [board, setBoard] = useState<Board>(Array(25).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
    const [winner, setWinner] = useState<Player | null>(null);
    const [draw, setDraw] = useState<boolean>(false);

    function handleSquareClick(index: number) {
        if (board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);
        const gameWinner = calculateWinner(newBoard);
        if (gameWinner) {
            setWinner(gameWinner);
        }
        else if (isDraw(newBoard)) {
            setDraw(true);
        }
        else {
            setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
        }
    }

    function handleReset() {
        setBoard(Array(25).fill(null));
        setCurrentPlayer('X');
        setWinner(null);
        setDraw(false);
    }

    return (
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-5 gap-2 mb-4">
                {board.map((value, index) => (
                    <Square key={index} value={value} onClick={() => handleSquareClick(index)} />
                ))}
            </div>

            <div className="text-2xl font-bold mb-4">
                {winner && <span className="text-blue-500">Winner: {winner}</span>}
                {!winner && draw && <span className="text-yellow-500">It's a Draw!</span>}
                {!winner && !draw && <span className="text-pink-500">Current Player: {currentPlayer}</span>}
            </div>

            <ResetButton onReset={handleReset} />
        </div>
    );
};
