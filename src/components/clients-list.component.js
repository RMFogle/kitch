import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button'; 
import axios from 'axios'; 
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { Icon } from '@iconify/react';
import roundArrowDropDown from '@iconify-icons/ic/round-arrow-drop-down';

const Client = props => (
    <tr>
        <td>{props.client.clientname}</td>
        <td>{props.client.phone}</td>
        <td>{props.client.email}</td>
        <td>{props.client.notes}</td>
        <td>
            {/* Change buttons below to new layout and add actions needed */}
            <Button variant="outline-warning" size="sm">
            {/* check edit link below */}
            <Link to={"/edits/"+props.client._id}>edit</Link>
            </Button> | 
            <Button variant="outline-warning" size="sm">
            <Link to={"/postTo/"+props.client._id}>archive</Link>
            </Button> |
            <Button variant="outline-warning" size="sm">
            <Link to={"/postToo/"+props.client._id}>trash</Link>
            </Button>
            
        </td>
    </tr>
)


export default class ClientsList extends Component {
    constructor(props) { 
        super(props); 

        this.state = {clients: []}; 
    }

    componentDidMount() {
        axios.get('http://localhost:5000/clients/')
        .then(response => {
            this.setState({ clients: response.data})
        })
        .catch((error) => {
            console.log(error); 
        })
    }

    clientList() {
        return this.state.clients.map(currentclient => {
            return <Client client={currentclient} deleteClient={this.deleteClient} key={currentclient._id}/>; 
        })
    }

    render() { 
        return (
            <div>
                <Accordion defaultActiveKey="1">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                           Client List
                           <Icon icon={roundArrowDropDown} height="2em" />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Client</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Notes</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.clientList() }
                    </tbody>
                </table>
                </Card.Body>
                </Accordion.Collapse>
                </Card>
                </Accordion>
            </div>
        )
    }
}