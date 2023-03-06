
import React from 'react'
// import Switch from 'react-bootstrap/esm/Switch';
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginCust from './LoginCust';
import LoginWorker from './LoginWorker';
import './Register.css';


export default function Login() {
    return (
        <Router>
            <br/>
            <br/>
           
            <div className="Registration__1">
                <Link to="/LoginCust" className="R1"><button >Login as Customer</button></Link>
                <br/>
                <Link to="/loginWorker" className="R2"><button >Login as Worker</button></Link> 
            </div>
            <div>
                <Switch>
                    <Route path="/loginCust">  <LoginCust /></Route>
                    <Route path="/loginWorker">  <LoginWorker /></Route>
                </Switch>
            </div>
        </Router>

    )
}
