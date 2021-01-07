import React, { useState } from 'react'
import {categories} from '../../utils/categories'

import "../../styles/index.scss";

export const BelowNavBar = () => {
    return (
        <div className="__Below_container ">
            <nav className="container-custom __Below_nav">
            <ul className="__Below_list">
                <BelowNavBarItem text="Categories">
                <DropdownMenu/> 
                </BelowNavBarItem>
                <BelowNavBarItem text="Type your Zip Code"/>
                <BelowNavBarItem text="#StayHome"/>
                <BelowNavBarItem text="Our Services"/>
                <BelowNavBarItem text="Our Stores"/>
            </ul>

            </nav>
        </div>
    )
}

const BelowNavBarItem =(props)=>{
    const [Open, setOpen] = useState(false)
    return(
        <li onMouseEnter={()=>setOpen(!Open)} 
            onMouseLeave={()=>setOpen(!Open)}
            className="__Below_list-item"> 
        <span>{props.text}</span> 
        {Open && props.children}
        </li>
    )
}

const DropdownMenu =()=>{

    const DropdownItem=(props)=>{
        return(
        <span className="__dropdown_item">
        {props.children}
        </span>
        )
    }

    const renderCategories=(categories)=>{
        
        return categories.map((category)=>(
            <DropdownItem key={category} className="__dropdown_item"> {category}</DropdownItem>
        )
        )
    }
    
    return(
        <div className="__dropdown_menu animate__animated animate__fadeInDown animate__faster">
            {renderCategories(categories)}
            {/* <DropdownItem className="__dropdown_item"> Something</DropdownItem>
            <DropdownItem className="__dropdown_item"> Something Else</DropdownItem> */}
        </div>
    )
}