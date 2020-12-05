import React from 'react'
import SideBar from '../components/SideBar'

export const Welcome = ({pathname}) => {
    
    return (
        <div>
            <SideBar active="welcome" pathname={pathname} />
        </div>
    )
}
