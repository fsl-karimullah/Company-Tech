import React from 'react'

const Features = (props) => {
    return (
        <div className='m-2 py-2 px-4'>
            <div className='bg-gray-50 rounded-xl transform duration-500 hover:scale-110 hover:bg-gray-300'>
                {/* img */}
                <div className='flex justify-center'>
                <img className='w-96' src={props.img} alt={props.alt} />
                </div>

                {/* title desc */}
                <div className='text-center m-2 px-12'>
                <h1 className='text-lg font-semibold'>{props.title}</h1>
                <p className='py-10 text-center '>{props.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Features
