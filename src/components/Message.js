import React from 'react'
import { Link } from 'react-router-dom'

const Message = () => {
    return (
        <div style={{height:"70vh",display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <span style={{marginBottom:30,fontSize:20}}>Sepetiniz Boş...  <Link style={{textDecoration:'underline',color:'blue'}} to="/">ALışverişe Devam</Link> </span>
            <img style={{width:250,height:250}} src="https://st2.depositphotos.com/1967477/8364/v/600/depositphotos_83642588-stock-illustration-cartoon-emoticon-crying.jpg" alt=""/>
        </div>
    )
}

export default Message
