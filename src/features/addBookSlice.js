import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";



export const addBookSlice = createSlice({
    name:"Books",
    initialState:{
        value:[]
    },
    reducers:{
        addBook:(state, action)=>{
            state.value.unshift({

            _id:nanoid(), ...action.payload
            })
        }
    }
})

export const {addBook} = addBookSlice.actions
export default addBookSlice.reducer
