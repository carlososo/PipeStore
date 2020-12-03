import { useEffect, useState,  } from 'react';
import fetchData from '../utils/fetchData';

const useFetch =(url,listener, initialState=[])=>{

    const [products, setProducts] = useState(initialState)

    
    useEffect(()=>{
        (async ()=>{
            const {data} = await fetchData.get(url)
            setProducts(data);
        })();
    },[url, listener])
    return {products, setProducts};
}

export default useFetch;