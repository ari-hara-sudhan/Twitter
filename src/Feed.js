import React, { useEffect, useState } from 'react'
import "./Feed.css"
import { Avatar } from '@material-ui/core'
import Post from './Post'
import { Button } from '@material-ui/core'
import db from './firebase'
import firebase from 'firebase'
function Feed() {
    const [comment,setComment]=useState()
    const [url,setUrl]=useState()
    const [posts,setPosts]=useState([])
    const upload=(e)=>{
        e.preventDefault();
        db.collection("tweets").add({
            image:url,
            message:comment,
            profile:"https://www.bing.com/th?id=OIP.5Mzm03CJXLOw1a-tPYQJtAHaEo&w=147&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })
        setComment("");
        setUrl("");
    }
    useEffect(()=>{
        db.collection("tweets").onSnapshot(snapshot=>{
            setPosts(snapshot.docs.map(doc=>doc.data()))
        })
    },[])
    return (
        <div className="feed"> 
        <div className="feed__header">
        <h3>Home</h3>
        </div>
        <div className="feed__container">
            <form>
                   
        <div className="feed__info">
            <div className="feed__first" >
             <Avatar/>
             <input placeholder="Enter the Comments..."
             value={comment}
             onChange={e=>setComment(e.target.value)}
             />
            </div>
            <input placeholder="Enter the ImageUrl..."
            value={url}
            onChange={e=>setUrl(e.target.value)}
            
            />
            </div>
            
          
            <Button onClick={upload} type='submit' className="feed__button">Tweet</Button>

            </form>
     

        </div>


{
    posts.map(post=>(
        <Post 
        profile={post.profile}
        message={post.message}
        image={post.image}
        timestamp={post.timestamp}
        
        />
    ))
}

        
  

    
    
        </div>
    )
}

export default Feed
