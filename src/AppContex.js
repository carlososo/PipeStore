import React, { useState } from 'react';
import { ProductContext } from './context/ProductContex';
import AppRouter from './routes/AppRouter';

const AppContext =()=>{
    const [product, setProduct] = useState({
        product:''
    });

    return(
        <ProductContext.Provider value={{
            product,
            setProduct
        }}
        >
            <AppRouter/>
        </ProductContext.Provider>
    )
}
export default AppContext;