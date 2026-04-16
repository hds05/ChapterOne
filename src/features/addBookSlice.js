import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";


// create a Redux slice to manage user-added books
export const addBookSlice = createSlice({
    name: "Books",

    // initial state containing an empty array of books
    initialState: {
        value: []
    },
    reducers: {
        // add a new book to the beginning of the books array
        addBook: (state, action) => {
            state.value.unshift({
                // generate a unique id for every new book
                _id: nanoid(), 
                // add all book details from the dispatched payload
                ...action.payload
            })
        }
    }
})
// export the addBook action so it can be dispatched from components
export const { addBook } = addBookSlice.actions
// export the reducer to configure it inside the Redux store
export default addBookSlice.reducer
