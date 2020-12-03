import React from 'react'
import SideBar from '../components/SideBar'

export const CheckInfo = ({pathname}) => {
    
    console.log(pathname)
    return (
        <div>
            <SideBar pathname={pathname} />
        </div>
    )
}
