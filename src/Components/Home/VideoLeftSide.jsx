import React, { useContext, useEffect, useState } from 'react'
import { MdVerified } from 'react-icons/md'
import { AiFillDislike, AiFillLike } from 'react-icons/ai'
import { IoDownload } from 'react-icons/io5'
import { CgShare } from 'react-icons/cg'
import { useParams } from 'react-router-dom'
import { fetchData } from '../../Utils/Api'
import { GlobalContext } from '../../Context/ContextApi'

function VideoLeftSide() {
    const { viewCount, loading, setLoading } = useContext(GlobalContext)
    const [videoDetail, setVideoDetail] = useState(null)
    const [allComments, setAllComments] = useState([])
    const [description, setDescription] = useState(false)
    const [comments, setComments] = useState(false)
    const { id } = useParams();

    useEffect(() => {
        fetchvideodetails();
        fetchComments();
    }, [id])

    // This is for video details
    const fetchvideodetails = () => {
        setLoading(true)
        fetchData(`video/details/?id=${id}`).then((response) => {
            setVideoDetail(response)
            setLoading(false)
        })
    }

    // This is for comments on that video
    const fetchComments = () => {
        setLoading(true)
        fetchData(`video/comments/?id=${id}`).then((response) => {
            console.log('Comments::', response.comments);
            setAllComments(response.comments)
            setLoading(false)
        })
    }

    return (
        <div className='h-full w-full'>
            <div className='h-full w-full'>
                {
                    loading ?
                        // This is for skeleton
                        <div className='h-full w-full sm:px-4 md:px-1 lg:px-9' >
                            <div className='relative h-60 md:h-96 lg:h-[65vh] w-full mb-4 sm:mb-2 sm:rounded-xl md:rounded-none lg:rounded-xl overflow-hidden bg-black ' >
                                <div className='skeleton h-full sticky w-full' />
                            </div>
                            <h1 className='h-3 md:h-4 w-1/2 rounded-full skeleton ml-2 sm:ml-0' ></h1>
                            <div className='md:flex justify-between items-center md:border border-black border-b-gray-900 pl-2 sm:pl-0 ' >
                                <h1 className='h-3 md:h-4 w-1/4 rounded-full skeleton my-2 md:my-4 ' ></h1>
                                <h1 className='h-3 w-3/4  md:h-0 md:w-0 visible md:invisible rounded-full skeleton  ' ></h1>
                                <div className='flex justify-end invisible md:visible' >
                                    <h1 className='h-0 md:h-7 w-7 rounded-full skeleton mr-4 lg:mr-0 ' ></h1>
                                    <h1 className='h-0 md:h-7 w-7 rounded-full skeleton mr-4 lg:mr-0 ' ></h1>
                                    <h1 className='h-0 md:h-7 w-7 rounded-full skeleton mr-4 lg:mr-0 ' ></h1>
                                    <h1 className='h-0 md:h-7 w-7 rounded-full skeleton mr-4 lg:mr-0 ' ></h1>
                                    <h1 className='h-0 md:h-7 w-7 rounded-full skeleton mr-4 lg:mr-0 ' ></h1>
                                </div>
                            </div>
                            <div className='invisible md:visible flex justify-between items-center md:mt-6' >
                                <div className='flex justify-between items-center' >
                                    <div className='skeleton h-8 w-8 rounded-full mr-2' ></div>
                                    <div>
                                        <h1 className='skeleton h-4 w-52 rounded-full ' ></h1>
                                        <h1 className='skeleton h-4 w-52 rounded-full mt-2 ' ></h1>
                                    </div>
                                </div>
                                <div className='skeleton h-8 w-40 rounded-md mr-4' ></div>
                            </div>
                        </div>
                        :
                        // This is for the real data of left side.
                        <div className='h-full w-full lg:px-6 ' >

                            <div className='relative h-56 sm:h-[50vh] md:h-[45vh] lg:h-[60vh] xl:h-[70vh] w-full ' >
                                <iframe className='h-full w-full bg-black sm:rounded-xl md:rounded-none lg:rounded-lg ' src={`https://www.youtube.com/embed/${id}`} title="How to Build &amp; Deploy a Full Stack YouTube Clone Application | React Js, Tailwind CSS &amp; Rapid API" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </div>
                            <h1 className='pl-2 lg:pl-0 lg:text-lg font-semibold pt-2 ' >{videoDetail?.title}</h1>

                            {/* Descriptino line for small screens. sm,md */}
                            <div className={`h-full w-full lg:h-0 visible lg:invisible pb-2 pl-2 lg:pl-0 cursor-pointer ${description ? 'flex-col' : ' flex-row'} flex justify-start items-start  text-gray-500`} >
                                <h1 className='text-sm font-semibold pr-2'>{viewCount(videoDetail?.stats?.views)} &bull; {videoDetail?.publishedDate}</h1>
                                <h1 className='text-sm '> {description ? videoDetail?.description : videoDetail?.description.slice(0, 20)} <span className='text-white' onClick={() => setDescription(!description)} >{description ? 'Show less' : '...more'}</span> </h1>
                            </div>

                            {/* Subscribe button line */}
                            <div className='h-full w-full xl:flex justify-between items-center mt-2 mb-6 xl:mb-0' >
                                {/* lefft */}
                                <div className='h-full w-full xl:w-1/2 flex justify-start items-center pl-2 lg:pl-0 ' >
                                    <img className='h-9 w-9 bg-white rounded-full' src={videoDetail?.author?.avatar?.[1]?.url} />
                                    <div className='w-full flex justify-between xl:justify-start items-center' >
                                        <div className='ml-2 flex flex-col justify-start ' >
                                            <div className=' xl:min-w-10 flex items-center ' >
                                                <h1 className='text-sm lg:text-base font-semibold' >{videoDetail?.author?.title}</h1>
                                                <div className='h-0 w-0 xl:w-auto xl:h-auto xl:pl-1 invisible xl:visible' >{videoDetail?.author?.badges?.[0]?.type === 'VERIFIED_CHANNEL' ? <MdVerified /> : null}</div>
                                                <h1 className='visible xl:invisible text-xs pl-2 text-gray-400 font-semibold' >{videoDetail?.author?.stats?.subscribersText}</h1>
                                            </div>
                                            <h1 className='h-0 xl:h-auto invisible xl:visible text-sm text-gray-400 font-semibold' >{videoDetail?.author?.stats?.subscribersText}</h1>
                                        </div>
                                        <button className='h-8 w-28  xl:text-lg mr-2 md:mr-0 xl:ml-4 hover:bg-gray-300 duration-300 rounded-full text-black bg-white' >Subscribe</button>
                                    </div>
                                </div>
                                {/* Right */}
                                <div className='w-full xl:w-1/2 my-2 xl:my-0 lg:mt-2 flex justify-around sm:justify-start xl:justify-end items-center ' >
                                    <div className='h-8 xl:ml-0 mr-2 cursor-pointer flex items-center rounded-full  bg-gray-900 mx-2 lg:mx-0 lg:mr-2' >
                                        <div className='h-full w-full rounded-l-full flex items-center hover:bg-gray-800 duration-300 ' >
                                            <AiFillLike className='text-lg xl:text-2xl mr-2 ml-4 ' />
                                            <h1 className='pr-4 border-2 border-transparent border-r-white' >{viewCount(videoDetail?.stats?.likes)}</h1>
                                        </div>
                                        <div className='h-full w-full px-3 rounded-r-full flex items-center hover:bg-gray-800 duration-300' >
                                            <AiFillDislike className='text-lg xl:text-2xl' />
                                        </div>
                                    </div>
                                    <div className='h-8 px-3 cursor-pointer hover:bg-gray-800 duration-300 flex items-center rounded-full bg-gray-900 ' >
                                        <CgShare className='mr-2 text-lg xl:text-2xl' />
                                        <h1>Share</h1>
                                    </div>
                                    <div className='h-8 px-3 cursor-pointer hover:bg-gray-800 duration-300 flex items-center rounded-full bg-gray-900 mx-2' >
                                        <IoDownload className='mr-1 text-lg xl:text-2xl' />
                                        <h1>Download</h1>
                                    </div>
                                    <div className='h-8 w-8 cursor-pointer hover:bg-gray-800 duration-300 rounded-full text-center text-xl bg-gray-900' >...</div>
                                </div>
                            </div>

                            {/* Descriptino line for large screen. lg */}
                            <div className='h-0 w-0 lg:h-auto lg:w-full invisible lg:visible bg-gray-800 rounded-lg lg:my-6 lg:p-3 cursor-pointer ' >
                                <h1 className='font-semibold'>{viewCount(videoDetail?.stats?.views)} views &bull; {videoDetail?.publishedDate}</h1>
                                <h1 className='text-gray-300 lg:py-2'>{description ? videoDetail?.description : videoDetail?.description.length < 300 ? videoDetail?.description : videoDetail?.description.slice(0, 300)} <span onClick={() => setDescription(!description)} className='text-white ' >{description ? videoDetail?.description.length < 300 ? null : ' Show less' : videoDetail?.description.length < 300 ? null : '...more'}</span> </h1>
                            </div>

                            {/* Comment line for large screens. md,lg,xl */}
                            <div className='h-0 w-0 md:pl-5 md:h-auto md:w-full invisible md:visible ' >
                                <h1 className='font-bold invisible md:visible' >{viewCount(videoDetail?.stats?.comments)} Comments</h1>
                                <div className='invisible md:visible' >
                                    {
                                        allComments?.map((value, ind) => (
                                            <div key={ind} className='h-0 w-0 md:h-auto md:w-auto flex md:mt-5 invisible md:visible ' >
                                                <img className='md:h-10 md:w-10 bg-white rounded-full' src={value?.author?.avatar?.[0].url} alt="" />
                                                <div className='md:w-11/12 md:pl-3' >
                                                    <h1 className='text-sm font-bold ' >{value?.author?.title} <span className='text-gray-500 text-xs pl-1 font-semibold '>{value?.publishedTimeText}</span> </h1>
                                                    <h1 className='h-0 w-0 md:h-auto md:w-auto md:py-2' >{value?.content}</h1>
                                                    <div className='flex items-center' >
                                                        <div className='flex items-center cursor-pointer' >
                                                            <AiFillLike className='text-lg' />
                                                            <p className='text-sm text-gray-300 font-semibold md:ml-1 '>{viewCount(value?.stats?.votes)}</p>
                                                        </div>
                                                        <AiFillDislike className='text-lg md:ml-4 flex md:mt-1 cursor-pointer' />
                                                        <h1 className='text-sm cursor-pointer pl-1'>Reply</h1>
                                                    </div>
                                                </div>
                                                <h1 className='text-2xl' >:</h1>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            {/* Comment line for small screens. sm */}
                            <div className='min-h-10 visible md:invisible pl-2 ' >
                                {
                                    comments ?
                                        <div onClick={() => setComments(false)} >
                                            <h1 className='font-bold' >{viewCount(videoDetail?.stats?.comments)} Comments</h1>
                                            <div>
                                                {
                                                    allComments?.map((value, ind) => (
                                                        <div key={ind} className='flex mt-5 ' >
                                                            <img className='h-10 w-10 bg-white rounded-full' src={value?.author?.avatar?.[0].url} alt="" />
                                                            <div className='w-11/12 pl-3' >
                                                                <h1 className='text-sm font-bold ' >{value?.author?.title}<span className='text-gray-500 text-xs pl-1 font-semibold '>{value?.publishedTimeText}</span> </h1>
                                                                <h1 className='py-2' >{value?.content}</h1>
                                                                <div className='flex items-center' >
                                                                    <div className='flex items-center cursor-pointer' >
                                                                        <AiFillLike className='text-lg' />
                                                                        <p className='text-sm text-gray-300 font-semibold ml-1 '>{viewCount(value?.stats?.votes)}</p>
                                                                    </div>
                                                                    <AiFillDislike className='text-lg mx-4 flex mt-1 cursor-pointer' />
                                                                    <h1 className='text-sm cursor-pointer'>Reply</h1>
                                                                </div>
                                                            </div>
                                                            <h1 className='text-2xl px-2' >:</h1>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        :
                                        <div onClick={() => setComments(true)} className='ml-2 bg-gray-900 mx-2 rounded-lg p-2 cursor-pointer' >
                                            <h1 className='font-bold' >{viewCount(videoDetail?.stats?.comments)} Comments</h1>
                                            {
                                                <div className='flex justify-start items-start mt-2' >
                                                    <img className='h-10 w-10 bg-white rounded-full mr-2' src={allComments?.[0]?.author?.avatar?.[0]?.url} alt="" />
                                                    <h1>{allComments?.[0]?.content.length < 80 ? allComments?.[0]?.content : allComments?.[0]?.content.slice(0, 80) + '...'}</h1>
                                                </div>
                                            }
                                        </div>
                                }
                            </div>

                        </div>
                }
            </div>
        </div>
    )
}

export default VideoLeftSide