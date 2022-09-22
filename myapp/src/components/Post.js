import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ShowPost from "./ShowPost";s

export const Post = () => {
    const [data, setData]=useState([])
    useEffect(()=>{
        axios.get(`https://codebuddy.review/posts`).then((response)=>{
            setData(response.data);
        }).catch((error)=>{
            console.log("error!", error);
        })
    })
  return (
    <div>{data.map((element)=>{
       return  <ShowPost element={element}/>
    })}</div>
  )
}
export default Post;
