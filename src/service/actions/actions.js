import {ADD_TO_CART , REMOVE_FROM_CART} from '../constants'

export const addToCart =(data)=>{
    // console.warn("action",data)
    return {
        type:ADD_TO_CART,
        data:data
    }
}
export const RemoveFromCart =()=>{
    // console.warn("action",data)
    return {
        type:REMOVE_FROM_CART,
        
    }
}
