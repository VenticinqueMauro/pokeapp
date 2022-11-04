import React from 'react'
import loading from '../img/loading.gif'

export const Loader = () => {
    return (
        <div className='flex flex-col items-center mx-auto mt-10 text-center'>
            <img src={loading} alt='loader' width={200} />
        </div>
    )
}
