import React from 'react';

const Loader=(WrappedComponent)=>{


    const Component=(props)=>{
        return props.products.length===0?(<div className="ui segment">
        <br/>
        <br/>
        <br/>
      <div className="ui active inverted dimmer">
        <div className="ui large text loader">Loading</div>
      </div>
    </div>): <WrappedComponent {...props}/>
        
    }
    return Component;
}
export default Loader;

