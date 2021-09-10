import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { del } from '../Redux/todoSlice';


export const TodoList = () => {
    const state = useSelector(state => state.todoSlice)
    const dispatch = useDispatch();
    return (
        <div className="compb">
            <div>
                 {state.value.map((value,index,array)=>{return <div className="all"> <div className="mainbox"><div>{value.dt}</div><hr/>{value.n}</div><button className="btn btn-danger" onClick={()=>{dispatch(del({in:index}))}}>Delete</button></div>})}
                 
            </div>
        
           
        </div>
    )
}
