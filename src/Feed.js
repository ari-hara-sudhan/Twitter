import React, { useState } from 'react'
import "./Feed.css"
import { Avatar } from '@material-ui/core'
import Post from './Post'
import { Button } from '@material-ui/core'
function Feed() {
    const [comment,setComment]=useState()
    const [urls,setUrls]=useState()
    return (
        <div className="feed"> 
        <div className="feed__header">
        <h3>Home</h3>
        </div>
        <div className="feed__container">
        
        <div className="feed__info">
            <div className="feed__first" >
             <Avatar/>
             <input placeholder="Enter the Comments..."
             value={comment}
             onChange={}
             />
            </div>
            <input placeholder="Enter the ImageUrl..."/>
            </div>
            
          
            <Button className="feed__button">Tweet</Button>

        </div>
        
     <Post 
     profile="https://www.bing.com/th?id=OIP.Wz7q2PbSSxnRg1_R0jXyqwHaEy&w=227&h=137&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
     message="hello from programmer"
     timestamp="2 minutes"
     image="https://www.bing.com/th?id=OIP.EX06LwC8_VGSzTS9nNSyoQHaFj&w=132&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
     
     />
      <Post 
     profile="https://www.bing.com/th?id=OIP.Wz7q2PbSSxnRg1_R0jXyqwHaEy&w=227&h=137&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
     message="hello from programmer"
     timestamp="2 minutes"
     image="https://www.bing.com/th?id=OIP.EX06LwC8_VGSzTS9nNSyoQHaFj&w=132&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
     
     />
       <Post 
     profile="https://www.bing.com/th?id=OIP.Wz7q2PbSSxnRg1_R0jXyqwHaEy&w=227&h=137&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
     message="hello from programmer"
     timestamp="2 minutes"
     image="https://www.bing.com/th?id=OIP.EX06LwC8_VGSzTS9nNSyoQHaFj&w=132&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
     
     />
    
        </div>
    )
}

export default Feed
