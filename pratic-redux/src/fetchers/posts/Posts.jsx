import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost } from './postsSlice';

const Posts = () => {
    const {isLoaing, posts, error} = useSelector(state=> state.posts);

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchPost())
    }, [])
  return (
    <div>
      {
        isLoaing && <p>Loading...</p>
      }
      {
        error && <p>{error}</p>
      }
      {
        posts.map((item)=> <div>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
        </div>)
      }
    </div>
  )
}

export default Posts
