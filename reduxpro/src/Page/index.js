import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { increaseValue,decreaseValue } from '../redux/Action';

const Page = () => {
    const dispatch =useDispatch();
    const counter =useSelector(state=>state.counter)
    return (
        <> 
        <h1>hello</h1>
        <button onClick={()=>dispatch(increaseValue())} >increament</button>
        <p>{counter}</p>
        <button onClick={()=>dispatch(decreaseValue())}>decrement</button>
        

        </>
    )
}

export default Page