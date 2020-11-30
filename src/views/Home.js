import React, {useEffect, useState  } from "react";
import useFetch from "../hooks/useFetch";
import Card from '../components/Card'
import queryString from 'query-string'


import "../index.scss";
import { useLocation } from "react-router-dom";

const Home = () => {

  const location = useLocation();
  const {q=""}= queryString.parse(location.search);
  
  
    const { products } = useFetch("/api/v1/item");
    const [search, setSearch] = useState([])
    

 useEffect(()=>{
    
    const filterSearch =products.filter(({product_name})=>{return product_name?.toLowerCase().includes(q || "")})
    setSearch(filterSearch)
        
 },[q])
 
//  console.log(products)
  
  return (
    <div className="container-custom">
        <h1 className="display-3 text-center">Chek out our product Variety </h1>
      <div className="row" >
          {search.length===0?<Card products={products} />:<Card products={search} />}
      </div>
      <div>
          <h3 className="display-4 text-center">
              Check out out categories!
          </h3>
      </div>
    </div>
  );
};
export default Home;
