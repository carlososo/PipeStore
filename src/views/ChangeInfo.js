import React from "react";
import SideBar from "../components/SideBar";
import { useForm } from "../hooks/useForm";
import fetchData from "../utils/fetchData";
import {useHistory} from 'react-router-dom'

export const ChangeInfo = ({setUser, user, pathname, token }) => {
  const history = useHistory();
  const { _id: id } = user;
  const [value, handleInputChange] = useForm({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    birth_date: user.birth_date,
    gender: user.gender,
  });
  const { first_name, last_name, email, gender } = value;
  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await fetchData.patch(`/api/v1/user/${id}`,
        value,
        {headers: {Authorization:`JWT ${token}`}},
      );
      setUser(data);
      history.push("/profile/check")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <SideBar active="changeinfo" pathname={pathname} />
      <section className="display-main">
        <h1>Change Info</h1>
        <form className="ui form" onSubmit={HandleSubmit}>
          <h4 className="ui dividing header">User Information</h4>
          <div className="field">
            <label>Name</label>
            <div className="two fields">
              <div className="field">
                <input
                  type="text"
                  name="first_name"
                  value={first_name}
                  placeholder="First Name"
                  onChange={handleInputChange}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  name="last_name"
                  value={last_name}
                  placeholder="Last Name"
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="field">
            <label>Email Adress:</label>
            <div className="field">
              <input
                type="text"
                name="email"
                value={email}
                placeholder="Email"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="two fields">
            <div className="field">
              <label> birth Date</label>
              <input
                required
                type="date"
                name="birth_date"
                onChange={handleInputChange}
              />
            </div>
            <div className="field">
              <label> Gender</label>
              <select required name="gender" onChange={handleInputChange}>
                <option defaultValue={gender} disabled>
                  Select a Gender
                </option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="X">Other</option>
              </select>
            </div>
          </div>
          <hr />
          <div className="field text-center">
            <label>Your ID is: {user._id}</label>
            <label>
              Your status is: {user.isActive ? "Active" : "Inactive"}
            </label>
          </div>
          <div className="actions text-right ">
            <button className="ui button primary fluid">
              {" "}
              Change your Info!
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};
