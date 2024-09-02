import React, { useContext } from 'react'
import { GlobalContext } from '../Context/ContextApi';
import { AiFillHome } from 'react-icons/ai';
import { IoVideocam } from 'react-icons/io5';
import { MdOutlineSubscriptions } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { toast } from 'react-toastify';

function Footer() {
    const { value, setValue } = useContext(GlobalContext)
    const footerData = [
        {
            name: 'Home',
            icon: <AiFillHome />,
            type: 'New'
        },
        {
            name: 'Shorts',
            icon: <IoVideocam />,
            type: 'Short videos'
        },
        {
            name: 'Subscriptions',
            icon: <MdOutlineSubscriptions />,
            type: 'Mr beast'
        }
    ];
    return (
        <div className='flex justify-around items-center' >
            {
                footerData.map((item, ind) => (
                    <div key={ind} onClick={() => setValue(item.type)} className='my-1 flex flex-col justify-center items-center cursor-pointer' >
                        <h1 className={` ${value === item.type ? 'text-2xl' : 'text-xl'} hover:text-2xl m-auto`} >{item.icon}</h1>
                        <p className={`${value === item.type ? 'text-white font-semibold text-sm' : 'text-gray-400 text-xs'} `} >{item.name}</p>
                    </div>
                ))
            }
            <div onClick={() => toast.warning(`Sorry, "This button doesn’t work.`, { theme: 'dark' })} className='my-1 flex flex-col justify-center items-center cursor-pointer' >
                <CgProfile className='text-xl m-auto' />
                <p className='text-gray-400 text-xs' >You</p>
            </div>
        </div>
    )
}

export default Footer