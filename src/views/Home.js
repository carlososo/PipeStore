import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import fetchData from '../utils/fetchData';
import queryString from "query-string";
import NavBar from "../components/Navbar";
import ContentLoader from "../components/ContentLoader";
import { useLocation } from "react-router-dom";

import "../styles/index.scss";
import  BelowNavBar from "../components/BelowNavBar/";
import  {CarouselComponent }from "../components/Carousel";
import { image1, image2, image3 } from "../utils/img/imageExports";

const Home = () => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const { products } = useFetch("/api/v1/item");
  const [search, setSearch] = useState([]);

  useEffect(() => {
    const getSearch =async()=>{
      const {data}= await fetchData("api/v1/item",{
        params:{
          name:q
        }
      })
      setSearch(data);
    }
    getSearch();
    
  }, [q]);

  return (
    <div className="animate__animated animate__fadeIn">
      <NavBar />
      <BelowNavBar/>
      <CarouselComponent image1={image1} image2={image2} image3={image3}/>
      
        <ContentLoader search={search} products={products}/>
    </div>
  );
};
export default Home;
