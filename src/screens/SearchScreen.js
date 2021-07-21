import React from 'react'
import './SearchScreen.css'
import data from '../data'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { cardAction } from '../redux/actions.js/cardAction'
import Header from '../components/Header'
import { auth } from '../firebase'
import { TYPES } from '../redux/types'

const SearchScreen = () => {
const dispatch=useDispatch()
const termOut=useSelector(state=>state.termOut)
console.log("termOut",termOut)
    return (
      

        <div className="searchscreen "> 
        <div className="urun-search row"> 

        {
            
                    data.products.filter(prd=>prd.filtre.toLowerCase().includes(`${termOut.term}`.toLowerCase())).map(data=>(
                      <Link className="col-lg-4 ilk"  key={data._id}>
                       <Link to={`detail/${data._id}`}> <img src={data.image}/> </Link> 
                         <span className="urun-adi">{data.name}</span>
                         <span>{data.price} TL</span>
                         <button   onClick={auth?.currentUser?.displayName  ? ()=>{ dispatch(cardAction(data._id)) } : ()=>{ dispatch({
                       type:TYPES.MODAL,payload:true
                     }) } }>Sepete Ekle</button>
                      </Link>
                    ))
                
            
        }
            
        </div>


       
        </div>
       
    )
}

export default SearchScreen
