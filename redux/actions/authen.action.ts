import { CLEAR, LOGIN } from "../types";
import {Account} from "../../types/Account"

const setLoginReducer = (payload) => ({
    type: LOGIN,
    payload
})

const setClearReducer = () => ({
    type: CLEAR,
})

//from ui to action
const login = ({username,password}:Account)=>{
    return dispatch => {
        // dispatch ส่งข้อมูลไปยัง reducer
        //from action to reducer
        setTimeout(()=>{
            dispatch(setLoginReducer({token:Math.random().toString(),user:{username}}))
        },500)
    }
}

const clear = () =>{
    return dispatch=>{
        dispatch(setClearReducer())
    }
}

export default{
    login,
    clear
}