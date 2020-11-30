import React, { useState } from 'react'
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";


const TitleHeart = ({selectedProduct}) => {
    const [isFavorite, SetisFavorite] = useState(false);

    const handleFavoriteAdd = () => {
        SetisFavorite(!isFavorite);
      };
    

    return (
        <h1 className=" mb-3"> {isFavorite ? (
            <span onClick={handleFavoriteAdd}><FavoriteIcon className="mb-2" fontSize="large" color="error" /></span>
          ) : (
            <span onClick={handleFavoriteAdd}><FavoriteBorderIcon className="mb-2" fontSize="large" color="action" /></span>
          )}
          <span className="ml-3">{selectedProduct.product_name} </span>
          </h1>
    )
}

export default TitleHeart
