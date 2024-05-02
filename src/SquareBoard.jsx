/* eslint-disable no-unused-vars */
import React from 'react';
import { DragPreviewImage, useDrag } from 'react-dnd';

const SquareBoard = ({ brd, positionControl }) => {
    const [{ isDragging }, drag, preview] = useDrag({
        type: 'chess',
        item: { id: `${positionControl}_${brd.type}_${brd.color}` },
        collect: (monitor) => {
            return { isDragging: !!monitor.isDragging }
        }
    });

    const pieceImg = require(`../public/assets/${brd.type}_${brd.color}.png`);

    return (
        <div ref={drag}>
            <DragPreviewImage src={pieceImg} connect={preview} />
            <img className='w-[60px]' src={pieceImg} alt="" />
        </div>
    )
}

export default SquareBoard;
