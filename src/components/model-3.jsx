import React, { Component } from "react";
import "./model-2.css";
import "bootstrap/dist/css/bootstrap.min.css";


class ModelThree extends Component {
    constructor() {
        super();
        this.state = {
          fields: {},
          errors: {}
        }
  
        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  
      };
  
      handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
  
      }
  
      submituserRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["firstName"] = "";
            fields["lastName"] = "";
            fields["dob"] = "";
            fields["age"] = "";
            fields["height"] = "";
            fields["weight"] = "";
            fields["facility"] = "";
            // fields["hospise"] = {

            // };
            // fields["selectMediCondition"] = "none";
            
            this.setState({fields:fields});
            alert("Form submitted");
            
        }
  
      }
  
      validateForm() {
  
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
  
        if (!fields["firstName"]) {
          formIsValid = false;
          errors["firstName"] = "*Please enter your firstName.";
        }
  
        if (typeof fields["firstName"] !== "undefined") {
          if (!fields["firstName"].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["firstName"] = "*Please enter alphabet characters only.";
          }
        }
        if (!fields["lastName"]) {
            formIsValid = false;
            errors["lastName"] = "*Please enter your lastName.";
          }
    
          if (typeof fields["lastName"] !== "undefined") {
            if (!fields["lastName"].match(/^[a-zA-Z ]*$/)) {
              formIsValid = false;
              errors["lastName"] = "*Please enter alphabet characters only.";
            }
          }
    
  
      
  
        
        if (!fields["dob"]) {
          formIsValid = false;
          errors["dob"] = "*Please enter your dob";
        }
  
        // if (typeof fields["dob"] !== "undefined") {
        //   if (!fields["dob"].match(/^[0-9]{10}$/)) {
        //     formIsValid = false;
        //     errors["dob"] = "*Please enter valid dob";
        //   }
       // }
  
        if (!fields["age"]) {
          formIsValid = false;
          errors["age"] = "*Please enter your age.";
        }
        if (!fields["height"]) {
            formIsValid = false;
            errors["height"] = "*Please enter your height.";
          }
          if (!fields["weight"]) {
            formIsValid = false;
            errors["weight"] = "*Please enter your weight.";
          }
          if (!fields["facility"]) {
            formIsValid = false;
            errors["facility"] = "*Please enter your facility.";
          }
    
          if (typeof fields["facility"] !== "undefined") {
            if (!fields["facility"].match(/^[a-zA-Z ]*$/)) {
              formIsValid = false;
              errors["facility"] = "*Please enter alphabet characters only.";
            }
          }
          // if (!fields["hospise"]) {
          //   formIsValid = false;
          //   errors["hospise"] = "*Please select one radio button.";
          // }
          // if (!fields["selectMediCondition"]) {
          //   formIsValid = false;
          //   errors["selectMediCondition"] = "*Please select one radio button.";
          // }
  
       
        this.setState({
          errors: errors
        });
        console.log(fields);
        return formIsValid;
  
  
      }
      onHandleClear = (e)=>  {
        
        let fieldss = {};
            // fieldss["firstName"] = "";
            // fieldss["lastName"] = "";
            // fieldss["dob"] = "";
            // fieldss["age"] = "";
            // fieldss["height"] = "";
            // fieldss["weight"] = "";
            // fieldss["facility"] = "";
            // fieldss["hospise"] = "yes";
            // fieldss["selectMediCondition"] = "none";
            
            this.setState({fields:fieldss});
            this.setState({errors : {}})
        // return true;
        // e.preventDefault();
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
                    <form id="AddPatient"   name="AddPatient" onSubmit= {this.submituserRegistrationForm}>
                    <div className="row">
                      <div className="col-6">
                        <label htmlFor="firstName" className="lable">First Name </label>
                        <input
                          type="text"
                          name="firstName"
                          className="form-control w-100"
                          value={this.state.fields.firstName}
                           onChange={this.handleChange} 
                        />
                        <div className="errorMsg">{this.state.errors.firstName}</div>
                      </div>
                      <div className="col-6">
                        <label htmlFor="lastName" className="lable" >Last Name </label>
                        <input
                          type="text"
                          name="lastName"
                          className="form-control w-100"
                          value={this.state.fields.lastName}
                          onChange={this.handleChange} 
                       />
                       <div className="errorMsg">{this.state.errors.lastName}</div>
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
                          value={this.state.fields.dob}
                          onChange={this.handleChange} 
                       />
                       <div className="errorMsg">{this.state.errors.dob}</div>
                        
                      </div>

                      <div className="col-6">
                        <label htmlFor="age" className="lable" >Age</label>
                        <input
                          type="number"
                          name="age"
                          className="age form-control"
                          value={this.state.fields.age}
                          onChange={this.handleChange} 
                       />
                       <div className="errorMsg">{this.state.errors.age}</div>
                        
                      </div>
                    </div>

                    <div className="row pt-3">
                      <div className="col-6">
                        <label htmlFor="height" className="lable" > Height </label>
                        <input
                          type="number"
                          name="height"
                          className="height form-control"
                          value={this.state.fields.height}
                          onChange={this.handleChange} 
                       />
                       <div className="errorMsg">{this.state.errors.height}</div>
                        
                      </div>
                      <div className="col-6">
                        <label htmlFor="weight" className="lable"> Weight </label>
                        <input
                          type="number"
                          name="weight"
                          className="weight form-control"
                          value={this.state.fields.weight}
                          onChange={this.handleChange} 
                       />
                       <div className="errorMsg">{this.state.errors.weight}</div>
                        
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
                          value={this.state.fields.facility}
                          onChange={this.handleChange} 
                       />
                       <div className="errorMsg">{this.state.errors.facility}</div>
                        
                      </div>
                    </div>
                    {/* <div className="row pt-3">
                      <div className="col-12">
                        <label htmlFor="" className="lable mr-3" >Hospise : </label>
                        <input
                          type="radio"
                          name="hospise"
                          className=" mx-2"
                          checked
                          value="yes"
                          
                        />
                        Yes
                        <input
                          type="radio"
                          name="hospise"
                          className="ml-3 mx-2"
                          checked
                          value="No"
                        />
                        NO
                      </div>
                      <div className="errorMsg">{this.state.errors.hospise}</div>
                    </div> */}
                    {/* <div className="row pt-3">
                      <div className="col-8">
                        <label htmlFor="" className="lable" >Select Medi Condition</label>
                     
                      <select name="selectMediCondition" className="form-control" id="">
                        <option selected >None</option>
                        <option>aids/hiv</option>
                        <option>alzheimers</option>
                        <option>anemia</option>

                      </select>
                      <div className="errorMsg">{this.state.errors.selectMediCondition}</div>
                      </div>
                    </div> */}
                    <div className="row pt-4 ">
                     <div className="mx-auto">
                     {/* <button type="submit"    className="btn btn-success mr-3">Procced</button> */}
                     <input type="submit"  className="btn btn-success mr-3" value="Procced" />
                     <button type="reset" onClick={this.onHandleClear} className="btn btn-warning">Clear</button>
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

export default ModelThree;
