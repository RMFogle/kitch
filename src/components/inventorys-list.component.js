import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';
import axios from 'axios'; 
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { Icon } from '@iconify/react';
import roundArrowDropDown from '@iconify-icons/ic/round-arrow-drop-down';


const Inventory = props => (
    
    <tr>
        <td>{props.inventory.fooditem}</td>
        <td>{props.inventory.category}</td>
        <td>{props.inventory.unitsize}</td>
        <td>{props.inventory.instock}</td>
        <td>{props.inventory.needed}</td>
        <td>{props.inventory.topurchase}</td>
        <td>${props.inventory.unitprice}</td>
        <td>${props.inventory.totalcost}</td>
        <td>
            {/* Change buttons below to new layout and add actions needed */}
            <Button variant="outline-warning" size="sm">
            <Link to={"/editss/"+props.inventory._id}>edit</Link>
            </Button> |
            <Button variant="outline-warning" size="sm">
            <Link to={"/sendTo/"+props.inventory._id}>archive</Link>
            </Button> |
            <Button variant="outline-warning" size="sm">
            <Link to={"/sendToo/"+props.inventory._id}>trash</Link>
            </Button>
            
        </td>
    </tr>
)

export default class InventoryList extends Component {
    constructor(props) { 
        super(props); 

        
        this.state = {inventorys: []} 

        this.compareBy.bind(this); 
        this.sortBy.bind(this); 
    }

    componentDidMount() {
        axios.get('http://localhost:5000/inventorys/')
        .then(response => {
            this.setState({ inventorys: response.data})
        })
        .catch((error) => {
            console.log(error); 
        })
    }

    compareBy(key) {
        return function (a, b) {
            if (a[key] < b[key]) return -1; 
            if (a[key] > b[key]) return 1; 
            return 0; 
        };
    }

    sortBy(key) {
        let arrayCopy = [...this.state.inventorys]; 
        arrayCopy.sort(this.compareBy(key)); 
        this.setState({inventorys: arrayCopy}); 
    }

    inventoryList() {
        return this.state.inventorys.map(currentinventory => {
            return <Inventory inventory={currentinventory} key={currentinventory._id}/>; 
        })
    }

    render() { 
        return (
            <div>
                <Accordion defaultActiveKey="1">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                           Inventory List
                           <Icon icon={roundArrowDropDown} height="2em" />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th onClick={() => this.sortBy('fooditem')}>Food Item</th>
                            <th onClick={() => this.sortBy('category')}>Category</th>
                            <th onClick={() => this.sortBy('unitsize')}>Unit Size</th>
                            <th onClick={() => this.sortBy('instock')}>In Stock</th>
                            <th onClick={() => this.sortBy('need')}>Need</th>
                            <th onClick={() => this.sortBy('topurchase')}>To Purchase</th>
                            <th onClick={() => this.sortBy('unitprice')}>Unit Price</th>
                            <th onClick={() => this.sortBy('totalcost')}>Total Cost</th>
                            <th>Actions:</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.inventoryList() }
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