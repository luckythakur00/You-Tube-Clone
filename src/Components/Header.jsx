import React, { useContext, useState } from 'react'
import logo from '../assets/yt-logo.png'
import profile from '../assets/user_profile.jpg'
import { AiOutlineBell, AiOutlineMenu } from 'react-icons/ai'
import { CgSearch } from 'react-icons/cg'
import { IoMic } from 'react-icons/io5'
import { RiVideoAddLine } from 'react-icons/ri'
import { GlobalContext } from '../Context/ContextApi'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Header() {
  const { sideBar, setSideBar } = useContext(GlobalContext)
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    if (input === '') {
      toast.warning('Please search something first.', {theme: 'dark'})
    }
  }
  const searchQueryHandler = (event) => {
    if (event.key === 'Enter') {
      navigate(`/search/${input}`)
    }
  }

  return (
    <div className='h-12 w-full bg-black text-white flex justify-between sm:justify-around items-center fixed z-50 px-2 sm:pl-8 ' >
      <div className='h-10 w-2/5 sm:w-1/4 flex justify-start items-center ' >
        <AiOutlineMenu onClick={() => setSideBar(!sideBar)} className='h-6 sm:w-8 sm:mr-5 cursor-pointer invisible sm:visible ' />
        <Link to={'/'} onClick={() => setInput('')}  >
          <img className='h-6 w-24 cursor-pointer' src={logo} />
        </Link>
      </div>
      <div className='h-full w-3/5 ml-20 sm:ml-0 sm:w-1/2 flex justify-center items-center ' >
        <div className='h-8 w-full sm:h-10 sm:w-4/5 flex justify-center items-center overflow-hidden bg-gray-800 rounded-full' >
          <input value={input} onKeyUp={searchQueryHandler} onChange={(e) => setInput(e.target.value)} className=' bg-gray-800 h-full w-3/4 sm:w-11/12 pl-1 sm:pl-4 border-none outline-none ' type="text" placeholder='Search' />
          <Link to={`${input === '' ? '' : `/search/${input}`}`} onClick={() => handleClick()} className=' sm:w-16 ' >
            <CgSearch className='h-6 w-6 sm:h-9 sm:w-8 cursor-pointer m-auto' />
          </Link>
        </div>
        <div className='h-10 w-0 sm:w-10 rounded-full bg-gray-800 ml-2 invisible sm:visible' >
          <IoMic onClick={()=> toast.warning(`Sorry, "This button doesn’t work.`, {theme: 'dark'} )} className='h-7 w-7 mt-2 cursor-pointer m-auto ' />
        </div>
      </div>
      <div className='h-0 w-0 sm:h-10 sm:w-1/4 sm:pr-2 flex justify-end items-center invisible sm:visible ' >
        <RiVideoAddLine onClick={()=> toast.warning(`Sorry, "This button doesn’t work.`, {theme: 'dark'} )} className='h-6 w-6 mx-2 cursor-pointer ' />
        <AiOutlineBell onClick={()=> toast.warning(`Sorry, "This button doesn’t work.`, {theme: 'dark'} )} className='h-6 w-6 mx-2 cursor-pointer ' />
        <img onClick={()=> toast.warning(`Sorry, "This button doesn’t work.`, {theme: 'dark'} )} className='h-10 w-10 mx-2 cursor-pointer rounded-full ' src={profile} />
      </div>
    </div>
  )
}

export default Header