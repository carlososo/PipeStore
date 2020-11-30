import React from 'react';
import ReadMoreReact from 'read-more-react';
import { Link } from 'react-router-dom';

import notAvailable from  "../../utils/img/not-available.jpg"

const Card =({products})=>{

    return(
        
            products.map(({_id,description, image, product_name, category}, i ) => (
                <div key={i} className="col-sm-3">
                  <div className="card mb-3" >
                  <Link to={`/product/${_id}`}><img
                      className="card-img-top"
                      src={image || notAvailable}
                      alt={product_name}
                    /></Link>
                    <div className="card-body" >
                    <Link to={`/product/${_id}`}><h5 className="card-title">{product_name}</h5></Link>
                      <h6 className="card-subtitle mb-2 text-muted">Category: {category}</h6>
                      Description: <ReadMoreReact className="card-text"
                          text={description}
                          min ={80}
                          ideal={100}
                          max={130}
                          readMoreText={<Link to={`/product/${_id}`}>Read More...</Link>}
                       />
                      
                    </div>
                  </div>
                </div>
                
              ))
        
    )
}

export default Card;