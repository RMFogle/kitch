import React, { Component } from 'react'; 
import axios from 'axios'; 

export default class CreateClient extends Component {
    constructor(props) {
        super(props); 

        this.onChangeClientname = this.onChangeClientname.bind(this); 
        this.onChangePhone = this.onChangePhone.bind(this); 
        this.onChangeEmail = this.onChangeEmail.bind(this); 
        this.onChangeNotes = this.onChangeNotes.bind(this); 
        this.onSubmit = this.onSubmit.bind(this); 

        this.state = {
            clientname: '', 
            phone: '', 
            email: '', 
            notes: '' 
        }
    }

    onChangeClientname(e) {
        this.setState({
            clientname: e.target.value
        }); 
    }

    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        }); 
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value 
        }); 
    }

    onChangeNotes(e) {
        this.setState({
            notes: e.target.value 
        });
    }

    onSubmit(e) {
        alert("Client Successfully Added!!!")
        e.preventDefault(); 

        const client = {
            clientname: this.state.clientname, 
            phone: this.state.phone, 
            email: this.state.email, 
            notes: this.state.notes 
        }

        console.log(client); 

        axios.post('http://localhost:5000/clients/add', client)
            .then(res => console.log(res.data)); 
            
        this.setState({
            clientname: '', 
            phone: '', 
            email: '', 
            notes: ''
        })
    }


    render() { 
        return (
            <div>
                <h3>New Client</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Client: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.clientname}
                        onChange={this.onChangeClientname}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.phone}
                        onChange={this.onChangePhone}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label>Notes: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.notes}
                        onChange={this.onChangeNotes}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Client" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}