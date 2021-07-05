import React from 'react'
import "./Sidebaroptions.css"

function SidebarOptions({Icon,title,current}) {
    return (
        <div className={`sidebaroptions ${current && "sidebaroption__active"}`}>
            <Icon/>
            <h3>{title}</h3>
            
        </div>
    )
}

export default SidebarOptions
