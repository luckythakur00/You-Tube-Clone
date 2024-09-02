import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/ContextApi';
import { AiFillHome, AiOutlineFlag, AiOutlineLike } from 'react-icons/ai';
import { CgMusicNote, CgPlayList, CgProfile, CgShoppingCart } from 'react-icons/cg'
import { GiDiamondTrophy, GiEclipse, GiHelp, GiNewspaper, GiVideoCamera } from 'react-icons/gi'
import { MdFeedback, MdHistory, MdLiveTv, MdLocalFireDepartment, MdMovie, MdOutlineSubscriptions, MdWatchLater } from 'react-icons/md'
import { IoGameControllerSharp, IoSettings, IoVideocam, IoVideocamSharp } from 'react-icons/io5';
import { RiLightbulbLine } from 'react-icons/ri';
import { toast } from 'react-toastify';

function SideBar() {
    const { sideBar, value, setValue } = useContext(GlobalContext)

    const sideBar1 = [
        {
            id: 1,
            name: 'Home',
            icon: <AiFillHome />,
            type: 'New'
        },
        {
            id: 2,
            name: 'Shorts',
            icon: <IoVideocam />,
            type: 'Short videos'
        },
        {
            id: 3,
            name: 'Subscriptions',
            icon: <MdOutlineSubscriptions />,
            type: 'Mr beast'
        }
    ];

    const sideBar2 = [
        {
            id: 1,
            name: 'Your channel',
            icon: <CgProfile />
        },
        {
            id: 2,
            name: 'History',
            icon: <MdHistory />
        },
        {
            id: 3,
            name: 'Playlists',
            icon: <CgPlayList />
        },
        {
            id: 4,
            name: 'Your videos',
            icon: <GiVideoCamera />
        },
        {
            id: 5,
            name: 'Watch Later',
            icon: <MdWatchLater />
        },
        {
            id: 6,
            name: 'Liked videos',
            icon: <AiOutlineLike />
        },
    ];

    const sideBar3 = [
        {
            id: 1,
            name: 'GreatStack',
            icon: <CgProfile />
        },
        {
            id: 2,
            name: 'Chai aur Code',
            icon: <CgProfile />
        },
        {
            id: 3,
            name: 'Mr Beast',
            icon: <CgProfile />
        },
        {
            id: 4,
            name: 'Sheriyans Coding School',
            icon: <CgProfile />
        },
        {
            id: 5,
            name: 'UR Cristiano',
            icon: <CgProfile />
        },
        {
            id: 6,
            name: 'Learn Coding',
            icon: <CgProfile />
        },
        {
            id: 7,
            name: 'Nishant Chahar',
            icon: <CgProfile />
        },
    ];

    const sideBar4 = [
        {
            id: 1,
            name: 'Trending',
            icon: <MdLocalFireDepartment />
        },
        {
            id: 2,
            name: 'Shopping',
            icon: <CgShoppingCart />
        },
        {
            id: 3,
            name: 'Music',
            icon: <CgMusicNote />
        },
        {
            id: 4,
            name: 'Films',
            icon: <MdMovie />
        },
        {
            id: 5,
            name: 'Sports',
            icon: <GiDiamondTrophy />
        },
        {
            id: 6,
            name: 'Gaming',
            icon: <IoGameControllerSharp />
        },
        {
            id: 7,
            name: 'News',
            icon: <GiNewspaper />
        },
        {
            id: 8,
            name: 'Courses',
            icon: <RiLightbulbLine />
        },
        {
            id: 9,
            name: 'Fashion & beauty',
            icon: <GiEclipse />
        },
        {
            id: 10,
            name: 'Podcasts',
            icon: <IoVideocamSharp />
        },
        {
            id: 11,
            name: 'Live',
            icon: <MdLiveTv />
        },
    ];

    const sideBar5 = [
        {
            id: 1,
            name: 'Settings',
            icon: <IoSettings />
        },
        {
            id: 2,
            name: 'Report history',
            icon: <AiOutlineFlag />
        },
        {
            id: 3,
            name: 'Help',
            icon: <GiHelp />
        },
        {
            id: 4,
            name: 'Send feedback',
            icon: <MdFeedback />
        },
    ];

    return (
        <>
            {
                sideBar ?
                    // This is for full side bar
                    <div className='h-[calc(100vh-3rem)] pt-1 overflow-y-scroll overflow-x-hidden  '>
                        {/* First Box */}
                        <div className='pl-4 py-2' >
                            <div className='border-2 border-b-gray-800 pb-2 border-black ' >
                                {
                                    sideBar1.map(item => (
                                        <div key={item.id} onClick={() => setValue(item.type)} className={`h-10 w-full flex justify-around ${value === item.type ? 'bg-gray-800' : ''} items-center hover:bg-gray-800 duration-200 cursor-pointer rounded-lg`} >
                                            <div className=' h-6 mx-2  text-2xl text-white' >{item.icon}</div>
                                            <span className='w-32 text-base' >{item.name.length < 14 ? item.name : item.name.slice(0, 14) + '...'}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        {/* Second Box */}
                        <div className='pl-4 py-4' >
                            <h1 className='pl-3 pb-2 text-lg font-semibold ' >You <span>{'>'}</span></h1>
                            <div className='border-2 border-b-gray-800 pb-2 border-black' >
                                {
                                    sideBar2.map(value => (
                                        <div onClick={()=> toast.warning(`Sorry, "This button doesn’t work.`, {theme: 'dark'} )} key={value.id} className='h-10 w-full flex justify-around items-center hover:bg-gray-800 duration-200 cursor-pointer rounded-lg' >
                                            <div className=' h-6 mx-2 text-2xl text-white' >{value.icon}</div>
                                            <span className='w-32 text-base' >{value.name.length < 14 ? value.name : value.name.slice(0, 14) + '...'}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        {/* Third Box */}
                        <div className='pl-4 py-4 ' >
                            <h1 className='pl-3 pb-2 text-lg font-semibold ' >Subscriptions</h1>
                            <div className='border-2 border-b-gray-800 pb-2 border-black ' >
                                {
                                    sideBar3.map(item => (
                                        <div key={item.id} onClick={() => setValue(item.name)} className={`h-10 w-full flex justify-around items-center ${value === item.name ? 'bg-gray-800' : ''}  hover:bg-gray-800 duration-200 cursor-pointer rounded-lg`} >
                                            <div className='h-6 mx-2 text-2xl text-white' >{item.icon}</div>
                                            <span className='w-32 text-base' >{item.name.length < 14 ? item.name : item.name.slice(0, 14) + '...'}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        {/* Fourth Box */}
                        <div className='pl-4 py-4 ' >
                            <h1 className='pl-3 pb-2 text-lg font-semibold ' >Explore</h1>
                            <div className='border-2 border-b-gray-800 pb-2 border-black ' >
                                {
                                    sideBar4.map(item => (
                                        <div key={item.id} onClick={() => setValue(item.name)} className={`h-10 w-full flex justify-around items-center ${value === item.name ? 'bg-gray-800' : ''}  hover:bg-gray-800 duration-200 cursor-pointer rounded-lg`} >
                                            <div className='h-6 mx-2 text-2xl text-white' >{item.icon}</div>
                                            <span className='w-32 text-base' >{item.name.length < 14 ? item.name : item.name.slice(0, 14) + '...'}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        {/* Fifth Box */}
                        <div className='pl-4 py-4 ' >
                            <div className='border-2 border-b-gray-800 pb-2 border-black ' >
                                {
                                    sideBar5.map(value => (
                                        <div key={value.id} onClick={()=> toast.warning(`Sorry, "This button doesn’t work.`, {theme: 'dark'} )} className='h-10 w-full flex justify-around items-center hover:bg-gray-800 duration-200 cursor-pointer rounded-lg' >
                                            <div className='h-6 mx-2 text-2xl text-white' >{value.icon}</div>
                                            <span className='w-32 text-base' >{value.name.length < 14 ? value.name : value.name.slice(0, 14) + '...'}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        {/* Sixth Box */}
                        <div className='h-48 w-full pl-6 text-start text-sm' >
                            <h1 className='w-full pb-5' >About Press Copyright Contact us Creator Advertise Developers</h1>
                            <h1 className='w-full pb-2' >Terms Privacy Policy & Safety How YouTube works <br /> Test new features</h1>
                            <p className='text-xs text-gray-500' >© 2024 Google LLC</p>
                        </div>

                    </div>
                    :
                    // This is for small side bar.
                    <div className='w-20 text-center pt-1 ' >
                        <div className='py-2  ' >
                            {
                                sideBar1.map(items => (
                                    <div key={items.id} onClick={() => setValue(items.type)} className='h-14 mb-8 cursor-pointer rounded-lg ' >
                                        <div className={`h-7 w-7 m-auto rounded-full ${value === items.type ? 'text-3xl' : 'text-2xl'} hover:text-3xl duration-300 text-white`} >{items.icon}</div>
                                        <span className={` ${value === items.type ? 'text-sm font-semibold' : 'text-xs'} `} >{items.name.length < 14 ? items.name : items.name.slice(0, 14) + '...'}</span>
                                    </div>
                                ))
                            }
                            <div onClick={()=> toast.warning(`Sorry, "This button doesn’t work.`, {theme: 'dark'} )} className='h-14 mb-8 cursor-pointer rounded-lg' >
                                <CgProfile className='h-8 w-8 m-auto rounded-full text-3xl text-white' />
                                <span className='text-xs ' >You</span>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default SideBar