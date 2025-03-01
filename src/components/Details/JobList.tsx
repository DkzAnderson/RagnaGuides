import React from 'react'
import { job } from '../../types/job'

interface Props {
    data: job[]
}


export const JobsList: React.FC< Props > = ({data}) => {
    return (
    <div className='w-full'>
        <div className='w-full flex gap-2'>
            <h4 className='text-sm'>
                Clases: 
            </h4>

            <ul className='w-full grid grid-cols-2 p-2 bg-nd h-12 items-start overflow-auto gap-2'>
                {data.map((job,i)=>(
                        <li
                            key={i}
                            className='flex gap-1 items-center bg-st rounded px-1'
                        >
                            <span 
                                className='text-white'
                                style={{color: job.color}}
                            >
                                {job.icon}
                            </span>
                            <h5 
                                className='text-sm'
                                style={{color: job.color}}
                            >
                                {job.name}
                            </h5>
                        </li>
                    ))}
            </ul>
        </div>
    </div>
  )
}