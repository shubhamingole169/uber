import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {

    return (
        <div>
            <div className='bg-cover bg-center bg-[url(https://png.pngtree.com/png-clipart/20190902/original/pngtree-traffic-traffic-lights-are-commercially-available-png-image_4386668.jpg)] h-screen pt-8  flex justify-between flex-col w-full bg-red-400'>
            <img className='w-16 ml-8' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />
                <div className='bg-white pb-7 py-4 px-5'>
                    <h2 className='text-2xl font-bold'>Get Started with Ubar</h2>
                    <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
                </div>
            </div>
        </div>
    )
}

export default Start
