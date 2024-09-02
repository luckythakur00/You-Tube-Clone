import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/ContextApi';
import { Link } from 'react-router-dom';
import { MdVerified } from 'react-icons/md';

function Feed() {
    const { data, loading, viewCount, setSideBar, value, setValue, convertTime } = useContext(GlobalContext)

    const upperBar = [
        'All', 'Coding', 'shorts', 'Music', 'Mr Beast', 'GreatStack', 'Javascript', 'web development', 'Learn Coding', 'Chai aur code',
        'mogli', 'deadpool', 'Sheriyans Coding School', 'One Piece', 'garp vs akoji', 'sanji', 'Punisher', 'Pahadi songs',
        'Apna College', 'Road Side Code', 'Cartoons'
    ]

    return (
        <div className=' min-h-[calc(100vh-10rem)] w-full absolute top-10 sm:top-16 '>
            {/* Top Scroller */}
            <div className={`h-12 pt-2 w-full sm:h-16 sm:w-[calc(100vw-6rem)] bg-black pl-0 sm:pl-6 hide-scrollbar overflow-y-hidden overflow-x-auto fixed top-11 z-40 flex justify-ceter items-center sm:pt-4`} >
                {
                    upperBar.map((item, ind) => (
                        <div key={ind} onClick={() => setValue(item)} className='h-full w-full m-auto bg-black mx-1 sm:mx-2' >
                            <h1 className={`h-8 min-w-20 pt-1 text-center rounded-lg ${value === item ? 'text-base bg-gray-900 text-white' : 'text-sm bg-gray-800 text-gray-400'} hover:text-white hover:text-base hover:bg-gray-900 duration-300 cursor-pointer`} >{item.length < 8 ? item : item.slice(0, 8) + '..'}</h1>
                        </div>
                    ))
                }
            </div>

            {/* Video Section */}
            <div className='h-full w-full ' >
                {
                    loading ?
                        // This is for Skeleton loading.
                        <div className='h-full w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 '>
                            {
                                Array(18).fill(null).map((_, ind) => (
                                    <div key={ind} className='min-h-56 w-full sm:min-h-64 sm:w-[90%] md:min-h-52 md:w-[100%] lg:min-h-60 lg:w-[98%] m-auto' >
                                        <div className={`h-48 w-full sm:h-52 md:h-48 lg:h-56 skeleton mb-2 rounded-lg`}></div>

                                        <div className='flex' >
                                            <div className={`h-10 w-12 mr-2 skeleton rounded-full `}></div>
                                            <div className='w-full' >
                                                <h1 className={`h-2 sm:h-4 w-11/12 skeleton rounded-xl mb-2 `}></h1>
                                                <h2 className={`h-2 w-2/4 skeleton rounded-xl mb-2`} ></h2>
                                                <h3 className={`h-2 w-3/4 skeleton rounded-xl mb-2 `} ></h3>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div> :

                        // This is for all videos
                        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  h-full w-full gap-10 px-4 '>
                            {
                                data?.map((value, ind) => (
                                    <Link to={`/video/${value?.video?.videoId}`} key={ind} className='min-h-56 w-full sm:min-h-64 sm:w-[90%] md:h-72 md:w-[100%] lg:h-[300px] lg:w-[98%] m-auto' >
                                        <div onClick={() => setSideBar(false)} className='relative rounded-lg' >
                                            <img className='h-52 sm:h-56 md:h-52 lg:h-56 w-full bg-gray-400 rounded-lg cursor-pointer' src={value?.video?.thumbnails?.[0].url} />
                                            <h1 className=' absolute bottom-1 right-1 rounded-sm px-2 text-xs bg-black/80'  >{value?.video?.lengthSeconds && convertTime(value?.video?.lengthSeconds) }</h1>
                                        </div>
                                        <div className='flex justify-start py-2 items-start ml-2 sm:ml-0' >
                                            <img className='h-10 w-10 bg-white rounded-full' src={value?.video?.author?.avatar?.[0]?.url} />
                                            <div className='w-full flex justify-between items-start' >
                                                <div className='pl-2' >
                                                    <h1 className='w-full sm:text-sm pb-2 font-semibold cursor-pointer'>{value?.video?.title.length < 40 ? value?.video?.title : value?.video?.title.slice(0, 40) + '...'} </h1>
                                                    <div className='text-xs text-gray-400 font-semibold flex justify-start items-center' >
                                                        <h2>{value?.video?.author?.title}</h2>
                                                        <h2 className='pl-1' >{value?.video?.author?.badges?.[0]?.type === 'VERIFIED_CHANNEL' ? <MdVerified /> : null}</h2>
                                                    </div>
                                                    <h3 className='text-xs rounded-xl text-gray-400' >{viewCount(value?.video?.stats?.views) + ' Views'} &bull; {value?.video?.publishedTimeText} </h3>
                                                </div>
                                                <h1 className='mr-3' >:</h1>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                }
            </div>

        </div>
    )
}

export default Feed