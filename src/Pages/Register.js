import React from 'react'
// import Switch from 'react-bootstrap/esm/Switch';
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegisterWorker from './Registration/RegisterWorker';
import RegisterCustomer from './Registration/RegisterCustomer';
import './Register.css';


export default function Register() {
    return (
        <Router>
            <br/>
            <br/>
           
            <div className="Registration__1">
                <Link to="/registerascustomer" className="R1"><button >Register as Customer</button></Link>
                <br/>
                <Link to="/registerasworker" className="R2"><button >Register as Worker</button></Link> 
            </div>
            <div>
                <Switch>
                    <Route path="/registerascustomer">  <RegisterCustomer /></Route>
                    <Route path="/registerasworker">  <RegisterWorker /></Route>
                </Switch>
            </div>
        </Router>

    )
}
