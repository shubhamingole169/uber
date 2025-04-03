import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';

const UserSignup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, setUser } = useContext(UserDataContext); // Correct context usage
  const navigate = useNavigate(); // Define before usage

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);

      if (response.status === 201) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token', data.token)
        navigate('/home');
      }
    } catch (error) {
      console.error('Signup failed:', error);
    }

    // Reset form fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img
          className='w-16 ml-8'
          src='https://download.logo.wine/logo/Uber/Uber-Logo.wine.png'
          alt='Uber Logo'
        />
        <form onSubmit={submitHandler}>
          <h3 className='text-base font-medium mb-2'>What's your Name?</h3>
          <div className='flex gap-4 mb-6'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
              type='text'
              placeholder='First Name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-base'
              type='text'
              placeholder='Last Name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <h3 className='text-base font-medium mb-2'>What's your Email?</h3>
          <input
            required
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type='email'
            placeholder='email@example.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className='text-base font-medium mb-2'>Enter Password</h3>
          <input
            required
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 text-lg'
          >
            Create Account
          </button>
        </form>
        <p className='text-center'>
          <Link to='/login' className='text-blue-600'>
            Already have an account?
          </Link>
        </p>
      </div>
      <p className='text-[10px] leading-tight'>
        By proceeding, you agree to receive calls, WhatsApp, or SMS messages, including automated ones, from Uber and its affiliates to the number provided.
      </p>
    </div>
  );
};

export default UserSignup;
















































// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios';
// import {UserContext} from '../context/UserContext'

// const UserSignup = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [user, setUser] = useState((UserContext))

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     const newUser = {
//       fullName: {
//         firstName : firstName,
//         lastName: lastName,
//       },
//       email: email,
//       password: password,
//     }

//     const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/register`, newUser)

//     if(response.status === 201){
//       const data = response.data

//       setUser(data.user)
      
//       navigate('./home')
//     }



//     // console.log(userDate)

//     setFirstName('');
//     setLastName('');
//     setEmail('');
//     setPassword('');
//   }


//   const navigate = useNavigate()

//   const {user, setUser} = React.useContext(UserContext)

//   return (
//     <div className='p-7 h-screen flex  flex-col justify-between'>
//         <div>
//         <img className='w-16 ml-8' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt=""/>
//         <form onSubmit={(e) => {submitHandler(e)}}>
//             <h3 className='text-base font-medium mb-2'>Whats your Name</h3>
//             <div className='flex gap-4 mb-6'>
//             <input
//             required
//             className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border text-lg placeholder:text-base'
//             type="text"
//             placeholder='first name'
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//             />
//             <input
//             required
//             className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-base'
//             type="text"
//             placeholder='last name'
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//             />
//             </div>
//             <h3 className='text-base font-medium mb-2'>Whats your email</h3>
//             <input
//             required
//             className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
//             type="email"
//             placeholder='email@example.com'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             />
//             <h3 className='text-base font-medium mb-2'>Enter password</h3>
//             <input
//             required
//             className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
//             type="password"
//             placeholder='password'
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             />
//             <button
//             className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 text-lg placeholder:text-base'
//             >Create Account</button>
//         </form>
//             <p className='text-center'> <Link to ='/login' className='text-blue-600'> Already have account?</Link></p>
//         </div>
//             <p className="text-[10px] leading-tight ">
//               By proceeding to get calls, Whatsapp or SMS message , including by the automatic , from Ubar and its affilated ot the number provide.
//             </p>
//     </div>
//     )
// }

// export default UserSignup
