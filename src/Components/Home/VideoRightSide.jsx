import React, { useContext, useEffect, useState } from 'react'
import { MdVerified } from 'react-icons/md'
import { fetchData } from '../../Utils/Api';
import { Link, useParams } from 'react-router-dom';
import { GlobalContext } from '../../Context/ContextApi';

function VideoRightSide() {
    const { viewCount, loading, setLoading, convertTime } = useContext(GlobalContext);
    const [recomendedVideo, setRecomendedVideo] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetchRecomendedVideos();
    }, [id])

    const fetchRecomendedVideos = () => {
        setLoading(true)
        fetchData(`video/related-contents/?id=${id}`).then((response) => {
            console.log('result from videoRightSide::', response.contents);
            setRecomendedVideo(response.contents);
            setLoading(false)
        })
    }


    return (
        <div className='h-full w-full' >
            {
                loading ?
                    // This is for skeleton
                    <div className='h-full w-full md:px-3 lg:pl-6'>
                        {
                            Array(5).fill('').map((_, ind) => (
                                <div key={ind} className='min-h-44 px-2 md:px-0 w-full lg:flex justify-start mt-3' >
                                    <div className='skeleton h-40 lg:w-1/2 rounded-md ' ></div>
                                    <div className='lg:w-1/2 mt-2 pl-2' >
                                        <div className='skeleton h-2 w-1/2 rounded-lg' ></div>
                                        <h1 className='skeleton h-2 w-2/5 rounded-lg mt-1' ></h1>
                                        <h1 className='skeleton h-2 w-10/12 rounded-lg mt-1' ></h1>
                                    </div>
                                </div>
                            ))
                        }
                    </div> :

                    // This is the real video data
                    <div className='h-full w-full px-4 lg:pl-6 '>
                        {
                            recomendedVideo?.map((value, ind) => (
                                <Link to={`/video/${value?.video?.videoId}`} key={ind} className='min-h-32 w-full md:min-h-52 lg:min-h-36 flex justify-between md:flex-col lg:flex-row mt-3 cursor-pointer' >
                                    <div className='h-36 w-1/2 sm:h-52 md:h-36 md:w-full lg:w-1/2 relative rounded-md overflow-hidden ' >
                                        <img className='h-full w-full bg-gray-700' src={value?.video?.thumbnails?.[0]?.url} alt="" />
                                        <h1 className='absolute right-1 bottom-1 px-2 rounded-sm text-xs bg-black/85 text-white' >{value?.video?.lengthSeconds && convertTime(value?.video?.lengthSeconds)}</h1>
                                    </div>
                                    <div className='w-1/2 md:w-full lg:w-1/2 bg-black pl-2' >
                                        <h1 className='text-sm xl:text-base' >{value?.video?.title.length < 50 ? value?.video?.title : value?.video?.title.slice(0, 50) + '...'}</h1>
                                        <div className='flex justify-start items-center pt-1 text-xs xl:text-sm text-gray-400' >
                                            <h1>{value?.video?.author?.title} </h1>
                                            <h1 className='ml-1'>{value?.video?.author?.badges?.[0]?.type === 'VERIFIED_CHANNEL' ? <MdVerified className='text-xs ml-1' /> : null}</h1>
                                        </div>
                                        <h1 className='text-xs xl:text-sm text-gray-400' >{viewCount(value?.video?.stats?.views)} viwes &bull; {value?.video?.publishedTimeText}</h1>
                                    </div>
                                    <h1 className='h-auto md:h-0 lg:h-auto visible md:invisible lg:visible px-1 lg:px-0' >:</h1>
                                </Link>
                            ))
                        }
                    </div>
            }
        </div >
    )
}

export default VideoRightSide