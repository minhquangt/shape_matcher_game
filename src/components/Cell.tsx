import React from 'react';
import './Cell.css';
import { ICell, Shape } from '../types';

interface CellProps {
    // Your code here
    cell: ICell;
    onCellClick: () => void;
}

const Cell: React.FC<CellProps> = ({ cell, onCellClick }: CellProps) => {
    // Render cell with shape and color, use CSS to style based on shape and color.
    return (
        <>
            {cell.revealed ? (
                <div
                    onClick={onCellClick}
                    className={`cell ${cell.shape} ${cell.color}`}
                    style={{
                        backgroundColor:
                            cell.shape === Shape.Triangle ? 'white' : '',
                        borderBottom:
                            cell.shape === Shape.Triangle
                                ? `40px solid ${cell.color}`
                                : '',
                    }}
                ></div>
            ) : (
                <div className={`cell`} onClick={onCellClick}></div>
            )}
        </>
    );
};

export default Cell;
