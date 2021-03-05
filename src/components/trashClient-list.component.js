import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button'; 
import axios from 'axios'; 
import { OverlayTrigger } from 'react-bootstrap';
import Tooltip from 'react-bootstrap/Tooltip';


const TrashClient = props => (
    <tr>
        <td>{props.client.clientname}</td>
        <td>{props.client.phone}</td>
        <td>{props.client.email}</td>
        <td>{props.client.notes}</td>
        <td>
            {/* Change buttons below to new layout and add actions needed */}
            <Button variant="outline-warning" size="sm">
            {/* check edit link below */}
            <Link to={"//"}>restore</Link>
            </Button> |  
            <OverlayTrigger
            placement="top"
            overlay={
                <Tooltip id={`tooltip`}>
                    Warning!!! Will Permanently Delete Client!
                </Tooltip>
            }
            >
            <Button variant="outline-danger" style={{ color: 'blue' }} size="sm" 
                        onClick= {() => { props.deleteClient(props.client._id) }}>
            delete</Button>
            </OverlayTrigger>
        </td>
    </tr>
)


export default class TrashClientList extends Component {
    constructor(props) { 
        super(props); 

        this.deleteClient = this.deleteClient.bind(this); 

        this.state = {clients: []}; 
    }

    componentDidMount() {
        axios.get('http://localhost:5000/trashClients/')
        .then(response => {
            this.setState({ clients: response.data})
        })
        .catch((error) => {
            console.log(error); 
        })
    }

    deleteClient(id) {
        axios.delete('http://localhost:5000/trashClients/'+id)
            .then(res => console.log(res.data)); 

        this.setState({
            clients: this.state.clients.filter(el => el._id !== id)
        })
    }

    trashClientList() { 
        return this.state.clients.map(currentclient => {
            return <TrashClient client={currentclient} deleteClient={this.deleteClient} key={currentclient._id}/>;
        })
    }

    render() {
        return ( 
            <div>
                <h3>Trash Client</h3>
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
                        { this.trashClientList() }
                    </tbody>
                </table>
            </div>
        )
    }
}