import React  , {useContext} from 'react'
import UserContext from '../Context/UserContext'
const Profile = () => {

    const {user} = useContext(UserContext)
    if (!user) return <div>Please Login</div>

    return <div> Weclome {user.username} </div>
}

export default Profile