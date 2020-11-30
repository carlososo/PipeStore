import { useState } from "react"

const useCounter =(initialState=1)=>{

    const [counter, setCounter] = useState(initialState)

    const increment=()=>{
        setCounter(counter+1);
    }
    const decrement=()=>{
        setCounter(counter-1);
        if(counter<1){
            setCounter(0);
        }
    }
    return {counter, setCounter, increment, decrement};

}
export default useCounter