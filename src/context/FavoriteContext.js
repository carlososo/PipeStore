import React, {useState} from 'react';


const FavoriteContext = React.createContext();


const FavoriteProvider =(props)=>{
    const [favorites, setFavorites] =useState(JSON.parse(localStorage.getItem('favorites'))||[]);
    
    
    
    const addFavorite =(value)=>{
        let array =favorites;
        
        let addArray= true;
        array.map((item, key)=>{
            if(item === value){
                array.splice(key,1);
                addArray=false;
            }
            return addArray;
        });
        if(addArray){
            array.push(value);
        }
        setFavorites([...array])
        localStorage.setItem('favorites',JSON.stringify(favorites));
    }

    const value={
        favorites,
        addFavorite,
        
    }

    return(
    <FavoriteContext.Provider value={value} {...props}/>
    )
}

const useFavoriteContext =()=>{
    const context = React.useContext(FavoriteContext);
    return context
};

export{
    FavoriteProvider,
    useFavoriteContext
}