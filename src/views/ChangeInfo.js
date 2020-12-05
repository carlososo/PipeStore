import React from 'react'
import SideBar from '../components/SideBar'

export const ChangeInfo = ({pathname}) => {
    
    console.log(pathname)
    return (
        <div>
            <SideBar active="changeinfo" pathname={pathname} />
        </div>
    )
}
