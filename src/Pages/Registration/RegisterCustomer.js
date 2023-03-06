import React, { useState } from 'react';
import Axios from 'axios';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Registration.css'
function RegisterCustomer() {

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Address, setAddress] = useState("");
  const [Phone_no, setPhone_no] = useState("");
  const [Adhar_id, setAdhar_id] = useState("");
  const [Pincode, setPincode] = useState("");
  const [City, setCity] = useState("");

  const submit = () => {
    Axios.post('http://localhost:9090/api/customer', {
      email: Email,
      first_name: FirstName,
      last_name: LastName,
      password: Password,
      phone_no: Phone_no,
      address: Address,
      aadhar_no: Adhar_id,
      pin_code: Pincode,
      city: City

    }).then(() => {
      alert(" successfully inserted ");
    });
  };

  return (
    <div className='res__cust'>
      <Form>
      <h5 className="text-centre">Register as Customer</h5>
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
            }} />
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
            }} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control type="textbox" placeholder="Address"
            onChange={(e) => {
              setAddress(e.target.value);
            }} />
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

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="save password" />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={submit}>
          Register
        </Button>
      </Form>
    </div>

  );
}
export default RegisterCustomer;