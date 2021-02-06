import React, { Component } from 'react'
import  { Button, Confirm } from 'semantic-ui-react' 

class ConfirmDelete extends Component {
  
    state = { open: false, result: 'Are you sure you want to delete?' }

    show = () => this.setState({ open: true })
    handleConfirm = () => this.setState({ result: 'confirmed', open: false })
    handleCancel = () => this.setState({ result: 'cancelled', open: false })

    render() {
        const { open, result } = this.state 

        return (
            <div>
            <p>
             <em>{result}</em>
            </p>
    
            {/* <Button onClick={this.show}>delete</Button> */}
            <Confirm
              open={open}
              onCancel={this.handleCancel}
              onConfirm={this.handleConfirm}
            />
          </div>
        )
    }
}

export default ConfirmDelete