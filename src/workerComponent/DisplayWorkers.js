import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Container,Row,Col } from 'react-bootstrap';
import Axios from 'axios';
export default function DisplayWorkers(props) {
    const id = props.id;
    //const [id, setId] = useState(0)
    const [WorkerList, setWorkerList] = useState([]);
    const onClick=()=>{ 
        console.log(id);
        Axios.get('http://localhost:9090/api/worker'
        ).then((res) => {
          console.log(res);
          setWorkerList(res.data)
        });
    }
    const onClickOrder=()=>{
        console.log("id of worker")
        Axios.get('http://localhost:9090/api/worker'
        ).then((res) => {
          console.log(res);
        });
    }
        return (
            <div>
                <h2 className="text-center">Worker List</h2>
                <button  type = "primary" onClick={onClick} >Load</button> 
                <Container>
                    <Row>    
                        { WorkerList? WorkerList.map((worker) => (
                            <Col>
                            <Card>
                           {/*  <Card.Img variant="top" src="./electrician.jpg" /> */}
                            <Card.Body>
                                <Card.Title  key={worker.id} > 
                                    {worker.id}
                                </Card.Title>
                                <Card.Text>
                                    {worker.firstname}
                                </Card.Text>
                                
                            <button variant="primary" 
                                key={worker.id} 
                                onClick={onClickOrder} >Order Now</button>
                            </Card.Body>
                            </Card>
                        </Col>                    
                    )) :""}                             
                    </Row>
                </Container>
            </div>
        )
}
