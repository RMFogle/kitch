import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';
import axios from 'axios'; 
import { OverlayTrigger } from 'react-bootstrap';
import Tooltip from 'react-bootstrap/Tooltip';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { Icon } from '@iconify/react';
import roundArrowDropDown from '@iconify-icons/ic/round-arrow-drop-down';

const TrashInventory = props => (
    <tr>
        <td>{props.inventory.fooditem}</td>
        <td>{props.inventory.category}</td>
        <td>{props.inventory.unitsize}</td>
        <td>{props.inventory.instock}</td>
        <td>{props.inventory.needed}</td>
        <td>{props.inventory.topurchase}</td>
        <td>{props.inventory.unitprice}</td>
        <td>{props.inventory.totalcost}</td>
        <td>
            {/* Change buttons below to new layout and add actions needed */}
            <Button variant="outline-warning" size="sm">
            <Link to={"/restores/"+props.inventory._id}>restore</Link>
            </Button> |  
        <OverlayTrigger
            placement="top"
            overlay={
                <Tooltip id={`tooltip`}>
                    Warning!!! Will Permanently Delete Item!
                </Tooltip>
            }
            >
            <Button variant="outline-danger" style={{ color: 'blue' }} size="sm" 
                        onClick= {() => { props.deleteInventory(props.inventory._id) }}>
            delete</Button>
            </OverlayTrigger>
        </td>
    </tr>
)


export default class TrashInventoryList extends Component {
    constructor(props) { 
        super(props); 

        this.deleteInventory = this.deleteInventory.bind(this); 

        this.state = {inventorys: []}; 
    }

    componentDidMount() {
        axios.get('http://localhost:5000/trashInventorys/')
        .then(response => {
            this.setState({ inventorys: response.data})
        })
        .catch((error) => {
            console.log(error); 
        })
    }

    deleteInventory(id) {
        axios.delete('http://localhost:5000/trashInventorys/'+id)
            .then(res => console.log(res.data)); 

        this.setState({
            inventorys: this.state.inventorys.filter(el => el._id !== id)
        })
    }

    trashInventoryList() {
        return this.state.inventorys.map(currentinventory => {
            return <TrashInventory inventory={currentinventory} deleteInventory={this.deleteInventory} key={currentinventory._id}/>; 
        })
    }

    render() { 
        return (
            <div>
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                          Trash Inventory List
                          <Icon icon={roundArrowDropDown} height="2em" />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Food Item</th>
                            <th>Category</th>
                            <th>Unit Size</th>
                            <th>In Stock</th>
                            <th>Need</th>
                            <th>To Purchase</th>
                            <th>Unit Price</th>
                            <th>Total Cost</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.trashInventoryList() }
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