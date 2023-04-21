import React from "react";
import ReactDOM from "react-dom";
import { Switch, Redirect, Route } from "react-router";
// import { Routes, Redirect, Route } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import "./Login.css";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} />
      {/* <Route component={NotFound}/> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);


// changed to this to check if its working or not? 

// ReactDOM.render(
//   <BrowserRouter>
//     <Routes>
//       <Route exact path="/" component={Login} />
//       <Route exact path="/register" component={Register} />
//       <Route path="/dashboard" component={Dashboard} />
//       {/* <Route component={NotFound}/> */}
//     </Routes>
//   </BrowserRouter>,
//   document.getElementById("root")
// );
