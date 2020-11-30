import React from "react";
import fetchData from "../utils/fetchData.js";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "../hooks/useForm.js";
import Modal from "../components/Modal/Modal";

const Signup = () => {
  const history = useHistory();

  const [value, handleIputChange, reset] = useForm({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
    birth_date: "",
    gender: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    delete value.confirm_password;
    fetchData
      .post("/api/v1/signup", value)
      .then((response) => {
        console.log(response);
        reset();
        setTimeout(() => {
          history.push("/login");
        }, 2000);
      })
      .catch((err) => console.log(err));
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

  return (
    <Modal
      title="Sign Up"
      onDismiss={() => history.push("/")}
      actions={renderActions()}
      value={value}
      handleInputChange={handleIputChange}
      handleSubmit={handleSubmit}
    />
  );
};
export default Signup;
