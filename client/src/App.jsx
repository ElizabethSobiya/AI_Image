import React from "react"
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Logo from './assets/logo.png'
import {Home, CreatePost} from './page/index'

function App() {
 
  return (
  <>
 <BrowserRouter>
 <header className="w-full flex justify-between items-center bg-white sm:px-8 py-4 px-4 border-b border-b-[#e6ebf4]">
  <Link to='/'>
  <img src={Logo} className='w-20 object-contain' alt="Logo"/>
  </Link>
  <Link className="font-inter font-medium text-white bg-[#6469ff] px-4 py-2 rounded-md" to='/create-post'>
   Create
  </Link>
 </header>
 <main className="sm:p-8 px-4 py-8 bg-[#f9fafe] w-full min-h-[cal(100vh-73px)]"> 
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/create-post" element={<CreatePost/>}/>
 </Routes>

 </main>
 </BrowserRouter>
  </>
  )
}

export default App
