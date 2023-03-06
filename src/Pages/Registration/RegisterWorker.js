import React, { useState } from 'react';
import Axios from 'axios';
import Form from 'react-bootstrap/Form'
import './Registration.css'
function RegisterWorker() {

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Address, setAddress] = useState("");
  const [Phone_no, setPhone_no] = useState(0);
  const [Adhar_id, setAdhar_id] = useState(0);
  const [Work_experience, setWork_experience] = useState("");
  const [Pincode, setPincode] = useState(0);
  const [City, setCity] = useState("");
  const [ActiveTime, setActiveTime] = useState("");
  const [Status, setStatus] = useState("");

  const submit = (e) => {
    e.preventDefault();

    //const worker = {email, FirstName, LastName, Password,Phone_no,Address,Adhar_id,Pincode,City};
    const worker={  
      email : Email,
      firstname : FirstName,
      lastname : LastName,
      password : Password,
      phone : Phone_no,
      address : Address,
      aadharno : Adhar_id,
      pincode : Pincode,
      city : City
    }
    console.log(worker);
    Axios.post('http://localhost:8080/api/worker',worker
    ).then((res) => {
      console.log(res);
      alert(" successfully inserted ");
    });
  };

  return (
   <div className="res__worker">
      <Form>
         <h5 className="text-centre">Register as Worker</h5>
         <hr/>
      <Form.Group className="mb-3" controlId="formBasicFirstName">
        <Form.Label>FirstName</Form.Label>
        <Form.Control type="text" placeholder="FirstName"
        onChange={(e) => {
            setFirstName(e.target.value);
          }} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>LastName</Form.Label>
        <Form.Control type="text" placeholder="LastName" 
        onChange={(e) => {
          setLastName(e.target.value);
        }}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
        onChange={(e) => {
          setEmail(e.target.value);
        }} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        onChange={(e) => {
          setPassword(e.target.value);
        }}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="textbox" placeholder="Address" 
        onChange={(e) => {
          setAddress(e.target.value);
        }}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone_no">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Phone Number"
        onChange={(e) => {
          setPhone_no(e.target.value);
        }} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAdharId">
        <Form.Label>AdharId</Form.Label>
        <Form.Control type="number" placeholder="AdharId"
        onChange={(e) => {
          setAdhar_id(e.target.value);
        }} />
      </Form.Group> 

     {/*  <Form.Group className="mb-3" controlId="formBasicWorkExperience">
        <Form.Label>Work experience</Form.Label>
        <Form.Control type="text" placeholder="Work experience" 
        onChange={(e) => {
          setWork_experience(e.target.value);
        }}/>
      </Form.Group> */}

      <Form.Group className="mb-3" controlId="formBasicPincode">
        <Form.Label>Pincode</Form.Label>
        <Form.Control type="number" placeholder="Pincode"
        onChange={(e) => {
          setPincode(e.target.value);
        }} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCity">
        <Form.Label>city</Form.Label>
        <Form.Control type="text" placeholder="city"
        onChange={(e) => {
          setCity(e.target.value);
        }} />
      </Form.Group>

     {/*  <Form.Group className="mb-3" controlId="formBasicActiveTIme">
        <Form.Label>Active time</Form.Label>
        <Form.Control type="text" placeholder="Active time"
        onChange={(e) => {
          setActiveTime(e.target.value);
        }} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicStatus">
        <Form.Label>Status</Form.Label>
        <Form.Control type="text" placeholder="Status"
        onChange={(e) => {
          setStatus(e.target.value);
        }} />
      </Form.Group> */}

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="save password" />
      </Form.Group>

      <button variant="primary" type="submit"  onClick={submit}>
        Register
      </button>
      </Form>       
      </div>
  );
}
export default RegisterWorker;