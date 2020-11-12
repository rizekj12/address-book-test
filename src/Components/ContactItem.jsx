import React from 'react';
import "../CSS/ContactItem.css"

const ContactItem = (props) => {
    return ( 
        <div className="itemDiv">
            <tr className="table IndivItem">
                <td>{props.name}</td>
                <td>{props.number}</td>
                <td>{props.email}</td>
            </tr>
            <button 
            className="deleteButton" 
            onClick={props.deleteContact}
            >X</button>
        </div>
     );
}
 
export default ContactItem;