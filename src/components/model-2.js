import React, { Component } from "react";
import "./model-2.css";
import "bootstrap/dist/css/bootstrap.min.css";


class ModelTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
        firstname: "",
        lastname: "",
        dob: "",
        age: "",
        height: "",
        weight: "",
        facility: "",
        hospise:"yes",
        condition:""
      
    };
  }

  // myChangeHandler = (event) => {
  //   firstname = event.target.value,
  //       // lastname: "",
  //       // dob: "",
  //       // age: "",
  //       // height: "",
  //       // weight: "",
  //       // facility: "",
  //       // hospise:"yes",
  //       // condition:""
  // }
  
  handleFirstnameChange = (event) => {
    this.setState({
      firstname : event.target.value
    })
  }

  handle(event) {
    event.preventDefault();
    var data = document.getElementById("data");
    console.log(data.value);
    
  }
  render() {

    return (
      <section className="container-fluid bg-img px-0">
        <div className="container-fluid bg-black">
          <div className="container class-1">
            <div className="col-lg-8 mx-auto">
              <div className="col-lg-10 mx-auto">
                <div className="card ">
                  <div className="card-header">Add Patient</div>
                  <div className="card-body">
                    <form id="data"   name="AddPatient">
                    <div className="row">
                      <div className="col-6">
                        <label htmlFor="firstname" className="lable">First Name </label>
                        <input
                          type="text"
                          name="firstname"
                          className="form-control w-100"
                          value={this.state.firstname}
                          onChange={this.myChangeHandler}
                        />
                      </div>
                      <div className="col-6">
                        <label htmlFor="lastname" className="lable" >Last Name </label>
                        <input
                          type="text"
                          name="lastname"
                          className="form-control w-100"
                        />
                      </div>
                    </div>
                    <div className="row pt-3">
                      <div className="col-6">
                        <label className="lable">Date Of Birth</label>
                        <input
                          type="date"
                          id="birthday"
                          name="dob"
                          className="form-control"
                        ></input>
                      </div>

                      <div className="col-6">
                        <label htmlFor="age" className="lable" >Age</label>
                        <input
                          type="number"
                          name="age"
                          className="age form-control"
                        />
                      </div>
                    </div>

                    <div className="row pt-3">
                      <div className="col-6">
                        <label htmlFor="height" className="lable" > Height </label>
                        <input
                          type="number"
                          name="height"
                          className="height form-control"
                        />
                      </div>
                      <div className="col-6">
                        <label htmlFor="weight" className="lable"> Weight </label>
                        <input
                          type="number"
                          name="weight"
                          className="weight form-control"
                        />
                      </div>
                    </div>

                    <div className="row pt-3">
                      <div className="col-12">
                        <label htmlFor="facility" className="lable" >Facility</label>
                        <input
                          type="text"
                          name="facility"
                          className="facility form-control"
                          id=""
                        />
                      </div>
                    </div>
                    <div className="row pt-3">
                      <div className="col-12">
                        <label htmlFor="" className="lable mr-3" >Hospise : </label>
                        <input
                          type="radio"
                          name="hospise"
                          className=" mx-2"
                          value="yes"
                        />
                        Yes
                        <input
                          type="radio"
                          name="hospise"
                          className="ml-3 mx-2"
                          value="No"
                        />
                        NO
                      </div>
                    </div>
                    <div className="row pt-3">
                      <div className="col-8">
                        <label htmlFor="" className="lable" >Select Medi Condition</label>
                     
                      <select name="condition" className="form-control" id="">
                        <option>None</option>
                        <option>aids/hiv</option>
                        <option>alzheimers</option>
                        <option>anemia</option>

                      </select>
                      </div>
                    </div>
                    <div className="row pt-4 ">
                     <div className="mx-auto">
                     <button onClick="handle(event)" className="btn btn-success mr-3">Procced</button>
                     <button className="btn btn-warning">Clear</button>
                     </div>
                    </div>


                    </form>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ModelTwo;
