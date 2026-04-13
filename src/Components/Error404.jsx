import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

function Error404() {

    const error = useRouteError()
    console.log(error);

    return (
        <div className='flex flex-col justify-center items-center h-screen p-2 text-center'>
            <h1 className='text-2xl md:text-4xl font-[Bitcount_Grid_Double]'>
                The Book you want to search is not here....
            </h1>
            <div className='flex justify-center flex-col items-center'>
                <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHlqZTEzMGJ0aXdhN2Z5aTQxb2JxcWpqcDBrOTR2OGxpdnZqY2o1ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8L0Pky6C83SzkzU55a/giphy.gif" className='rounded-4xl w-[300px]' alt="" />
                <div className='font-[Nunito] font-bold text-xl'>
                    <h1>

                        {error.error.message}
                    </h1>
                    {error.status} : {error.statusText}
                </div>
                <Link to={'/'} className='bg-white text-black border-2 font-bold font-mono p-4 rounded-4xl cursor-pointer transition-all duration-150 hover:shadow-[2px_5px_3px_gray] ease-in-out hover:scale-110 hover:bg-black hover:text-white'>Home</Link>
            </div>
        </div>
    )
}

export default Error404