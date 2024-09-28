import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPost = createAsyncThunk('post/fetch', async()=>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return res?.data
})
 const posts = createSlice({
    name : "post",
    initialState : {
        isLoaing : true,
        posts : [],
        error : null
    },
    extraReducers : (builder)=>{
        builder.addCase(fetchPost.pending, (state)=>{
            state.isLoaing = true
        })
        builder.addCase(fetchPost.fulfilled, (state, action)=>{
            state.isLoaing = false,
            state.posts = action.payload
        })
        builder.addCase(fetchPost.rejected, (state, action)=>{
            state.isLoaing = false,
            state.posts = [],
            state.error = action.error.message
        })
    }
})

export default posts.reducer