import React from 'react'
import './DetailScreen.css'
import data from '../data'
import Comment from '../components/Comment'
import { Link, useHistory } from 'react-router-dom'
import Header from '../components/Header'

const DetailScreen = (props) => {
const product=data.products.find(prd=>prd._id===props.match.params.id)
console.log("product",product)
const history=useHistory()
const addToCardHandler=()=>{
    history.push(`/card/${product._id}`)
}
    return (


        <div className="detailscreen">
          <img src={product.image}/>
          <div className="detail-right">
            <span style={{marginLeft:10,textTransform:'uppercase'}}>
                {product.name}
            </span>
            
                <span style={{marginLeft:10,fontFamily:'cursive',fontWeight:'bold',marginTop:10}}>
                {product.description}
            </span>
          
            <span className="price">
                {product.price} TL
            </span>

            <button onClick={addToCardHandler}>
                <div>
                    <span>-</span>
                    <span>1</span>
                    <span>+</span>
                </div>
                <span>Sepete Ekle</span>
            </button>
            <button style={{marginTop:10,backgroundColor:'green'}}>
                 <Link style={{color:'white'}} to="/"> <span>Anasayfaya Dön</span></Link>
            </button>
            <Comment product={product}/>
          </div>
        </div>
       
    )
}

export default DetailScreen
