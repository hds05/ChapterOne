import React from 'react'
import { FallingLines } from 'react-loader-spinner'

function Loading() {

    return (
        <div className='flex justify-center items-center h-screen'>
            <FallingLines
                color="black"
                width="100"
                visible={true}
                ariaLabel="falling-circles-loading"
            />
        </div>
    )
}

export default Loading