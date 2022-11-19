import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar active="home" />
      <div
        className="main"
        style={{ flexDirection: "column", alignItems: "center" }}
      >
        <img
          src="https://digipplus.com/static/homepage/imgs/digipplus-logo-70x70.38a25d5cef0d.png"
          alt=""
        />
        <h1>Welcome To Digipplus</h1>

        <div className="home-main">

          <div className="home-main-left">
            <h4>WORK ACTION</h4>
            <div className="work-action-container">
              <div className="work-action">
                <p>View Intern Data</p>
              </div>
              <div className="work-action">
                <p>View Intern Data</p>
              </div>
            </div>


            <h4>INTERNSHIPS</h4>
            <div className="internships-container">
              <div className="internship">
                <h5>Solution Writing</h5>
                <p>write solution</p>
              </div>
              <div className="internship">
                <h5>Solution Writing</h5>
                <p>write solution</p>
              </div>
            </div>
          </div>

          <div className="home-main-right">
            <h4 style={{textAlign:"center"}}>ANNOUNCEMENTS</h4>
            <ul>
              <li>
                We are working on adding project and Internship details so just
                fill up profile only
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
