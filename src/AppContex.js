import React, { useState } from 'react';
import { ProductContext } from './context/ProductContex';
import { UserContext } from './context/UserContext';
import AppRouter from './routes/AppRouter';


const AppContext =()=>{
    const [product, setProduct] = useState({
        product:''
    });

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
            <AppRouter/>
            </UserContext.Provider>
        </ProductContext.Provider>
    )
}
export default AppContext;