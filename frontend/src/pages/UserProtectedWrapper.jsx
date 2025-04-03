import React, { useContext, useEffect, useState } from 'react'
import { UserDataContext } from './../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserProtectedWrapper = ({
    children
}) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    console.log(token)

    // if (!token) {
    //     return navigate('/login')
    // }
    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token, navigate]);

    axios.get(`${import.meta.VITE_BASE_URL}/users/profile`, {
        headers: {
            Authorizarion: `Bearer ${token}`
        }
    }).then(response => {
        if(response.status === 200){
            SpeechSynthesisUtterance(response.data.user)
            setIsLoading(false)
        }
    })
    .catch(err => {
        console.log(err)
        localStorage.removeItem('token')
        navigate('/login')
    })


    if(isLoading){
        return(
            <div> Loading ....</div>
        )
    }
    return (
        <>
            {children}
        </>
    )
}

export default UserProtectedWrapper


