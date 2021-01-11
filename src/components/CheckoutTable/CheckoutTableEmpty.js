import React from 'react';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import { useHistory } from 'react-router-dom';

export const CheckoutTableEmpty = () => {
    const history =useHistory()
    return (
        <div className="__checkout_emtpy">
            <h3>Your Shopping Cart is Empty!</h3>
            <button 
                className="boton-verde"
                onClick={()=>history.push("/") }
                
                >
                    <KeyboardReturnIcon/> go back Home!
            </button>
        </div>
    )
}
