import React from "react";
import SideBar from "../components/SideBar";
import malePlaceHolder from "../utils/img/male-placeholder-image.jpg";
import femalePlaceHolder from "../utils/img/female-placeholder-image.jpg";
export const CheckInfo = ({ pathname, user }) => {

  const { first_name, last_name, email, gender, birth_date } = user;
  const birth = new Date(birth_date);
  const parsedBirth = birth.toUTCString().slice(0,16);
  console.log(process.env.REACT_APP_PRUEBA);
  return (
    <div className="">
      <SideBar active={"checkinfo"} pathname={pathname} />
      <div className="display-main text-center animate__animated animate__fadeIn">
        <h1> Your Info!</h1>
        <div className="info-container">
          <div className="image-left">
            <img src={gender==="F"?femalePlaceHolder:malePlaceHolder} alt="" />
          </div>
          <section className="data-container">
            <div >
              <div>
                <small className="bold">first Name:</small>
                    <p>{first_name}</p>
              </div>
            </div>
            <div>
            <div>
                <small className="bold">Last Name:</small>
                    <p>{last_name}</p>
              </div>
            </div>
            <div>
              <div>
              <div>
                <small className="bold">Email:</small>
                    <p>{email}</p>
              </div>
              </div>
            </div>
            <div>
              <div>
              <div>
                <small className="bold">Gender:</small>
                    <p>{gender}</p>
              </div>
              </div>
            </div>
            <div>
              <div>
              <div>
                <small className="bold">Date of Birth:</small>
                    <p>{parsedBirth }</p>
              </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
