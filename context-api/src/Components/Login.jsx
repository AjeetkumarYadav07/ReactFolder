import React , {useState , useContext} from 'react'
import UserContext  from '../Context/UserContext'
const Login = () => {
    const [ username , setUsername] = useState ('')
    const [password , setPassword] = useState ('')

    //Finding value by user
    function userValue (e) {
        setUsername(e.target.value)
    }

    function passwordValue (e) {
        setPassword(e.target.value)
    }


    const {setUser} = useContext (UserContext)
    
    const handleSubmit = (e) => {
           e.preventDefault()
           setUser({username , password})
    }
  return (
     <>
       <div>
             <h2>Login</h2>
             <input type="text"
             value={username} onChange={userValue} placeholder='username' /> { ''}
             <input type="text" value={password} onChange={passwordValue} placeholder='password' />
             <button onClick={handleSubmit}> Submit </button>
        
    </div>
     </>
  )
}

export default Login