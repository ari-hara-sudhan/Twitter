import React from 'react'
import "./Post.css"
import { Avatar } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import CommentIcon from '@material-ui/icons/Comment';
import { IconButton } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
function Post({profile,message,timestamp,image}) {
    return (
        <div className="post">
            <div className='post__top'>
                <Avatar src={profile}/>
                <div className="post__info">
                <h5>{message}</h5>
                <h6>{timestamp}</h6>

                </div>
                

            </div>
            <div className="post__center">
                <img className="post__image" src={image} alt='image'/>

            </div>
            <div className="post__bottom">
                <IconButton className='post__Icon' >
                <ThumbUpAltIcon className="green" fontSize="large"/>
                </IconButton>
                <IconButton className='post__Icon'>
                <ThumbDownAltIcon className="blue"  fontSize="large"/>
                    </IconButton>
                    <IconButton className='post__Icon'>
                          
                <ShareIcon className="black" fontSize="large"/>
                    </IconButton>
                    <IconButton className='post__Icon'>
                    <CommentIcon className="gray" fontSize="large"/>
                    </IconButton>
                
       



            </div>
            
        </div>
    )
}

export default Post
