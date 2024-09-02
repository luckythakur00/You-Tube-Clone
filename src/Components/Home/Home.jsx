import React, { useContext } from 'react'
import SideBar from './SideBar'
import Feed from './Feed'
import { GlobalContext } from '../../Context/ContextApi'
import Footer from '../Footer'

function Home() {
    const { sideBar } = useContext(GlobalContext)

    return (
        <div>
            <div className='h-full w-full absolute top-16 flex justify-between ' >
                <div className={`h-0 w-0 sm:h-full invisible sm:visible ${sideBar ? 'sm:w-52 ' : 'sm:w-24 '} sm:fixed z-50 top-12 sm:px-2 `} >
                    <SideBar />
                </div>
                <div className={`h-full w-full ${sideBar ? 'sm:w-[calc(100vw-14rem)] sm:left-52' : ' sm:w-[calc(100%-7rem)] sm:left-24'}  sm:relative`} >
                    <Feed />
                </div>
            </div>
            <div className='visible sm:invisible w-full bg-black fixed bottom-0 z-40' >
                <Footer />
            </div>
        </div>
    )
}

export default Home