import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import  BelowNavBar  from "../components/BelowNavBar";
import NavBar from "../components/Navbar";
import { useForm } from "../hooks/useForm";
import usePost from "../hooks/usePost";





const Login = () => {
    const history = useHistory();
    const [isValid, setIsValid]= useState(true);

    const [value, handleInputChange, reset]=useForm({
    email:"",
    password:""
    })
    const {submitLogin}=usePost("/api/v1/login")

    const {email, password} = value;

    const  handleSubmit = async (e)=>{
        e.preventDefault();
      submitLogin(value, reset, history, setIsValid)
    }

    const renderError=()=>{
      if(!isValid){
        return(
          <div className="ui error message">
            <div className="header">
              <p>Something went Wrong</p>
            </div>
            <div className="content">
              <p>Please check the information provided and try again!</p>
            </div>
          </div>
        )
      }
    }

  return (
    <>
    <NavBar/>
    <BelowNavBar/>
    <div className="container animate__animated animate__fadeIn">
      <h1 className=" text-center my-5">Log In</h1>
      <div className="container">
        <form className="ui form huge error" onSubmit={handleSubmit}>
          <div className="two fields">
            <div className="field">
              <label htmlFor="">email:</label>
              <input 
              type="text"
              name="email"
              value={email}
              onChange={handleInputChange}
              />
            </div>
            <div className="field">
              <label htmlFor="">Password:</label>
              <input 
              type="password" 
              name="password"
              value={password}
              onChange={handleInputChange}
              />
            </div>
          </div>
          {renderError()}
          <div className="text-right mt-5">
              <button className="boton-verde">
                  Submit
              </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};
export default Login;
