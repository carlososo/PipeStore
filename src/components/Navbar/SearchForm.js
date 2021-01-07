import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "../../styles/index.scss";
import { useForm } from "../../hooks/useForm";
import { useHistory } from "react-router-dom";



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
    <form className="form-inline form-width " onSubmit={handleSubmit}>
      <div className="bg-custom-light form-group col-lg-12 rounded">
        <input
          className="form-control col-11  custom-bg-light borders-right input-custom"
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
