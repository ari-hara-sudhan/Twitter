import React from 'react'
import "./Sidebar.css"
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOptions from './SidebarOptions';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button } from '@material-ui/core';

function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar__logo" fontSize="large"/>
            <SidebarOptions 
            current
            Icon={HomeIcon}
            title="Home"
            />
            <SidebarOptions 
            Icon={ExploreIcon}
            title="Explore"
            />
            <SidebarOptions 
            Icon={SubscriptionsIcon}
            title="Subcribe"
            />
            <SidebarOptions 
            Icon={VideoLibraryIcon}
            title="Videos"
            />
            <SidebarOptions 
            Icon={HistoryIcon}
            title="History"
            />
            <SidebarOptions 
            Icon={VideoCallIcon}
            title="call"
            />
            <SidebarOptions 
            Icon={ThumbUpAltIcon}
            title="Like"
            />
            <SidebarOptions 
            Icon={ExpandMoreIcon}
            title="show more"
            />
            <Button className="sidebar__button">Tweet</Button>
        </div>
    )
}

export default Sidebar
