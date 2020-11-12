import React, { Component } from 'react';
// import { Form } from "react-bootstrap"
import "../CSS/ContactInput.css"


class ContactInput extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="formDiv">
            <form onSubmit={this.props.createContact} class="form-row">
                <input 
                name="name" 
                className="formInput" 
                type="text" 
                placeholder="name"
                onChange={this.props.handleChange}
                />
                <input 
                name="number" 
                className="formInput" 
                type="text" 
                placeholder="number"
                onChange={this.props.handleChange}
                />
                <input 
                name="email" 
                className="formInput" 
                type="text" 
                placeholder="email"
                onChange={this.props.handleChange}
                />
                <div className="formButtonDiv">
                <button className="formButton" type="submit" class="btn btn-primary">Submit</button>
                </div>   
            </form>
            </div>
         );
    }
}
 
export default ContactInput;