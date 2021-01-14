import React, { useState } from 'react';
import { FavoriteProvider } from './context/FavoriteContext';
import { ProductContext } from './context/ProductContex';
import { UserContext } from './context/UserContext';
import AppRouter from './routes/AppRouter';


const AppContext =()=>{
    const [product, setProduct] = useState([]);

    const [isLogged, setisLogged] =useState()

    return(
        <ProductContext.Provider value={{
            product,
            setProduct,
        }}
        >
            <UserContext.Provider value={{
                isLogged,
                setisLogged
            }}>
            <FavoriteProvider>
            <AppRouter/>
            </FavoriteProvider>
            </UserContext.Provider>
        </ProductContext.Provider>
    )
}
export default AppContext;