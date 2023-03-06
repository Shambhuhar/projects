import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import WorkerService from '../service/WorkerService';
export default class Electrician extends Component {
    constructor(props) {
        super(props);
        this.state = {
                workerList: []
        };
    }
    onClickDetails=()=>
    {
        this.props.history.push("/details");
    }
    componentDidMount(){
        WorkerService.getWorkers().then((res) => {
            this.setState({ workerList: res.data});
        })
    }
    render() {
            return (
                <div>
                    <h2 className="text-center">Worker List</h2>
                    <div className = "row">               
                    {this.state.WorkerList.map(
                            worker => 
                            <Row xs={1} md={2} className="g-4">
                                {Array.from({ length: 1 }).map(() => (
                                <Col>
                                    <Card>
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                        /* worker info from database */
                                        <Card.Title>{worker.worker_name}</Card.Title>
                                        <Card.Text>
                                        {worker.workerDetails}
                                        </Card.Text>
                                        <Button variant="primary" onClick={onClickDetails(this.setState.worker_name)}>Details</Button>
                                    </Card.Body>
                                    </Card>
                                </Col>
                                ))}
                            </Row>
                        )}
                    </div>
                </div>                 
            )
    }
}
