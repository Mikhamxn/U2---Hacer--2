import React from 'react';
import { SlArrowRightCircle } from "react-icons/sl";

function Card(props) {
    let cardStyles = 'p-0.5 w-[350px] gap-2 flex flex-col';
    let backgroundColorClass = 'bg-gray-500';

    switch (props.color) {
        case 'red':
            backgroundColorClass = 'bg-red-500';
            break;
        case 'blue':
            backgroundColorClass = 'bg-blue-500';
            break;
        case 'green':
            backgroundColorClass = 'bg-green-500';
            break;
        case 'yellow':
            backgroundColorClass = 'bg-yellow-500';
            break;
        default:
            backgroundColorClass = 'bg-gray-500';
            break;
    }

    cardStyles += ` ${backgroundColorClass}`;

    return (
        <div className={cardStyles}>
            <div className='flex flex-row justify-around m-1 pt-3 px-3 pb-1.5'>
                <img src={props.imagen} className='h-24 w-24' alt="" />
                <div className='gap-2 flex flex-col'>
                    <h1 className='text-white font-bold text-4xl'>{props.nombre}</h1>
                    <p className='text-white text-lg'>Gestión completa</p>
                </div>
            </div>
            <div className='bg-white'>
                <a href={props.href} className='h-10 cursor-pointer flex flex-row justify-between items-center px-10'>
                    <p>Comenzar</p><SlArrowRightCircle />
                </a>
            </div>
        </div>
    );
}

export default Card;
