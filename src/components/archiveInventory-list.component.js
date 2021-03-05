import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';
import axios from 'axios'; 

const ArchiveInventory = props => (
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
            <Link to={"/restore/"+props.inventory._id}>restore</Link>
            </Button> |  
            <Button variant="outline-warning" size="sm">
            <Link to={"/sendToos/"+props.inventory._id}>trash</Link>
            </Button>
            
        </td>
    </tr>
)


export default class ArchiveInventoryList extends Component {
    constructor(props) { 
        super(props); 

        this.state = {inventorys: []}; 
    }

    componentDidMount() {
        axios.get('http://localhost:5000/archiveInventorys/')
        .then(response => {
            this.setState({ inventorys: response.data})
        })
        .catch((error) => {
            console.log(error); 
        })
    }

    archiveInventoryList() {
        return this.state.inventorys.map(currentinventory => {
            return <ArchiveInventory inventory={currentinventory} key={currentinventory._id}/>; 
        })
    }

    render() { 
        return (
            <div>
                <h3>Archived Inventory</h3>
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
                        { this.archiveInventoryList() }
                    </tbody>
                </table>
            </div>
        )
    }
}