import React, { Component } from "react";
import "./model-2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PatientDataService from "../services/PatientDataService";
import {Table} from "react-bootstrap";

class ViewPatients extends Component {
    constructor(props) {
        super(props);
        this.state = {
          patients: [],
          
        };
    }
    componentDidMount() {
        this.refreshPatients();
      }
      refreshPatients() {
        PatientDataService.getAllPatients('name') //HARDCODED
          .then((response) => {
            console.log(response);
            //this.state.courses = response;
            this.setState({ patients: response.data });
          });
      }
  render() {
    return (
      <>
        <section className="container-fluid bg-img px-0">
          <div className="container-fluid bg-black">
            <div className="container class-1">
              <div className="col-lg-10 mx-auto">
                <div className="col-lg-10 mx-auto">
                  <div className="card mt-5">
                    <div className="card-header">Add Patient</div>
                    <div className="card-body text-center py-5">
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Dob</th>
                            <th>Age</th>
                            <th>Height</th>
                            <th>Weight</th>
                            <th>Facility</th>
                          </tr>
                        </thead>
                        <tbody>
                            {this.state.patients.map((patient)=>(
                          <tr>
                            <td>{patient.id}</td>
                            <td>{patient.firstname}</td>
                            <td> {patient.Dob} </td>
                            <td> {patient.age} </td>
                            <td> {patient.height} </td>
                            <td> {patient.weight} </td>
                            <td> {patient.facility} </td>
                          </tr>
                            ))}
                          
                        </tbody>
                      </Table>
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

export default ViewPatients;
