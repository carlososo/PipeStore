import React from 'react'
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useFavoriteContext } from '../../context/FavoriteContext';



const TitleHeart = ({selectedProduct}) => {
  
    const {addFavorite,favorites} = useFavoriteContext()

    
    return (
        <h1 className=" mb-3"> {favorites.includes(JSON.stringify(selectedProduct)) ? (
            <span onClick={()=>addFavorite(JSON.stringify(selectedProduct))}><FavoriteIcon className="mb-2" fontSize="large" color="error" /></span>
          ) : (
            <span onClick={()=>addFavorite(JSON.stringify(selectedProduct))}><FavoriteBorderIcon className="mb-2" fontSize="large" color="action" /></span>
          )}
          <span className="ml-3">{selectedProduct.product_name} </span>
          </h1>
    )
}

export default TitleHeart
