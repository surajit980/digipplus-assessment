import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ active }) => {
  let track=1;
  function collapseNavbar() {
    if (track === 1) {
      document.getElementById("navbar-links").style.display="flex";
      track--;
    } else {
      document.getElementById("navbar-links").style.display="none";
      track++;
    }
    
  }
  return (
    <div className="navbar">
      {/* navbar left */}
      <div className="nav-left">
        <div className="brand">
          <img
            className="brand-logo"
            src="https://digipplus.com/static/homepage/imgs/digipplus-logo-70x70.38a25d5cef0d.png"
            alt="brand logo"
          />
          <div className="brand-name">
            <span style={{ color: "#EEA94D" }}>DIGI</span>
            <span style={{ color: "#EF6439" }}>PPLUS</span>
          </div>
        </div>
      </div>

      {/* navbar right */}
      <div id="navbar-links" className="nav-middle">
        <Link className={active === "home" ? "link active" : "link"} to="/">
          HOME
        </Link>
        <Link
          className={active === "my-jobs" ? "link active" : "link"}
          to="/my-jobs"
        >
          My Jobs
        </Link>
        <Link
          className={active === "my-payment" ? "link active" : "link"}
          to="/my-payment"
        >
          My Payment
        </Link>
        <Link
          className={active === "my-offerletter" ? "link active" : "link"}
          to="/my-offerletter"
        >
          My Offerletter
        </Link>
        <Link
          className={active === "my-certificate" ? "link active" : "link"}
          to="/my-certificate"
        >
          My Certificate
        </Link>
      </div>

      {/* navbar right */}
      <div className="nav-right">
        <img
          className="profile"
          src="https://files.myglamm.com/site-images/original/no-user-yellow.png"
          alt="profile"
        />
      </div>

      <div className="collapse-btn">
        <i className="fa-solid fa-bars" onClick={collapseNavbar}></i>
      </div>
    </div>
  );
};

export default Navbar;
