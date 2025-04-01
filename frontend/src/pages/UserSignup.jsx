import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userDate, setUserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();

    setUserData({
      fullName: {
        firstName : firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    })

    console.log(userDate)

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  }

  return (
    <div className='p-7 h-screen flex  flex-col justify-between'>
        <div>
        <img className='w-16 ml-8' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt=""/>
        <form onSubmit={(e) => {submitHandler(e)}}>
            <h3 className='text-base font-medium mb-2'>Whats your Name</h3>
            <div className='flex gap-4 mb-6'>
            <input
            required
            className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border text-lg placeholder:text-base'
            type="text"
            placeholder='first name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            />
            <input
            required
            className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-base'
            type="text"
            placeholder='last name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            />
            </div>
            <h3 className='text-base font-medium mb-2'>Whats your email</h3>
            <input
            required
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email"
            placeholder='email@example.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <h3 className='text-base font-medium mb-2'>Enter password</h3>
            <input
            required
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="password"
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button
            className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 text-lg placeholder:text-base'
            >SignUp</button>
        </form>
            <p className='text-center'> <Link to ='/login' className='text-blue-600'> Already have account?</Link></p>
        </div>
            <p className="text-[10px] leading-tight ">
              By proceeding to get calls, Whatsapp or SMS message , including by the automatic , from Ubar and its affilated ot the number provide.
            </p>
    </div>
    )
}

export default UserSignup
