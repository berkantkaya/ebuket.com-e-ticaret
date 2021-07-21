import { CardGiftcardTwoTone } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import Message from '../components/Message'
import { cardAction, removeAction } from '../redux/actions.js/cardAction'
import './CardScreen.css'

const CardScreen = (props) => {
    
    const productId=props.match.params.id
      const dispatch=useDispatch()
      const card=useSelector(state=>state.card)
      const {cardItems}=card
     // console.log("cardItems",cardItems)
       useEffect(()=>{
        if(productId){
            dispatch(cardAction(productId))
        }
       },[dispatch,productId])


        const removeFromCardHandler=(id)=>{
            dispatch(removeAction(id))
        }
          
           
            // cardItems.forEach(card=>(
            //    // console.log(Number(card.price))
            // ))

            //  for(let i=0;i<=cardItems.length-1;i++){
            //    return setToplam(cardItems[i].price)
            //  }
        
            var sum = cardItems.reduce(function(a, b){
                a += b['price'];
                return a;
              },0)
    return (


        <div className="cardscreen">
            {
            cardItems.length === 0 ? (
                <Message/>
            ) :
            (
                   cardItems.map(card=>(
                     <div key={card.id} className="card-in">
                         <img src={card.image}/>

                          <p>{card.name}</p>
                          <p>{card.price} TL</p>
                          <button onClick={()=>removeFromCardHandler(card.id)}>Ürünü Sil</button>
                     </div>
                 ))
                )
            }

           
             { cardItems.length>0 &&
             <div className="total-genel">
             <div className="total">
                <h5>Ürün Miktarı: <strong>{cardItems.length}</strong> </h5>
                <h5>Toplam Tutar: <strong>{sum} TL</strong> </h5>
                <h5>{sum > 50 ? <span>Kargo Tutarı : <strong> 0 TL</strong> </span> : <span>Kargo Tutarı :<strong> 50 TL</strong></span>}</h5>
                <h5>Ödenecek Miktar: <strong>{sum > 50 ? sum : sum+50} TL</strong> </h5>
                <button>Ödeme Yapın</button>
             </div>
             </div>
             }
           
              
        </div>
       
    )
}

export default CardScreen
