import React from 'react'
import SideBar from '../components/SideBar'

export const Favorites = ({pathname}) => {
    
    console.log(pathname)
    return (
        <div>
            <SideBar active={"favorites"} pathname={pathname} />
        </div>
    )
}