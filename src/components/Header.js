import React, { useEffect, useState } from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { TYPES } from '../redux/types';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

const Header = () => {
  // console.log("auth",auth.currentUser)
    const [term,setTerm]=useState('')
    const dispatch=useDispatch()
    const history=useHistory()

      const searchTerm=(e)=>{
        e.preventDefault()
        dispatch({
            type:TYPES.SEARCH,payload:term
        })

        history.push("/search")
      }

      const card=useSelector(state=>state.card)
      const {cardItems}=card;

      const signOutUser=()=>{
        auth.signOut().then(()=>{
            history.push("/login")
           // console.log("signout",auth.signOut())
        })
    }

      //  useEffect(()=>{
      //   if(auth?.currentUser?.displayName){
      //      return auth?.currentUser?.displayName
      //   }
      //  },[auth])
   

    return (
        <>
        <img style={{width:"100%",height:"85%",objectFit:'cover'}} src="https://cdn.e-bebek.com/y.ebebek/9968872161310.jpg" alt=""/>
        <div className="header">
          <Link to="/"><img className="iki" src="https://cdn.e-bebek.com/y.ebebek/ebebek-static/pp-preprod/e-logo.svg" alt=""/> </Link> 
           <div className="inputt">
              <SearchIcon/>
              <input value={term} onChange={e=>setTerm(e.target.value)} placeholder="Ne Aramıştınız?"/>
              <button onClick={searchTerm}>Ara</button>
           </div>
           <div className="header-right">

               
                     <button onClick={()=>history.push("/login")}>Giriş Yap</button>
                     <button onClick={()=>history.push("/signup")}>Üye Ol</button>
                    
               
                  
                    
              
                  <Link to="/card">  <AddShoppingCartIcon className="addhover"/>
                     <span>{cardItems.length}</span>
                     </Link>
           </div>
        </div>
        </>
    )
}

export default Header
