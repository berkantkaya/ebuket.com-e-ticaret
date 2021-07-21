import React, { useState } from 'react'
import './Urunler.css'
import data from '../data'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { cardAction } from '../redux/actions.js/cardAction'
import { auth } from '../firebase'
import { TYPES } from '../redux/types'

const Urunler = () => {
  
  

    const dispatch=useDispatch()
    return (
        <div className="urunler">
          <h3>Ayakkabı</h3> 
         <div className="urun-slider"> 
            {
                data.products.filter(prd=>prd.filtre==="ayakkabı").map(data=>(
                  <Link className="son" key={data._id}>
                    <Link  to={`detail/${data._id}`}> <img src={data.image}/> </Link>
                     <span className="urun-adi">{data.name}</span>
                     <span>{data.price} TL</span>
                     <button  onClick={auth?.currentUser?.displayName  ? ()=>{ dispatch(cardAction(data._id)) } : ()=>{ dispatch({
                       type:TYPES.MODAL,payload:true
                     }) } }>Sepete Ekle</button>
                  </Link>
                ))
            }
        </div>

        <h3>Elbise</h3> 

        <div className="urun-slider"> 

       
            {
                data.products.filter(prd=>prd.filtre==="giyim").map(data=>(
                  <Link className="son" key={data._id}>
                    <Link  to={`detail/${data._id}`}> <img src={data.image}/> </Link>
                     <span className="urun-adi">{data.name}</span>
                     <span>{data.price} TL</span>
                     <button  onClick={auth?.currentUser?.displayName  ? ()=>{ dispatch(cardAction(data._id)) } : ()=>{ dispatch({
                       type:TYPES.MODAL,payload:true
                     }) } }>Sepete Ekle</button>
                  </Link>
                ))
            }
        </div>
        <h3>Oyuncak</h3> 

        <div className="urun-slider"> 
            {
                data.products.filter(prd=>prd.filtre==="oyuncak").map(data=>(
                  <Link className="son" key={data._id}>
                    <Link  to={`detail/${data._id}`}> <img src={data.image}/> </Link>
                     <span className="urun-adi">{data.name}</span>
                     <span>{data.price} TL</span>
                     <button onClick={auth?.currentUser?.displayName  ? ()=>{ dispatch(cardAction(data._id)) } : ()=>{ dispatch({
                       type:TYPES.MODAL,payload:true
                     }) } }>Sepete Ekle</button>
                  </Link>
                ))
            }
        </div>
        <h3>Beslenme</h3> 

        <div className="urun-slider"> 
            {
                data.products.filter(prd=>prd.filtre==="bes").map(data=>(
                  <Link className="son" key={data._id}>
                    <Link  to={`detail/${data._id}`}> <img src={data.image}/> </Link>
                     <span className="urun-adi">{data.name}</span>
                     <span>{data.price} TL</span>
                     <button  onClick={auth?.currentUser?.displayName  ? ()=>{ dispatch(cardAction(data._id)) } : ()=>{ dispatch({
                       type:TYPES.MODAL,payload:true
                     }) } }>Sepete Ekle</button>
                  </Link>
                ))
            }
        </div>
        <h3>Bez</h3> 
       
        <div className="urun-slider"> 
            {
                data.products.filter(prd=>prd.filtre==="bez").map(data=>(
                  <Link className="son" key={data._id}>
                    <Link  to={`detail/${data._id}`}> <img src={data.image}/> </Link>
                     <span className="urun-adi">{data.name}</span>
                     <span>{data.price} TL</span>
                     <button  onClick={auth?.currentUser?.displayName  ? ()=>{ dispatch(cardAction(data._id)) } : ()=>{ dispatch({
                       type:TYPES.MODAL,payload:true
                     }) } }>Sepete Ekle</button>
                  </Link>
                ))
            }
        </div>
        </div>

    )
}

export default Urunler
