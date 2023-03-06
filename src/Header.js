import React from "react";
import { Button } from 'react-bootstrap';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Link, BrowserRouter as Router, Switch, Route,useHistory } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import DisplayWorkers from "./workerComponent/DisplayWorkers";

export default function Header() {
    let history = useHistory();
    const logoutUser=()=>{
        history.push("/Home");
    }
    return (
    <React.Fragment>
    <div>
        <ReactBootStrap.Navbar className="navbar navbar-gray" expand="sm" sticky='top'>
            <ReactBootStrap.Navbar.Brand href="#">NearByU</ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="navbarScroll" />
            <ReactBootStrap.Navbar.Collapse id="navbarScroll">
                <ReactBootStrap.Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <ReactBootStrap.Nav.Link as={Link} to={"/home"}>Home</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link as={Link} to={"/login"}>Login</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link as={Link} to={"/register"}>Register</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link as={Link} to={"/DisplayWorkers"}>Workers</ReactBootStrap.Nav.Link>

                    <ReactBootStrap.NavDropdown title="Categories" id="navbarScrollingDropdown">
                        <ReactBootStrap.NavDropdown.Item href="#action3">Plumbers</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Item href="#action4">Carpenters</ReactBootStrap.NavDropdown.Item>
                        <ReactBootStrap.NavDropdown.Divider />
                        <ReactBootStrap.NavDropdown.Item href="#action5">Something else here</ReactBootStrap.NavDropdown.Item>
                    </ReactBootStrap.NavDropdown>
                    <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form  >
                  
                    <ReactBootStrap.Nav.Link  as={Link} to={"/contactus"}>ContactUs</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link as={Link} to={"/aboutus"}>AboutUs</ReactBootStrap.Nav.Link>
                    <button type="button" className="btn btn-outline-info" onClick={logoutUser}>Logout</button>
                </ReactBootStrap.Nav>
               
            </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
    </div>
    <div>
        <Switch>
            <Route path="/home"><Home/></Route>
            <Route path="/login"><Login/></Route>
            <Route path="/register"><Register/></Route>
            <Route path="/DisplayWorkers"><DisplayWorkers/></Route>
            <Route path="/contactus"><ContactUs/></Route>
            <Route path="/aboutus"><AboutUs/></Route>
        </Switch>
    </div>
    </React.Fragment>
    )
}
