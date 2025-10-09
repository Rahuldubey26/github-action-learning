import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className='min-h-screen flex flex-col bg-gray-100'>
    <div className='w-full'>
      <Header />
    </div>
  
    <main className='flex-grow p-6'>
      <h1 className='text-3xl font-semibold text-center text-gray-800 mb-6'>
        BLOGS
      </h1>
      <div className='bg-white p-6 rounded-lg shadow-lg'>
        <Outlet />
      </div>
    </main>
  
    <Footer/>
  </div>
  
  ) : null
}

export default App
