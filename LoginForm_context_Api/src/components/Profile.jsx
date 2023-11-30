import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return  <div class= " block mr-1 font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
    Please Login
  

</div>

    return <div className="bg-blue-400 p-9 rounded-md text-xl text-white font-bold text-8xl">Welcome {user.username}</div>
}

export default Profile