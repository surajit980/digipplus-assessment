import React from "react";
import Navbar from "../components/Navbar";

const MyJobs = () => {

  function changeJobsLink(e) { 
    if (e.target.id === "job-link") {
      e.target.className = "h5-link active-link";
      document.getElementById("screening-link").className = "h5-link"; 
      document.getElementById("job-status-link").className = "h5-link"; 
      document.getElementById("for-solution-writing").style.display="block"; 
      document.getElementById("for-application-status").style.display="none"; 
      document.getElementById("for-screening-task").style.display="none"; 
    }else if(e.target.id === "screening-link"){
      e.target.className = "h5-link active-link";
      document.getElementById("job-link").className = "h5-link"; 
      document.getElementById("job-status-link").className = "h5-link"; 
      document.getElementById("for-solution-writing").style.display="none"; 
      document.getElementById("for-application-status").style.display="none"; 
      document.getElementById("for-screening-task").style.display="block"; 
    }else{
      e.target.className = "h5-link active-link";
      document.getElementById("job-link").className = "h5-link"; 
      document.getElementById("screening-link").className = "h5-link"; 
      document.getElementById("for-solution-writing").style.display="none"; 
      document.getElementById("for-application-status").style.display="block"; 
      document.getElementById("for-screening-task").style.display="none"; 
    }
  }

  return (
    <div>
      <Navbar active="my-jobs" />
      <div id="myjobs-main" className="main">
        <div className="myjobs-left">
          <h4>JOBS</h4>
          <div className="jobs">
            <div className="job">
              <h5 id="job-link" className="h5-link active-link" onClick={changeJobsLink}>SOLUTION WRITING</h5>
            </div>
          </div>

          <h4>FOR JOB APPLICATION</h4>
          <div className="job-applications">
            <h5 id="screening-link" className="h5-link" onClick={changeJobsLink}>SCREENING TASK</h5>
          </div>

          <h4>APPLICATION STATUS</h4>
          <div className="application-statuses">
            <h5 id="job-status-link" className="h5-link" onClick={changeJobsLink}>JOB APPLICATION STATUS</h5>
          </div>
        </div>

        <div className="myjobs-mid">
          <div id="for-solution-writing" className="myjob-mid-main">
            <p>Solution Writing</p>
          </div>

          <div id="for-application-status" className="myjob-mid-main">
          <p>Job Application Status</p>
          </div>

          <div id="for-screening-task" className="myjob-mid-main">
            <h5>K10 Maths Test Book Solution</h5>
          <p>intern digipplus</p>
          </div>
        </div>

        <div className="myjobs-right">
          <h4 style={{ textAlign: "center" }}>ANNOUNCEMENTS</h4>
          <ul>
            <li>
              We are working on adding project and Internship details so just
              fill up profile only
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyJobs;
