import {INCREMENT , DECREMENT} from './actionTypes'
import { Reducer } from 'react'
import { combineReducers } from 'redux'

const initialState = {
    counter : 0 
}

const  counterReducers = (state = initialState , action) => {
    console.log("reducer called");

    switch(action.type){
        case INCREMENT : 
            return {
                ...state , 
                counter : action.payload + state.counter 
            }
        case DECREMENT : 
        return {
            ...state , 
            counter : state.counter  - action.payload
        }
        default : 
        return state  ; 
    }

}



export default combineReducers({
    counterReducers,

}
)