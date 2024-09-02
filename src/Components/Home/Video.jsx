import React from 'react'
import VideoLeftSide from './VideoLeftSide'
import VideoRightSide from './VideoRightSide'

function Video() {

    return (
        <div className='min-h-full w-full absolute top-16 md:flex justify-between ' >
            <div className={`h-full w-full md:w-2/3 `} >
                <VideoLeftSide />
            </div>
            <div className={`h-full w-full md:w-2/6 `} >
                <VideoRightSide />
            </div>
        </div>
    )
}

export default Video