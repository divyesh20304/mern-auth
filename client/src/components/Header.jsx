import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Header = () => {

    const {userData} = useContext(AppContext)

    return (
        <div className='flex flex-col items-center mt-20 px-4 text-center text-grat-800 '>
            <img src={assets.header_img} alt="" className='w-36 h-36 rounded-full mb-6' />
            <h1 className='flex items-center gap-2 text-xl sm:text-8xl font-medium mb-2'> Hey {userData ? userData.name : 'TaskNest'}! <img className='w-8 aspect-sqaure' src={assets.hand_wave} alt="" /></h1>

            <h2 className='text-3xl sm:text-9xl font-semibold mb-4'>Welcome to our app</h2>
            <p className='mb-8 max-w-xl sm:text-2xl'>Empowering teams to effortlessly manage tasks, collaborate in real time, and drive projects to success with ease, all in one unified platform.</p>
            <button className='border border-gray-500 rounded-full px-8 py-2.5 sm:text-4xl hover:bg-gray-100 transition-all'>Get started</button>
        </div>
    )
}

export default Header
