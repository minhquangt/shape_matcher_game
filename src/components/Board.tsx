import React, { useState, useEffect } from 'react';
import Cell from './Cell';
import './Board.css';
import { Color, ICell, Shape } from '../types';
import { shuffleArray } from '../utils/shuffleArray';

const Board: React.FC = () => {
    // states...
    const [board, setBoard] = useState<ICell[]>([]);
    const [selectedCell, setSelectedCell] = useState<number>(-1);
    useEffect(() => {
        // Initialize the game board with random shapes and colors
        const shapes = [Shape.Circle, Shape.Square, Shape.Triangle];
        const colors = [Color.Red, Color.Green, Color.Blue];
        const newBoard = [...board];
        for (let i = 0; i < 8; i++) {
            const randomShape = shapes[Math.floor(Math.random() * 3)];
            const randomColor = colors[Math.floor(Math.random() * 3)];
            const newCell: ICell = {
                color: randomColor,
                shape: randomShape,
                revealed: false,
            };
            newBoard.push(newCell);
        }
        for (let i = 0; i < 8; i++) {
            const newCell: ICell = {
                color: newBoard[i].color,
                shape: newBoard[i].shape,
                revealed: false,
            };
            newBoard.push(newCell);
        }

        setBoard(shuffleArray(newBoard));
    }, []);

    const handleCellClick = (index: number) => {
        // Reveal cell, check for matches, update game state, and handle game completion
        const newBoard = [...board];
        if (newBoard[index].revealed) return;
        if (selectedCell === -1) {
            newBoard[index].revealed = true;
            setSelectedCell(index);
        } else {
            newBoard[selectedCell].revealed = true;
            newBoard[index].revealed = true;
            if (
                newBoard[selectedCell].shape === newBoard[index].shape &&
                newBoard[selectedCell].color === newBoard[index].color
            ) {
                setSelectedCell(-1);
            } else {
                setTimeout(() => {
                    newBoard[selectedCell].revealed = false;
                    newBoard[index].revealed = false;
                    setSelectedCell(-1);
                }, 1000);
            }
        }

        setBoard(newBoard);
    };

    return (
        <div className='board'>
            {/* Render each cell in the board */}
            {board.map((cell, index) => {
                return (
                    <Cell
                        key={index}
                        cell={cell}
                        onCellClick={() => handleCellClick(index)}
                    />
                );
            })}
        </div>
    );
};

export default Board;
