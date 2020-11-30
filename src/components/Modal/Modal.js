import React from "react";
import ReactDOM from "react-dom";
import "../../index.scss";

const Modal = (props) => {
  const { value, handleSubmit, handleInputChange, title } = props;
  const {
    first_name,
    last_name,
    email,
    password,
    birth_date,
    gender,
    confirm_password,
  } = value;

  

  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <form
      onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
        className=" ui standard modal visible active current-mod"
      >
        <div className="header text-center">{title}</div>
        
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
                    <option value="" selected disabled>
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
          <div className="actions">{props.actions}</div>
        
      </form>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
