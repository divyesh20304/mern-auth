import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import { AppContext } from '../context/AppContext';

const Home = () => {
    const { role } = useContext(AppContext);

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-[url("/bg_img.png")] bg-cover bg-center'>
            <Navbar />
            <Header />
            {role === 'admin' && <button className='bg-red-500 text-white px-4 py-2 mt-4 rounded'>Admin Panel</button>}
        </div>
    );
}

export default Home;