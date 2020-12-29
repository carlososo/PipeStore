import React, { useContext, useState } from "react";
import useCounter from "../../hooks/useCounter";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { UserContext } from "../../context/UserContext";
import { ProductContext } from "../../context/ProductContex";


const InputCounter = ({selectedProduct}) => {
  console.log(selectedProduct);
  const {product, setProduct } = useContext(ProductContext);
  const {isLogged} =useContext(UserContext);
  const { counter, setCounter, increment, decrement } = useCounter(1);
    const CartProduct ={
    ...selectedProduct,
    counter,
    priceXquantity: selectedProduct.price *counter,
    
  }
   
  return (
    <div className="container ">
      <form
        className="form-inline"
        onSubmit={(e) => {
          e.preventDefault();
          setProduct([product,CartProduct])
          console.log(product);
          console.log(typeof product);
        }}
      >
        <div className="form-group div-counter input-flex col-12">
          <div className="border border-dark rounded">
            <div onClick={decrement} className="btn ">
              <RemoveIcon/>
            </div>
            <input
              type="number"
              value={counter}
              onChange={({ target }) => {
                setCounter(parseInt(target?.value)||0);
              }}
              className="ml-1 input-counter"
            />

            <div onClick={increment} className="btn ">
              <AddIcon/>
            </div>
          </div>
          {isLogged &&<button className="boton-verde" >Agregar</button>}
        </div>
      </form>
    </div>
  );
};

export default InputCounter;
