import React from 'react';

const Loader=(WrappedComponent)=>{


    const Component=(props)=>{
        console.log(props)
        return(<Component {...props}/>)
        
    }
    return Component;
}
export default Loader;

