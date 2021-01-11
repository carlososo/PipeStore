import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { ProductContext } from "../../context/ProductContex";
import useCounter from "../../hooks/useCounter";
import Swal from 'sweetalert2';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';



const InputCounter = ({selectedProduct}) => {
  const {product, setProduct } = useContext(ProductContext);
  const {isLogged} =useContext(UserContext);
  const { counter, setCounter, increment, decrement } = useCounter(1);
    const CartProduct ={
    ...selectedProduct,
    counter,
    priceXquantity: selectedProduct.price *counter,
    
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
          setProduct([...product,CartProduct])
          Swal.fire('Agregado!',`${selectedProduct.product_name} Agregado al carrito`, 'success')
  }
   
  return (
    <div className="container ">
      <form
        className="form-inline"
        onSubmit={handleSubmit}
      >
        <div className="form-group div-counter input-flex col-12">
          <div className="border border-dark rounded">
            <div onClick={decrement} className="btn ">
              <RemoveIcon/>
            </div>
            <input
            style={{backgroundColor:'transparent'}}
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
