import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import fetchData from "../utils/fetchData";





const Login = () => {
    const history = useHistory();

    const [value, handleInputChange, reset]=useForm({
    email:"",
    password:""
    })

    const {email, password} = value;

    const  handleSubmit = async (e)=>{
        e.preventDefault();
        const {data} = await fetchData.post(`/api/v1/login`, value)
        const {token} = data;
        localStorage.setItem("tkn", token)
        reset();
        setTimeout(()=>{
            history.replace("/");
        },600)
    }


  return (
    <div className="container">
      <h1 className=" text-center my-5">Log In</h1>
      <div className="container ui huge form">
        <form onSubmit={handleSubmit}>
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
          <div className="text-right mt-5">
              <button className="boton-verde">
                  Submit
              </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
