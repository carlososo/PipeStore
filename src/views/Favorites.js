import React from 'react'
import SideBar from '../components/SideBar'

export const Favorites = ({pathname}) => {
    
    const favorites =JSON.parse(localStorage.getItem('favorites')); 

    const parsedFavoritList =()=>{
        return favorites.map((favorite, index)=>(
            <li key={index}>
                {favorite}
            </li>
        ))
    }
    
   

        
                
    return (
        < >
            <SideBar active={"favorites"} pathname={pathname} />
            <section className="display-main text-center animate__animated animate__fadeIn">
                <ul>
                    {parsedFavoritList()}
                </ul>
            </section>
        </>
    )
}
