import React, { useContext, useEffect } from "react";
import NavBar from "../components/Navbar";
import BelowNavBar from "../components/BelowNavBar";
import { ProductContext } from "../context/ProductContex";
import {CheckoutTable, CheckoutTableEmpty} from "../components/CheckoutTable";

const Checkout = () => {
  const {product, setProduct} = useContext(ProductContext)

  useEffect(() => {
    localStorage.setItem('productList', JSON.stringify(product))
  }, [product])

  const calculateTotal =()=>{
    let total =0;
    product.map(prod=>{return total +=prod.priceXquantity})
    return(total);
  }
  
  return (
    <>
      <NavBar />
      <BelowNavBar />
      <div className="__checkout_main">
        <h1 className="__checkout_title">Checkout</h1>
        <div className="__checkout_table">
        {(product.length===0 )?

        <CheckoutTableEmpty/>
        :
        <CheckoutTable products ={product} setProduct={setProduct}/>}
          
        </div>
        <div>
            <p className="__checkout_total">Total: ${product.length>0 && calculateTotal()}</p>
        </div>
      </div>
    </>
  );
};

export default Checkout;
