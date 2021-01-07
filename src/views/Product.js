import React, { useEffect, useState } from "react";
import fetchData from "../utils/fetchData";
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import InputCounter from "../components/InputCounter/";
import TitleHeart from "../components/TitleIcon/";
import Stepper from '../components/Stepper'
import { useParams } from "react-router-dom";
import NavBar from "../components/Navbar";
import { BelowNavBar } from "../components/BelowNavBar/BelowNavBar";

const Product = () => {
  
  const {productId} =useParams()
  const [selectedProduct, setSelectedProduct] = useState({});
  
  useEffect(() => {
    const handleSelectedProduct = async () => {
      const { data } = await fetchData.get(
        `https://ecomerce-master.herokuapp.com/api/v1/item/${productId}`
      );
      return setSelectedProduct(data);
    };
    handleSelectedProduct();
  }, [productId]);

  
  return (
    <div>
      <NavBar toProduct="/product" />
      <BelowNavBar/>
    
    <div className="container-custom ">
      <div className="mb-5">
        <Stepper selectedProduct={selectedProduct}/>
      </div>
      <div className="row justify-content-md-between">
        <div className="col-lg-5">
          <img
            className="rounded"
            src={selectedProduct.image}
            alt={selectedProduct.product_name}
          />
        </div>
        <div className=" col-lg-6">
          <div className="mt-3 ">
            <div className="container-custom title-heart" >
              <TitleHeart selectedProduct={selectedProduct}/>
            </div>
            <div className="container-custom mb-5">
                <InputCounter selectedProduct={selectedProduct}/>
            </div>
            <div className="container-custom">
                <h4>{selectedProduct.brand}</h4>
                <p>Price: <AttachMoneyIcon color="action"/> {selectedProduct.price}</p>
                <h4 className="mt-3">Description:</h4>
                <p>{selectedProduct.description}</p>
                <p className="mt-2">SKU:  {selectedProduct.sku}</p>
                <p>In Stock: {selectedProduct?.isActive? <span>Yes</span>:<span>No</span>}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Product;
