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
            <Link to={"/editss/"+props.inventory._id}>edit</Link>
            </Button> |  
            <Button variant="outline-danger" style={{ color: 'blue' }} size="sm" 
                        onClick= {() => { props.deleteInventory(props.inventory._id) }}>
            delete</Button>
            
        </td>
    </tr>
)


export default class InventoryList extends Component {
    constructor(props) { 
        super(props); 

        this.deleteInventory = this.deleteInventory.bind(this); 

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

    deleteInventory(id) {
        axios.delete('http://localhost:5000/archiveInventorys/'+id)
            .then(res => console.log(res.data)); 

        this.setState({
            inventorys: this.state.inventorys.filter(el => el._id !== id)
        })
    }

    archiveInventoryList() {
        return this.state.inventorys.map(currentinventory => {
            return <ArchiveInventory inventory={currentinventory} deleteInventory={this.deleteInventory} key={currentinventory._id}/>; 
        })
    }

    render() { 
        return (
            <div>
                <h3>Arhive Inventory</h3>
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