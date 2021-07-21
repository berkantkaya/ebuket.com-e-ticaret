import React, { useEffect, useState } from 'react'
import './Comment.css'
import Rating from '@material-ui/lab/Rating';
import db, { auth } from '../firebase';
import firebase from 'firebase'

const Comment = ({product}) => {

    const name=["Ahmet Alıcı","Deniz Yaşar","Güney Samur","Merit Acar","Nevzat Üngörmüş","Zafer Adamış","Melahat Gün","Sevda Karapınar","Lütfü Özel","Nefise Artan"]
    const yorum=["Ürün gercekten cok kullanıslı cok begendim.","Fiyatına göre normal bir ürün","Ürün anlatıldıgı gibi güzel degil","Maalesef Begenmedim","Harikaaaa çok tesekkürler","İyi ki bu ürünü almısım ","teşekkürlerrrrrr","Hızlı kargo,kaliteli ürün","Satıcı gercekten cok ilgiliydi","Muazzam gercekten muazzam"]
    const randomname=Math.floor(Math.random()* 9)
    console.log("random",randomname)
    
    const random=Math.floor(Math.random()* 5)+1

    const [input,setInput]=useState('')
    const [chats,setChats]=useState([])
console.log("chats",chats)
    useEffect(()=>{
      const unsubscribe =db.collection('chats').onSnapshot(snapshot=>(
          setChats(snapshot.docs.map(doc=>({
              id:doc.id,
              data:doc.data()
          })))
      ))
      return unsubscribe
    },[])


    const createChat=async()=>{
      await db.collection("chats")
      .add({
          chatName:input,
          timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      })
      setInput("")
    }
    console.log("authhhhh")

    return (
        <div className="comment">
        <div className="comment-ic">

            <div className="msg">
                <div className="tarih">
                <p>{name[randomname]}</p>
                <p>20/10/2021</p>
                </div>
                  
                  <div className="msg-content">
                    <span>{yorum[randomname]}</span>
                    <Rating name="half-rating-read" defaultValue={random}  readOnly />
                  </div>

            </div>
            <div className="msg">
                <div className="tarih">
                <p>{name[randomname+1]}</p>
                <p>20/10/2021</p>
                </div>
                  
                  <div className="msg-content">
                    <span>{yorum[randomname+1]}</span>
                    <Rating name="half-rating-read" defaultValue={random}  readOnly />
                  </div>




            </div>

            { chats.map(chat=>(
             <div className="msg">
             <div className="tarih">
             <p>{auth?.currentUser?.displayName}</p>
             <p>20/10/2021</p>
             </div>
               
               <div className="msg-content">
                 <span>{chat.data.chatName}</span>
                 <Rating name="half-rating-read" defaultValue={random}  readOnly />
               </div>

         </div>
            ))
               
            }

        </div>

            <div className="send-message">
            <input value={input} onChange={e=>setInput(e.target.value)} type="text" placeholder="Yorum ekle..."/>
            <button disabled={!input} onClick={createChat}>Gönder</button>
            </div>
         

        </div>
    )
}

export default Comment
