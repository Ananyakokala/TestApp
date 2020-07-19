import React, { Component } from "react"
import { Router, Switch, Route } from "react-router-dom";

import EmployeeList from "../component/EmployeeList"
import Header from "../component/Header"
import EmployeeDetails from "../component/EmployeeDetails"
import History from "../utils/History"
import TablueList from "../component/TablueList"
import POcList from "../component/poc/PocList"

class Navigation extends Component {
  render() {
    return (
      <Router history={History}>
        <Header/>
        <Switch>
          <Route path="/" exact component={EmployeeList} />
          <Route path="/employeeDetails" component={EmployeeDetails} />
          <Route path = "/tablueList" component= {TablueList}/>
          <Route path = "/pocList" component = {POcList}/>
        </Switch>
      </Router>
    )
  }
}

export default Navigation;