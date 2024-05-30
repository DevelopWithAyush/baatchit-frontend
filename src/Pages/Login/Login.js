import React, { useContext, useState } from 'react'
import "./Login.css"
import Deco from '../../Components/Deco/Deco'
import { Link } from 'react-router-dom'
import { AlertContext } from '../../Context/Alertcontext/AlertState';
let user;
const Login = () => {
  const context = useContext(AlertContext)
  const {showAlert} = context;
  const [username,setusername] = useState("")
  user = username;
  const handleonsubmit =()=>{
showAlert(`hii ${username}`)
  }
  return (
    <div className='Login-page'>
       <Deco/>
        <div className="loginbox">
            <form action="" className='loginform'>
                <input onChange={(e)=>{setusername(e.target.value)}} value={username} type="text" placeholder='Enter your name' id='username' />
                <Link onClick={(e)=>!username?e.preventDefault():null} to="/chat"><button  onClick={handleonsubmit}>join</button> </Link>
                
                </form> 

        </div>
    </div>
  )
}

export default Login
export {user}
