import React, { Component } from 'react'; 
import axios from 'axios'; 
import Button from 'react-bootstrap/Button';
import NumberFormat from 'react-number-format'; 


export default class ArchiveInventory extends Component {
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
        this.onChangeUnitType = this.onChangeUnitType.bind(this);  
        this.onSubmit = this.onSubmit.bind(this); 

        this.state = {
            fooditem: '', 
            category: '', 
            unitsize: '', 
            instock: '', 
            needed: '', 
            topurchase: '', 
            unitprice: '', 
            totalcost: '', 
            unittype: '', 
            inventorys: []
        }   
    }


    componentDidMount() {
        axios.get('http://localhost:5000/inventorys/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    fooditem: response.data.fooditem, 
                    category: response.data.category, 
                    unitsize: response.data.unitsize,
                    instock: response.data.instock,
                    needed: response.data.needed, 
                    topurchase: response.data.topurchase, 
                    unitprice: response.data.unitprice, 
                    totalcost: response.data.totalcost, 
                    unittype: response.data.unittype 
                })
            })
            .catch(function (error) {
                console.log(error); 
            })

        axios.get('http://localhost:5000/inventorys/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        inventorys: response.data.map(inventory => inventory.fooditem), 

                    })
                }

            })
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
            topurchase: e.target.value
        }); 
    }

    onChangeUnitprice(e) {
        this.setState({
            unitprice: e.target.value
        }); 
    }

    onChangeTotalcost(e) {
        this.setState({
            totalcost: e.target.value
        }); 
    }

    onChangeUnitType(e) {
        this.setState({
                unittype: e.target.value 
        }); 
    }


    addToArchive() {
        const inventory = {
            fooditem: this.state.fooditem, 
            category: this.state.category, 
            unitsize: this.state.unitsize,
            instock: this.state.instock,
            needed: this.state.needed, 
            topurchase: this.state.topurchase, 
            unitprice: this.state.unitprice, 
            totalcost: this.state.totalcost, 
            unittype: this.state.unittype
        }
    
        console.log(inventory);

        axios.post('http://localhost:5000/archiveInventorys/add/', inventory)
        .then(res => console.log(res.data));
    }

    deleteInventory() {
        axios.delete('http://localhost:5000/inventorys/'+this.props.match.params.id)
        .then(res => console.log(res.data));
    }

    onSubmit(e) {
        alert("Item Sent To Archive!!!")  
        e.preventDefault(); 

        console.log(this); 

        axios.all([this.addToArchive(), this.deleteInventory()])
        .then(res => console.log(res.data)); 

    
        window.location = '/inventory'; 
    }


    render() {
        return (
            <div>
               <h3>Archive Inventory</h3>
               <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Food Item: </label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.fooditem}
                        onChange={this.onChangeFooditem}
                        readOnly/>
                </div>
                <div className="form-group">
                    <label>Category: </label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.category}
                        onChange={this.onChangeCategory}
                        readOnly/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Unit Size: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.unitsize}
                        onChange={this.onChangeUnitsize}
                        readOnly/>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Unit Type: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.unittype}
                        onChange={this.onChangeUnitType}
                        readOnly/>
                    </div>
                    </div>
                <div className="form-group">
                    <label>In Stock: </label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.instock}
                        onChange={this.onChangeInstock}
                        readOnly/>
                </div>
                <div className="form-group">
                    <label>Need: </label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.needed}
                        onChange={this.onChangeNeeded}
                        readOnly/>
                </div>
                <div className="form-group">
                    <label>To Purchase: </label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.topurchase}
                        onChange={this.onChangeTopurchase}
                        readOnly/>
                </div>
                <div className="form-group">
                    <label>Unit Price: </label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.unitprice}
                        onChange={this.onChangeUnitprice}
                        readOnly/>
                </div>
                <div className="form-group">
                    <label>Total Cost: </label>
                    <div>
                        <NumberFormat
                        thousandSeparator={true} 
                        prefix={'$'} 
                        inputmode="numeric"
                        value={this.state.totalcost}
                        onChange={this.onChangeTotalcost}
                        readOnly
                        />
                    </div>
                </div>

                <div className="form-group">
                    <Button type="submit" value="Archive Item">
                    Archive Item</Button>
                    {" "}
                    <Button href="/inventory/">Cancel</Button>
                </div>
            
            </form>
            </div>
        )
    }
}