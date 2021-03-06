import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button'; 
import axios from 'axios'; 
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { Icon } from '@iconify/react';
import roundArrowDropDown from '@iconify-icons/ic/round-arrow-drop-down';


const ArchiveClient = props => (
    <tr>
        <td>{props.client.clientname}</td>
        <td>{props.client.phone}</td>
        <td>{props.client.email}</td>
        <td>{props.client.notes}</td>
        <td>
            {/* Change buttons below to new layout and add actions needed */}
            <Button variant="outline-warning" size="sm">
            {/* check edit link below */}
            <Link to={"/restoreClient/"+props.client._id}>restore</Link>
            </Button> |  
            <Button variant="outline-warning" size="sm">
            <Link to={"/postToTrash/"+props.client._id}>trash</Link>
            </Button>
            
        </td>
    </tr>
)


export default class ArchiveClientList extends Component {
    constructor(props) {
        super(props); 

        this.state = {clients: [] }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/archiveClients/')
        .then(response => {
            this.setState({ clients: response.data})
        })
        .catch((error) => {
            console.log(error); 
        })
    }

    archiveClientList() {
        return this.state.clients.map(currentclient => {
            return <ArchiveClient client={currentclient} key={currentclient._id}/>;
        })
    }

    render() { 
        return (
            <div>
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                           Archive Client List
                           <Icon icon={roundArrowDropDown} height="2em" />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Client</th>
                            <th>Event</th>
                            <th>Location</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.archiveClientList() }
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