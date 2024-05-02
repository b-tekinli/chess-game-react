import React from 'react'
import { useDrop } from 'react-dnd';
import { move } from './Game';

const Square = ({ children, colorValue, positionControl }) => {
    const [,drop] = useDrop({
        accept: 'chess',
        drop: (item) => {
            const [fromPosition] = item.id.split('_');
            move(fromPosition, positionControl)
        }
    })

    return (
        <div ref={drop} className={`${colorValue ? 'bg-red-800' : 'bg-red-200'} w-[80px] h-[80px] flex justify-center items-center cursor-grab`}>
            {children}
        </div>
    )
}

export default Square;
