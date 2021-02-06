import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button'; 
import axios from 'axios'; 


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
            <Button variant="outline-danger" style={{ color: 'blue' }} size="sm" 
                        onClick= {() => { props.deleteClient(props.client._id) }}>
            delete</Button>
            
        </td>
    </tr>
)


export default class ClientsList extends Component {
    constructor(props) { 
        super(props); 

        this.deleteClient = this.deleteClient.bind(this); 

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

    deleteClient(id) {
        axios.delete('http://localhost:5000/clients/'+id)
            .then(res => console.log(res.data)); 

        this.setState({
            clients: this.state.clients.filter(el => el._id !== id)
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
                <h3>Client List</h3>
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
            </div>
        )
    }
}