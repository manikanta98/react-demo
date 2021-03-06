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
        PatientDataService.getAllPatients() 
          .then((response) => {
            console.log(response);            
            this.setState({ patients: response.data });
          });
      }

      deletePatientClicked(id) {
        PatientDataService.deletePatient(id).then((response) => {
          console.log(response);          
          this.refreshPatients();
        });
      }
    

  render() {
    return (
      <>
        <section className="container-fluid bg-img px-0">
          <div className="container-fluid bg-black">
            <div className="container class-1">
              <div className="col-lg-12 mx-auto">
                <div className="col-lg-12 pb-5 mx-auto">
                  <div className="card mt-5">
                    <div className="card-header">Add Patient</div>
                    <div className="card-body text-center py-5">
                      <Table bordered hover variant="dark">
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
                            <th>Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                            {this.state.patients.map((patient)=>(
                          <tr>
                            <td>{patient.p_id}</td>
                            <td>{patient.first_name}</td>
                            <td>{patient.last_name}</td>                            
                            <td> {patient.dob} </td>
                            <td> {patient.age} </td>
                            <td> {patient.height} </td>
                            <td> {patient.weight} </td>
                            <td> {patient.facility} </td>
                            <td> <button className="btn btn-warning" onClick={ ()=> this.deletePatientClicked(patient.p_id) } > Delete </button> </td>
                          </tr>
                            ))}
                          
                        </tbody>
                      </Table>
                              <div className="text-center">
                                <a href="/addpatient" className="btn btn-success" > Add Patient </a>

                              </div>

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
