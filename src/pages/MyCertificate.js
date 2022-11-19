import React from "react";
import Navbar from "../components/Navbar";

const MyCertificate = () => {
  return (
    <div>
      <Navbar active="my-certificate" />
      <div className="main">
        <div className="certificate">
          <h1>Certificate</h1>
        </div>
      </div>
    </div>
  );
};

export default MyCertificate;
