import { Avatar, TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../firebase'
import './SignupScreen.css'

const SignupScreen = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [imageUrl,setImageUrl]=useState('')
      const history=useHistory()
     
      useEffect(()=>{
        const unsubscribe= auth.onAuthStateChanged((authUser)=>{
             if(authUser){
                history.push('/')
             }
         }) 
      return unsubscribe
      },[])
    
      const register=()=>{
        auth.createUserWithEmailAndPassword(email,password)
        .then(authUser=>{
            authUser.user.updateProfile({
                displayName:name,
                photoURL: imageUrl || <Avatar/>
            })
        })
        .catch(error=>{
            alert(error.message)
        })
    }
 

    return (
        <div className="signup-screen">
            <div className="signup">
       <h2>Register</h2>    
  <div className="forminput">     
  <TextField value={name} onChange={e=>setName(e.target.value)} className="inputOut" id="standard-basic" label="Fullname" />
  <TextField value={email} onChange={e=>setEmail(e.target.value)} className="inputOut" id="standard-basic" label="Email" />
  <TextField value={password} onChange={e=>setPassword(e.target.value)} className="inputOut" id="standard-basic" label="Password" />
  <TextField value={imageUrl} onChange={e=>setImageUrl(e.target.value)} className="inputOut" id="standard-basic" label="Profil URL" />
  </div>
  <button onClick={register}>Üye ol</button>

        </div>
        </div>
    )
}

export default SignupScreen
