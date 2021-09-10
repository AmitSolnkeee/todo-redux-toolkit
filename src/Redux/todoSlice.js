import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:[]
    
}

const todoSlice= createSlice({name:"todoList",initialState,reducers:{
   storeValue:(state,action)=>{
       state.value = [...state.value,action.payload]    
   },
   del:(state,action)=>{
    var arr=state.value.filter((item,index,array)=>{return index!=action.payload.in})
    state.value=arr
   }
   
  
}})

 export const {storeValue,del}= todoSlice.actions

export default todoSlice.reducer