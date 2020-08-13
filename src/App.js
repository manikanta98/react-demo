import React, { Component } from "react";
// import "./components/model-1";
// import Model from "./components/model-1";
// import ModelTwo from "./components/model-2";
// import ModelThree from "./components/model-3";
// import Dashboard from "./components/dashboard";
// import ModelThree from "./components/model-3";
import ViewPatients from "./components/viewpatients";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      //<Model />
      //  <ModelTwo />
      // <ModelThree />
      // <Dashboard />
      <ViewPatients />
      // <Router>
      //   <Switch>
      //     <Route path="/" exact component={Dashboard} />
      //     <Route path="/addpatient" exact component={ModelThree} />
      //     <Route path="/viewpatients" component={ViewPatients} />
      //   </Switch>
      // </Router>
    );
  }
}
export default App;
