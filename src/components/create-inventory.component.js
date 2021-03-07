import React, { Component } from 'react'; 
import axios from 'axios'; 
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { Icon } from '@iconify/react';
import roundArrowDropDown from '@iconify-icons/ic/round-arrow-drop-down';


export default class CreateInventory extends Component {
    constructor(props) {
        super(props); 

        this.onChangeFooditem = this.onChangeFooditem.bind(this); 
        this.onChangeCategory = this.onChangeCategory.bind(this); 
        this.onChangeUnitsize = this.onChangeUnitsize.bind(this); 
        this.onChangeInstock = this.onChangeInstock.bind(this); 
        this.onChangeNeeded = this.onChangeNeeded.bind(this); 
        this.onChangeTopurchase = this.onChangeTopurchase.bind(this); 
        this.onChangeUnitprice = this.onChangeUnitprice.bind(this); 
        this.onChangeTotalcost = this.onChangeTotalcost.bind(this); 
        this.onSubmit = this.onSubmit.bind(this); 

        this.state = {
            fooditem: '', 
            category: '', 
            unitsize: '', 
            instock: '', 
            needed: '', 
            topurchase: '', 
            unitprice: '', 
            totalcost: ''
        }   
    }

    onChangeFooditem(e) {
        this.setState({
            fooditem: e.target.value 
        }); 
    }

    onChangeCategory(e) {
        this.setState({
            category: e.target.value 
        }); 
    }

    onChangeUnitsize(e) {
        this.setState({
            unitsize: e.target.value 
        }); 
    }

    onChangeInstock(e) {
        this.setState({
            instock: e.target.value 
        }); 
    }

    onChangeNeeded(e) {
        this.setState({
            needed: e.target.value 
        }); 
    }

    onChangeTopurchase(e) {
        this.setState({
            topurchase: e.target.value, 
            totalcost: e.target.value * this.state.unitprice
        }); 
    }

    onChangeUnitprice(e) {
        this.setState({
            unitprice: e.target.value, 
            totalcost: e.target.value * this.state.topurchase
        }); 
    }

    onChangeTotalcost(e) {
            this.setState({
                totalcost: e.target.value
        }); 
    }



    
    onSubmit(e) {
        alert("Inventory Successfully Added!!!")
        e.preventDefault(); 

        const inventory = {
            fooditem: this.state.fooditem,  
            category: this.state.category, 
            unitsize: this.state.unitsize,
            instock: this.state.instock,
            needed: this.state.needed, 
            topurchase: this.state.topurchase, 
            unitprice: this.state.unitprice, 
            totalcost: this.state.totalcost
        }

        console.log(inventory); 

        axios.post('http://localhost:5000/inventorys/add', inventory)
            .then(res => console.log(res.data)); 

        this.setState({
            fooditem: '', 
            category: '', 
            unitsize: '', 
            instock: '', 
            needed: '', 
            topurchase: '', 
            unitprice: '', 
            totalcost: ''
        }) 

        window.location.reload();
    }

    render() {
        return (
            <div>
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                           +Add Inventory
                           <Icon icon={roundArrowDropDown} height="2em" />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Food Item: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.fooditem}
                        onChange={this.onChangeFooditem}
                        />
                    </div>
                    <div className="form-group">
                        <label>Category: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.category}
                        onChange={this.onChangeCategory}
                        />
                    </div>
                    <div className="form-group">
                        <label>Unit Size: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.unitsize}
                        onChange={this.onChangeUnitsize}
                        />
                    </div>
                    <div className="form-group">
                        <label>In Stock: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.instock}
                        onChange={this.onChangeInstock}
                        />
                    </div>
                    <div className="form-group">
                        <label>Need: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.needed}
                        onChange={this.onChangeNeeded}
                        />
                    </div>
                    <div className="form-group">
                        <label>To Purchase: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.topurchase}
                        onChange={this.onChangeTopurchase}
                        />
                    </div>
                    <div className="form-group">
                        <label>Unit Price: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.unitprice}
                        onChange={this.onChangeUnitprice}
                        />
                    </div>
                    <div className="form-group">
                        <label>Total Cost: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.totalcost}
                        onChange={this.onChangeTotalcost}
                        readOnly
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Item" className="btn btn-primary" />
                    </div>
                </form>
                </Card.Body>
                </Accordion.Collapse>
                </Card>
                </Accordion>
            </div>
        )
    }
}