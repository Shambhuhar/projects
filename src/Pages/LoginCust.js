import React, { useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router';
import Form from 'react-bootstrap/Form'
import './Login.css'

function LoginCust() {
  let history = useHistory();
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");

  const submit = () => {
    Axios.post('http://localhost:9090/api/auth/login/customer', {
      firstname: UserName,
      password: Password
    }).then(() => {
      alert("successfully Login");
      history.push("/DsplayWorkers");
    });
  };

  return (
    <div>
    <br/>
    <br/>
    <div className='login__box'>
      <Form>

        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Email"
            onChange={(e) => {
              setUserName(e.target.value);
            }} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="save password" />
        </Form.Group>

        <button variant="primary" type="submit" onClick={submit}>
          Login
        </button>
      </Form>
    </div>
    </div>
  );
}
export default LoginCust;