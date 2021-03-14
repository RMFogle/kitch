import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button'; 
import axios from 'axios'; 
import { OverlayTrigger } from 'react-bootstrap';
import Tooltip from 'react-bootstrap/Tooltip';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { Icon } from '@iconify/react';
import arrowDropDownLine from '@iconify-icons/ri/arrow-drop-down-line';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import '../styles/style.css'; 


const TrashClient = props => (
    <tr>
        <td>{props.client.clientname}</td>
        <td>{props.client.phone}</td>
        <td>{props.client.email}</td>
        <td>{props.client.notes}</td>
        <td>
            <Button variant="outline-warning" size="sm">
            <Link to={"/restoresClient/"+props.client._id}>restore</Link>
            </Button> |  
            <OverlayTrigger
                placement="top"
                    overlay={
                        <Tooltip id={`tooltip`}>
                        Warning!!! Will Permanently Delete Client!
                        </Tooltip>
                    }>
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

        this.compareByDescend.bind(this); 
        this.compareByAscend.bind(this); 
        this.sortByUp.bind(this); 
        this.sortByDown.bind(this);
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

    compareByDescend(key) {
        return function (a, b) {
            if (a[key] < b[key]) return -1; 
            if (a[key] > b[key]) return 1; 
            return 0; 
        }; 
    }

    compareByAscend(key) {
        return function (a, b) {
            if (a[key] < b[key]) return 1; 
            if (a[key] > b[key]) return -1; 
            return 0; 
        }; 
    }

    // A-Z and 1-100 
    sortByUp(key) {
        let arrayCopy = [...this.state.clients]; 
        arrayCopy.sort(this.compareByDescend(key)); 
        this.setState({clients: arrayCopy});
    }

    // Z-A and 100-1 
    sortByDown(key) {
        let arrayCopy = [...this.state.clients]; 
        arrayCopy.sort(this.compareByAscend(key)); 
        this.setState({clients: arrayCopy});
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
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                          Trash Client List
                          <Icon icon={arrowDropDownLine} height="2em" />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>
                <table className="table" class="table table-sm table-hover table-bordered">
                    <thead className="thead-light">
                        <tr>
                            <th>
                            Client
                                <ButtonGroup vertical>
                                <i className="fas fa-sort-up" role="button" onClick={() => this.sortByUp('clientname')}>
                                </i>
                                <i className="fas fa-sort-down" role="button" onClick={() => this.sortByDown('clientname')}>
                                </i>
                                </ButtonGroup>
                            </th>
                            <th>
                            Phone
                                <ButtonGroup vertical>
                                <i className="fas fa-sort-up" role="button" onClick={() => this.sortByUp('phone')}>
                                </i>
                                <i className="fas fa-sort-down" role="button" onClick={() => this.sortByDown('phone')}>
                                </i>
                                </ButtonGroup>
                            </th>
                            <th>
                            Email
                                <ButtonGroup vertical>
                                <i className="fas fa-sort-up" role="button" onClick={() => this.sortByUp('email')}>
                                </i>
                                <i className="fas fa-sort-down" role="button" onClick={() => this.sortByDown('email')}>
                                </i>
                                </ButtonGroup>
                            </th>
                            <th>
                            Notes
                                <ButtonGroup vertical>
                                <i className="fas fa-sort-up" role="button" onClick={() => this.sortByUp('notes')}>
                                </i>
                                <i className="fas fa-sort-down" role="button" onClick={() => this.sortByDown('notes')}>
                                </i>
                                </ButtonGroup>
                            </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.trashClientList() }
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