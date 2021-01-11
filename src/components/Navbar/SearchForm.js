import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "../../styles/index.scss";
import { useForm } from "../../hooks/useForm";
import { useHistory } from "react-router-dom";

import '../../styles/index.scss'



export const SearchForm = () => {
  const history= useHistory();
  
  const [value, handleInputChange, reset] = useForm({
    product: ''
  });
  const {product}= value;
  


  const handleSubmit = (e) => {
    if(product?.length>0){
      e.preventDefault();
      
      history.push(`/?q=${product}`)
      reset();

    }else{
      e.preventDefault();
      alert("Please input something first")
    }
  };
  
  
  return (
    <form className=" " onSubmit={handleSubmit}>
      <div className="__search_input_container">
        <input
          className=" __search_input"
          type="search"
          placeholder="Search"
          autoComplete="off"
          aria-label="Search"
          name="product"
          value={product}
          onChange={handleInputChange}
        />
        <button
          className="boton btn-verde  my-2 my-lg-0 borders-left"
          type="submit"
        >
          <SearchIcon />
        </button>
      </div>
    </form>
  );
};
