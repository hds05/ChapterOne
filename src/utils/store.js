import { configureStore } from "@reduxjs/toolkit";
import BooksReducer from "../features/addBookSlice";

export const store = configureStore(
    {
        reducer:{
            Books: BooksReducer,
        }
    }
)