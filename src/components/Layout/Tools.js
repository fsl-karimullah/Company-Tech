import React from 'react'

const Tools = (props) => {
    return (
        <div>
            <div className='w-32 sm:w-48 md:w-40 m-10 flex flex-col '>
            <img className='transform duration-500 hover:-translate-y-5' src={props.img} alt="tools-img" />
            <h1 className='text-lg tracking-wide font-semibold text-center m-3'>{props.title}</h1>
            </div>
        </div>
    )
}

export default Tools
