import React, { useContext, useEffect, useState } from 'react'
import SideBar from './SideBar'
import { GlobalContext } from '../../Context/ContextApi'
import { Link, useParams } from 'react-router-dom';
import { MdVerified } from 'react-icons/md';
import { fetchData } from '../../Utils/Api';

function Search() {
    const { sideBar, viewCount, loading, setLoading, convertTime } = useContext(GlobalContext);
    const [searchData, setSearchData] = useState([]);
    const { searchQuery } = useParams();

    useEffect(() => {
        fetchSearchedData()
    }, [searchQuery])

    const fetchSearchedData = () => {
        setLoading(true)
        fetchData(`search/?q=${searchQuery}`).then((res) => {
            setSearchData(res.contents);
            setLoading(false)
        })
    }

    return (
        <div className='h-full w-full' >
            <div className='h-full w-full absolute top-16 flex justify-between ' >
                {/* This is for sideBar */}
                <div className={`h-0 w-0 invisible sm:visible ${sideBar ? 'sm:w-52 ' : 'sm:w-24 '} sm:fixed z-50 top-12 bg-black sm:px-2`} >
                    <SideBar />
                </div>

                {/* This is for Searched Videos */}
                <div className={`h-full w-full ${sideBar ? 'sm:w-[calc(100vw-14rem)] sm:left-52' : ' sm:w-[calc(100%-7rem)] sm:left-24'} sm:relative`} >
                    {
                        loading ?
                            // This one is for Skeleton loading.
                            <>
                                {
                                    Array(5).fill('').map((_, ind) => (
                                        <div key={ind} className='min-h-64 sm:h-72 md:h-60 xl:h-72 w-full md:flex justify-center px-8 lg:px-20 xl:px-36 mb-8 md:mb-0 lg:mb-4' >
                                            <h1 className='h-48 w-full sm:h-56 md:h-5/6 md:w-1/2 lg:h-full skeleton rounded-lg'></h1>
                                            <div className='md:h-full md:w-1/2 pl-2 md:pl-4' >
                                                <h1 className='skeleton h-3 md:h-4 w-full rounded-full my-3 '></h1>
                                                <h3 className='skeleton h-3 md:h-4 w-2/5 rounded-full' > </h3>
                                                <h3 className='skeleton h-3 md:h-4 w-4/5 rounded-full my-2' ></h3>
                                                <h3 className='skeleton md:h-4 md:w-2/3 rounded-full invisible md:visible' ></h3>
                                            </div>
                                        </div>
                                    ))
                                }
                            </>

                            :
                            // This is the real video result
                            <div className='h-full w-full'>
                                {
                                    searchData?.map((value, ind) => (
                                        <Link to={`/video/${value?.video?.videoId}`} key={ind} className='h-60 sm:min-h-60 md:h-52 lg:min-h-60 xl:h-60 w-full md:flex justify-center sm:px-4 lg:px-20 xl:px-32 lg:mb-4' >
                                            <div className='h-56 w-full md:h-52 md:w-1/2 lg:h-60  relative rounded-lg' >
                                                <img className='absolute h-full w-full bg-gray-400 rounded-lg cursor-pointer' src={value?.video?.thumbnails?.[0].url} />
                                                <h1 className='text-sm px-2 absolute bottom-1 right-1 rounded-sm bg-black/85 text-white' >{value?.video?.lengthSeconds && convertTime(value?.video?.lengthSeconds)}</h1>
                                            </div>
                                            <div className='min-h-10 md:w-1/2 flex justify-start items-start mt-2 md:mt-0 pl-2 mb-8' >
                                                <img className='h-10 w-10 md:h-0 md:w-0 rounded-full visible md:invisible' src={value?.video?.author?.avatar?.[0]?.url} />
                                                <div className='h-full w-full md:w-11/12 pl-4' >
                                                    <h1 className='text-base font-semibold text-gray-200 cursor-pointer'>{value?.video?.title}</h1>
                                                    <h3 className='h-0 w-0 md:h-6 md:w-full text-xs text-gray-400 invisible md:visible' >{viewCount(value?.video?.stats?.views)} Views &bull; {value?.video?.publishedTimeText}</h3>
                                                    <div className='flex justify-start items-center lg:py-4  ' >
                                                        <img className='h-0 w-0 md:h-6 md:w-6 rounded-full invisible md:visible' src={value?.video?.author?.avatar?.[0]?.url} />
                                                        <h2 className='text-xs md:pl-2 text-gray-400 font-semibold' >{value?.video?.author?.title}</h2>
                                                        <h2 className='pl-1 mr-2 md:mr-0' > {value?.video?.author?.badges?.[0]?.type === 'VERIFIED_CHANNEL' ? <MdVerified /> : null} </h2>
                                                        <h3 className='text-xs visible md:invisible text-gray-400' >&bull; {viewCount(value?.video?.stats?.views)} Views {value?.video?.publishedTimeText}</h3>
                                                    </div>
                                                    <h3 className='h-0 md:h-full text-xs text-gray-400 invisible md:visible' >{value?.video?.descriptionSnippet}</h3>
                                                </div>
                                            </div>
                                            <h1 className='h-0 md:h-auto invisible md:visible' >:</h1>
                                        </Link>
                                    ))
                                }
                            </div>
                    }
                </div>
            </div>
        </div >
    )
}

export default Search