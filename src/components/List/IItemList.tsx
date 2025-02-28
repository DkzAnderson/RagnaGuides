import React, { useState } from 'react'
import { FarmGuide } from '../../types/farm'
import { Link } from 'react-router-dom';

interface Props {
    data: FarmGuide;
}

export const ItemList: React.FC<Props> = ({data}) => {

    const [optionsIsOpen,setIsOpen] = useState(false);

  return (
    <div className='w-full flex'>
        <div className='flex flex-col w-full'>
            <h3 className=''
                onClick={()=>setIsOpen(!optionsIsOpen)}
            >
                {data.title}
            </h3>

            <ul 
                className={`overflow-hidden flex flex-col gap-2 list-disc transition-all duration-300 ease-in-out ${optionsIsOpen ? "max-h-96 mt-2 pl-8" : "max-h-0"}`}
            >
                {data.values.map((farm,i)=> {
                    return(
                        <li key={i}
                            className='bg-rd/50 rounded-lg px-2 py-1'
                        >
                            <Link 
                                className='truncate'
                                to={`/details/${farm.title}`}
                            >
                                {farm.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}
