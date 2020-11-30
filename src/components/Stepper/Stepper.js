import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import ToysIcon from '@material-ui/icons/Toys';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';

const Stepper = ({selectedProduct}) => {
    const {category, product_name}= selectedProduct
    return (
        <div className="ui mini steps">
        <div className="step">
          <HomeIcon fontSize="large"/>
          <div className="ml-1 content">
            <div className="title">Home</div>
            <div className="description">Go Back home</div>
          </div>
        </div>
        <div className="active step">
          <ToysIcon fontSize="large"/>
          <div className="ml-1 content">
            <div className="title">Category</div>
            <div className="description">{category}</div>
          </div>
        </div>
        <div className="active step">
          <LocalGroceryStoreIcon fontSize="large"/>
          <div className="ml-1 content">
            <div className="title">Product</div>
            <div className="description">{product_name}</div>
          </div>
        </div>
      </div>
    )
}

export default Stepper
