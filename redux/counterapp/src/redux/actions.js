
import {INCREMENT , DECREMENT} from './actionTypes'

export function Incrementor(value){
    return {
        type : INCREMENT , 
        payload : 1 , 
    }
}
export function Decrementor(value){
    return {
        type : DECREMENT , 
        payload : 1 , 
    }
}