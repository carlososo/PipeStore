import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import fetchData from '../utils/fetchData';
import queryString from "query-string";
import NavBar from "../components/Navbar";
import ContentLoader from "../components/ContentLoader";
import { useLocation } from "react-router-dom";

import "../index.scss";

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
    <div>
      <NavBar />
      
        <ContentLoader search={search} products={products}/>
      )
    </div>
  );
};
export default Home;
