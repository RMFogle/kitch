import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';
import axios from 'axios'; 
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';


const Inventory = props => (
    
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