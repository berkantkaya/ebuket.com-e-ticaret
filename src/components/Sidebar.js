import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { TYPES } from '../redux/types'
import './Sidebar.css'

const Sidebar = () => {
   const [down,setDown]=useState(false)
   const dispatch=useDispatch()
   const history=useHistory()

   const click=()=>{
      dispatch({
         type:TYPES.SEARCH,payload:"giyim"
      })
      history.push("/search")
   }
   const clickb=()=>{
      dispatch({
         type:TYPES.SEARCH,payload:"bes"
      })
      history.push("/search")
   }
   const clicki=()=>{
      dispatch({
         type:TYPES.SEARCH,payload:"bez"
      })
      history.push("/search")
   }
   const clicku=()=>{
      dispatch({
         type:TYPES.SEARCH,payload:"oyuncak"
      })
      history.push("/search")
   }
   const clicka=()=>{
      dispatch({
         type:TYPES.SEARCH,payload:"ayakkabı"
      })
      history.push("/search")
   }
   
    return (
        <div className="sidebar">
           <ul>
               <li onClick={click}>
                  <i class="fas fa-tshirt"></i>
                  <span>Giyim</span> 
               </li>
               <li onClick={clickb}>
                  <i class="fab fa-nutritionix"></i>
                  <span>Beslenme</span> 
               </li>

               <li onClick={clicki}>
               <i class="fas fa-mitten"></i>
                  <span>Bez & Mendil</span> 
               </li>
               <li onClick={clicku}>
               <i class="fas fa-book"></i>
                  <span>Oyuncak</span> 
               </li>
               <li onClick={clicka}>
               <i class="fas fa-baby-carriage"></i>
                  <span>Araçlar</span> 
               </li>
               <li>
               <i class="fas fa-baby-carriage"></i>
                  <span>Bebek Odası</span> 
               </li>
               
               
              
               <li>
               <i class="fas fa-wine-bottle"></i>
                  <span>Emzirme</span> 
               </li>
               <li>
               <i class="fas fa-file-signature"></i>
                  <span>Güvenlik</span> 
               </li>
      
               <li onClick={()=>setDown(false)}  onMouseOver={()=>setDown(true)} style={{position:'relative'}}>
               <span className="blue"></span>
                  <span >İnternete Özel</span> 
                  <p onMouseOver={()=>setDown(!down)} style={down ? {display:'inline',position:'absolute',left:'100%',width:300,height:'auto',background:'white',border:'1px solid gray',color:'black',borderRadius:10,zIndex:500 } : {display:'none',position:'absolute'}} className={down ? 'dropd' : 'drop'}>
                  <div >
                     <button className="drop-out">KAPAT</button>
                     </div>
                     <div>
                     <img src="https://media.istockphoto.com/vectors/cute-toddler-baby-care-vector-id493934614" alt=""/>
                     <span>Biberonlar</span>
                     </div>
                     <div>
                     <img src="https://im0-tub-ru.yandex.net/i?id=1f8a4938afdc34e9847d6cd7a4b351be&ref=rim&n=33&w=150&h=150" alt=""/>
                     <span>Oyuncaklar</span>
                     </div>
                     <div>
                     <img src="https://yt3.ggpht.com/a/AATXAJyjUPqM2FtqVA2B40CG2bQcs82y42-1UckW4Q=s900-c-k-c0xffffffff-no-rj-mo" alt=""/>
                     <span>Elbiseler</span>
                     </div>
                     <div>
                     <img src="https://media.istockphoto.com/vectors/cute-toddler-baby-care-vector-id493934614" alt=""/>
                     <span>Besinler</span>
                     </div>
                     <div>
                     <img src="https://yt3.ggpht.com/a/AATXAJyjUPqM2FtqVA2B40CG2bQcs82y42-1UckW4Q=s900-c-k-c0xffffffff-no-rj-mo" alt=""/>
                     <span>Fırsatlar</span>
                     </div>
                     <div>
                     <img src="https://im0-tub-ru.yandex.net/i?id=1f8a4938afdc34e9847d6cd7a4b351be&ref=rim&n=33&w=150&h=150" alt=""/>
                     <span>Ebeveyn</span>
                     </div>
                   
                  </p>
               </li>
               <li>
               <span className="red"></span>
                  <span>Yeni Ürünler</span> 
               </li>
               <li>
               <span className="green"></span>
                  <span>Kampanyalar</span> 
               </li>
               <li>
               <span className="orange"></span>
                  <span>Outlet</span> 
               </li>
               <li>
               <span className="gray"></span>
                  <span>Mağazalar</span> 
               </li>
           </ul>
        </div>
    )
}

export default Sidebar
