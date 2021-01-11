import React from 'react'
import SideBar from '../components/SideBar'

export const Favorites = ({pathname}) => {
    
    console.log(pathname)
    return (
        < >
            <SideBar active={"favorites"} pathname={pathname} />
            <section className="display-main text-center animate__animated animate__fadeIn">
                Favorites
            </section>
        </>
    )
}
