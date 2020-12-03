import React from 'react'
import { useLocation } from 'react-router-dom'
import SideBar from '../components/SideBar'

export const Welcome = ({pathname}) => {
    
    console.log(pathname)
    return (
        <div>
            <SideBar pathname={pathname} />
        </div>
    )
}
