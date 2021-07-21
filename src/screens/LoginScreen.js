import { TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../firebase'
import './SignupScreen.css'

const LoginScreen = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const history=useHistory()
    useEffect(()=>{
        const unsubscribe= auth.onAuthStateChanged((authUser)=>{
             if(authUser){
                history.push('/')
             }
         }) 
      return unsubscribe
      },[])
 
     const signIn =()=>{
       auth.signInWithEmailAndPassword(email,password)
       .catch(error=>alert(error))
     }
 
    return (
        <div className="signup-screen">
            <div className="signup">
       <h2>Login</h2>    
  <div className="forminput">     
  <TextField value={email} onChange={e=>setEmail(e.target.value)} className="inputOut" id="standard-basic" label="Email" />
  <TextField value={password} onChange={e=>setPassword(e.target.value)} className="inputOut" id="standard-basic" label="Password" />
  </div>
  <button onClick={signIn}>Giriş Yap</button>

        </div>
        </div>
    )
}

export default LoginScreen

