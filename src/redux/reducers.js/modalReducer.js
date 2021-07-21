import { TYPES } from "../types";


export const modalReducer=(state={modall:false},action)=>{
 switch(action.type){

    
         case TYPES.MODAL :
         return{
             ...state,
            modall:action.payload
         }
         

       default:
           return state  
 }
}