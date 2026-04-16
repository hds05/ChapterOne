import { configureStore } from "@reduxjs/toolkit";
import BooksReducer from "../features/addBookSlice";

// create the Redux store for the application
export const store = configureStore(
    {
        reducer:{
            // add the Books slice reducer to the Redux store
            Books: BooksReducer,
        }
    }
)