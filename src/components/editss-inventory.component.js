import React, { Component } from 'react'; 
import axios from 'axios'; 
import Button from 'react-bootstrap/Button';

export default class EditInventory extends Component {
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
            totalcost: '', 
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
                    totalcost: response.data.totalcost
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

    onSubmit(e) { 
        e.preventDefault(); 

        console.log(this); 

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

        axios.post('http://localhost:5000/inventorys/update/'+this.props.match.params.id, inventory)
        .then(res => console.log(res.data)); 
    

        window.location = '/inventory'; 
    }


    render() {
        return (
            <div>
               <h3>Edit Inventory</h3>
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
                    <input 
                        type="text"
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
                        />
                </div>

                <div className="form-group">
                    <input type="submit" value="Edit Item" className="btn btn-primary" />
                    {" "}
                    <Button href="/inventory/">Cancel</Button>
                </div>
            </form>
            </div>
        )
    }
}