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
            <Button variant="outline-warning" size="sm">
            <Link to={"/restores/"+props.inventory._id}>restore</Link>
            </Button> |  
            <OverlayTrigger
                placement="top"
                    overlay={
                        <Tooltip id={`tooltip`}>
                        Warning!!! Will Permanently Delete Item!
                        </Tooltip>
                    }>
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

        this.compareByDescend.bind(this); 
        this.compareByAscend.bind(this); 
        this.sortByUp.bind(this); 
        this.sortByDown.bind(this); 
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
        let arrayCopy = [...this.state.inventorys]; 
        arrayCopy.sort(this.compareByDescend(key)); 
        this.setState({inventorys: arrayCopy});
    }

    // Z-A and 100-1 
    sortByDown(key) {
        let arrayCopy = [...this.state.inventorys]; 
        arrayCopy.sort(this.compareByAscend(key)); 
        this.setState({inventorys: arrayCopy});
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
                          <Icon icon={arrowDropDownLine} height="2em" />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>
                <table className="table" class="table table-sm table-hover table-bordered">
                    <thead className="thead-light">
                        <tr>
                            <th>
                            Food Item
                                <ButtonGroup vertical>
                                <i className="fas fa-sort-up" role="button" onClick={() => this.sortByUp('fooditem')}>
                                </i>
                                <i className="fas fa-sort-down" role="button" onClick={() => this.sortByDown('fooditem')}>
                                </i>
                                </ButtonGroup>
                            </th>
                            <th>
                            Category
                                <ButtonGroup vertical>
                                <i className="fas fa-sort-up" role="button" onClick={() => this.sortByUp('category')}>
                                </i>
                                <i className="fas fa-sort-down" role="button" onClick={() => this.sortByDown('category')}>
                                </i>
                                </ButtonGroup>
                            </th>
                            <th>
                            Unit Size
                                <ButtonGroup vertical>
                                <i className="fas fa-sort-up" role="button" onClick={() => this.sortByUp('unitsize')}>
                                </i>
                                <i className="fas fa-sort-down" role="button" onClick={() => this.sortByDown('unitsize')}>
                                </i>
                                </ButtonGroup>
                            </th>
                            <th>
                            In Stock
                                <ButtonGroup vertical>
                                <i className="fas fa-sort-up" role="button" onClick={() => this.sortByUp('instock')}>
                                </i>
                                <i className="fas fa-sort-down" role="button" onClick={() => this.sortByDown('instock')}>
                                </i>
                                </ButtonGroup>
                            </th>
                            <th>
                            Need
                                <ButtonGroup vertical>
                                <i className="fas fa-sort-up" role="button" onClick={() => this.sortByUp('needed')}>
                                </i>
                                <i className="fas fa-sort-down" role="button" onClick={() => this.sortByDown('needed')}>
                                </i>
                                </ButtonGroup>
                            </th>
                            <th>
                            To Purchase
                                <ButtonGroup vertical>
                                <i className="fas fa-sort-up" role="button" onClick={() => this.sortByUp('topurchase')}>
                                </i>
                                <i className="fas fa-sort-down" role="button" onClick={() => this.sortByDown('topurchase')}>
                                </i>
                                </ButtonGroup>
                            </th>
                            <th>
                            Unit Price
                                <ButtonGroup vertical>
                                <i className="fas fa-sort-up" role="button" onClick={() => this.sortByUp('unitprice')}>
                                </i>
                                <i className="fas fa-sort-down" role="button" onClick={() => this.sortByDown('unitprice')}>
                                </i>
                                </ButtonGroup>
                            </th>
                            <th>
                            Total Cost
                                <ButtonGroup vertical>
                                <i className="fas fa-sort-up" role="button" onClick={() => this.sortByUp('totalcost')}>
                                </i>
                                <i className="fas fa-sort-down" role="button" onClick={() => this.sortByDown('totalcost')}>
                                </i>
                                </ButtonGroup>
                            </th>
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