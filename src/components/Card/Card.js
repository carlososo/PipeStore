import React from 'react';
import { Link } from 'react-router-dom';

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import notAvailable from  "../../utils/img/not-available.jpg"

const Card =({products})=>{

    return(
        
            products.map(({_id, image, product_name, category, price}, i ) => (
                <div key={i} className="col-sm-3">
                  <Link style={{textDecoration:'none'}} to={`/product/${_id}`}>
                  <div className="mb-3 __card__container" >
                  <img
                      className="card-img-top"
                      src={image || notAvailable}
                      alt={product_name}
                    />
                    <div className="card-body" >
                    <h6 className="card-subtitle mb-2 text-muted">Category: {category}</h6>
                    <h5 className="card-title __card__title">{product_name}</h5>
                    <p><AttachMoneyIcon color="action"/> {price} </p>
                      
                      
                    </div>
                  </div></Link>
                </div>
                
              ))
        
    )
}

export default Card;