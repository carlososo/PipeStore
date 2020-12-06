import React from "react";
import SideBar from "../components/SideBar";


export const ChangeInfo = ({ pathname }) => {
  return (
    <div>
      <SideBar active="changeinfo" pathname={pathname} />
      <section className="display-main">
        <h1>Change Info</h1>
        <form className="ui form">
          <h4 className="ui dividing header">User Information</h4>
          <div className="field">
            <label>Name</label>
            <div className="two fields">
              <div className="field">
                <input type="text" name="" placeholder="First Name" />
              </div>
              <div className="field">
                <input type="text" name="[last-name]" placeholder="Last Name" />
              </div>
            </div>
          </div>
          <div className="field">
            <label>Email Adress:</label>
            <div className="field">
              <input type="text" name="" placeholder="Email" />
            </div>
          </div>
          <div className="two fields">
            <div className="field">
              <label> birth Date</label>
              <input
                required
                type="date"
                placeholder="Last Name"
                name="birth_date"
              />
            </div>
            <div className="field">
              <label> Gender</label>
              <select required name="gender">
                <option defaultValue="" disabled>
                  Select a Gender
                </option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="X">Other</option>
              </select>
            </div>
          </div>
          <hr/>
          <div className="actions text-right ">
            <button className="ui button primary fluid"> Change your Info!</button>
          </div>
        </form>
      </section>
    </div>
  );
};
