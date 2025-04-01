import React, { createContext, useState } from 'react'

export const UserDataContext = createContext()
const UserContex = ({children}) => {

  const [user, setUser] = useState({
    fullName: {
      firstName: '',
      lastName: ''
    },
    email: '',
    password: ''
  })
  return (
    <div>
      <UserDataContext.Provider value={[user, setUser]}>
        {children}
      </UserDataContext.Provider>
    </div>
  )
}

export default UserContex
