import React, { useState } from 'react';

const ZipCode =()=>{
    const [zipCode, setZipCode] =useState('')
    const handleSubmitZipCode=(e)=>{
        e.preventDefault();
        fetch(`https://api-sepomex.hckdrk.mx/query/info_cp/${zipCode}?type=simplified`).then(
            response =>response.json()
        ).then(({response}) => console.log(response))
    }

    const handleInputChange=(e)=>{
        setZipCode(e.target.value);
        console.log(e.target.value)
    }

    return(
        
        <form 
            onSubmit={handleSubmitZipCode}
            className="__dropdown_zipcode_form animate__animated animate__fadeInLeft animate__faster">
                <label htmlFor="zipCode">ZipCode</label>
            <input 
                type="text"
                name="zipCode"
                value={zipCode}
                onChange={(e)=>{handleInputChange(e)}}

            />
            <input className="boton-verde" type="submit" value="Submit"/>
        </form>
    )
}

export default ZipCode