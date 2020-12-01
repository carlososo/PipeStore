import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "../hooks/useForm.js";
import Modal from "../components/Modal/Modal";
import usePost from "../hooks/usePost.js";

const Signup = () => {
  const history = useHistory();

  const [value, handleInputChange, reset] = useForm({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
    birth_date: "",
    gender: "",
    });
    const {
      first_name,
      last_name,
      email,
      password,
      birth_date,
      gender,
      confirm_password,
    } = value;

  const{submitSignUp} =usePost("/api/v1/signup");

  const handleSubmit = (e) => {
    e.preventDefault();
    delete value.confirm_password;
    submitSignUp(value,reset,history)  
  
  };

  const renderActions = () => {
    return (
      <>
        <Link to="/" className=" ui button negative">
          {" "}
          Cancel
        </Link>
        {value.password !== "" && value.password === value.confirm_password ? (
          <button className="ui button primary "> Sign up!</button>
        ) : (
          <button className="ui button primary disabled"> Sign up!</button>
        )}
      </>
    );
  };

  const modalBody =()=>{
    return(
      <form
      onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
        // this is the ClassName that should be active to display the Modal 
        className=" ui standard modal visible active current-mod"
      >
        <div className="header text-center">Sign Up</div>
        
          <div className="content">
            <div className="ui equal width form container">
              <div className="fields">
                <div className="field">
                  <label>First name</label>
                  <input
                  required
                    type="text"
                    placeholder="First Name"
                    name="first_name"
                    value={first_name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="field">
                  <label>Last name</label>
                  <input
                  required
                    type="text"
                    placeholder="Last Name"
                    name="last_name"
                    value={last_name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="fields">
                <div className="field">
                  <label>email</label>
                  <input
                  required
                    type="email"
                    placeholder="First Name"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="field">
                  <label> birth Date</label>
                  <input
                  required
                    type="date"
                    placeholder="Last Name"
                    name="birth_date"
                    value={birth_date}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="field">
                  <label> Gender</label>
                  <select
                  required
                    name="gender"
                    value={gender}
                    onChange={handleInputChange}
                  >
                    <option defaultValue="" disabled>
                      Select a Gender
                    </option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="X">Other</option>
                  </select>
                </div>
              </div>
              <div className="fields">
                <div className="field">
                  <label>Password</label>
                  <input
                  required
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="field">
                  <label>Confirm Password</label>
                  <input
                  required
                    type="password"
                    name="confirm_password"
                    value={confirm_password}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="actions">{renderActions()}</div>
        
      </form>
    )
  }

  return (
    <Modal
      title="Sign Up"
      onDismiss={() => history.push("/")}
      modalBody={modalBody()}
    />
  );
};
export default Signup;
