import React, { useContext } from "react";
import useCounter from "../../hooks/useCounter";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { UserContext } from "../../context/UserContext";


const InputCounter = () => {
  const {isLogged} =useContext(UserContext);
  console.log(isLogged)
  const { counter, setCounter, increment, decrement } = useCounter(1);
  return (
    <div className="container ">
      <form
        className="form-inline"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(counter);
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
