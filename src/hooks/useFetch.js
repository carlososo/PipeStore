import { useEffect, useState,  } from 'react';
import fetchData from '../utils/fetchData';

const useFetch =(url,listener, initialState=[])=>{

    const [products, setProducts] = useState(initialState)


    const submitSignUp =(value, reset, history)=>{
        fetchData.post(url, value)
        .then((response) => {
            console.log(response);
            reset();
            setTimeout(() => {
              history.push("/login");
            }, 2000);
          })
          .catch((err) => console.log(err));
    }
    
    useEffect(()=>{
        (async ()=>{
            const {data} = await fetchData.get(url)
            setProducts(data);
        })();
    },[url, listener])
    return {products, setProducts, submitSignUp};
}

export default useFetch;