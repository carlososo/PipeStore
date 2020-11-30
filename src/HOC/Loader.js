import React from 'react';

const LoaderHOC=(WrappedComponent)=>{

    const Component=(props)=>{
        console.log(props)
        return(<Component {...props}/>)
        
    }
    return Component;
}
export default LoaderHOC