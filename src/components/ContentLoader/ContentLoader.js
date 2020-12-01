import React from 'react';
import Loader from '../../HOC/Loader';
import Card from "../Card";

const ContentLoader=({search, products})=>{


    return (
        <div className="container-custom">
            <h1 className="display-3 text-center">
              Chek out our product Variety{" "}
            </h1>
            <div className="row">
              {search.length === 0 ? (
                <Card products={products} />
              ) : (
                <Card products={search} />
              )}
            </div>
            <div>
              <h3 className="display-4 text-center">
                Check out out categories!
              </h3>
            </div>
          </div>
    )
};
export default Loader(ContentLoader)