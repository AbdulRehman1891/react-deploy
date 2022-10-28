import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from "react-router-dom";
import AddCustomer from "./AddCustomer";
import EditCustomer from "./EditCustomer";
import Navbar from "./Navbar";
function App() {
  return(
    <>
    <Navbar/>
      <Switch>
      {/* <Route  exact path='/'        component={Homepage}></Route> */}
      <Route  exact path='/add'        component={AddCustomer}></Route>
      <Route  exact path='/edit'        component={EditCustomer}></Route>
        </Switch>
    </>);
}

export default App;