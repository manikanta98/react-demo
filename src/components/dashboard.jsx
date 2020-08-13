import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./model-2.css";
import { BrowserRouter as Link } from "react-router-dom";
    

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <>
        <section className="container-fluid bg-img px-0">
          <div className="container-fluid bg-black">
            <div className="container class-1">
              <div className="col-lg-8 mx-auto">
                <div className="col-lg-10 mx-auto">
                  <div className="card mt-5" >
                    <div className="card-header">Add Patient</div>
                    <div className="card-body text-center py-5">
                        {/* <a href="/addpatient" className="btn btn-outline-secondary mr-3" >View Patient </a> */}
                        {/* <a href="/viewpatients" className="btn btn-outline-warning" >Add Patient </a> */}
                        <Link to="/viewpatients" className="btn btn-outline-secondary mr-3" >View Patient</Link>
                        <Link to="/addpatient" className="btn btn-outline-warning" >Add Patient</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Dashboard;
