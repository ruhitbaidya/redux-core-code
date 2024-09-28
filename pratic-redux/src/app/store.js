import  { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../fetchers/counter/counterSlice";
import postsReducer from "../fetchers/posts/postsSlice";



const store = configureStore({
    reducer : {
        counter : counterReducer,
        posts : postsReducer
    }
})

export default store;