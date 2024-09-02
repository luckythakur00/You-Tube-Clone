import './App.css'
import Header from './Components/Header'
import { Route, Routes } from 'react-router-dom'
import Video from './Components/Home/Video'
import Home from './Components/Home/Home'
import Search from './Components/Home/Search'

function App() {

  return (
    <div className='h-full w-full bg-black text-white '>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search/:searchQuery' element={<Search />} />
        <Route path='/video/:id' element={<Video />} />
      </Routes>
    </div>
  )
}

export default App