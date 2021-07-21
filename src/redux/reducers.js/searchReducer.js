import { TYPES } from "../types";


export const searchReducer=(state={term:null,load:true},action)=>{
 switch(action.type){

    
         case TYPES.SEARCH :
         return{
             ...state,
            term:action.payload,
            load:false
         }
         

       default:
           return state  
 }
}