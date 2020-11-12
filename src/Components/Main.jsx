import React, { Component } from 'react';
import '../CSS/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "./Contact"
import ContactInput from "./ContactInput"
import ContactItem from "./ContactItem"



class Main extends Component {
    state = {
        newContact:{
            name:"",
            number:"",
            email:""
        },
        contacts:[{
          name:"Donna Rizek",
          number:"2039014661",
          email:"Donnaz_93@live.com"
          },
          {
          name:"Quentin Jean",
          number:"2037472855",
          email:"QJean@live.com"
          },
          {
          name:"Maurice Marshmon",
          number:"203888888",
          email:"mo934@live.com"
          }
        ]  
     }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
          newContact: {
            ...prevState.newContact,
            [name]: value
          }
        }));
      }

      createNewContact = (e) => {
       e.preventDefault()
       this.setState(prevState => ({
        contacts:[
          ...prevState.contacts,
          prevState.newContact
        ] 
      }));
      }

      deleteContact = (contactName) =>{
        this.setState(prevState => ({
          contacts: prevState.contacts.filter(contact => contact.name != contactName)
        }))
      }

    render() { 
      
        return (
            <>
            <div className="headerDiv">
              <h2>This is my Contact Book!</h2>
            </div>
            <ContactInput createContact={this.createNewContact} handleChange={this.handleChange} />
            <Contact/>
            {this.state.contacts && this.state.contacts.map((item) => 
              <ContactItem 
              name={item.name} 
              number={item.number} 
              email={item.email}
              deleteContact = {this.deleteContact}
              />
            )
          }
            </>
          );
    }
}
 
export default Main;
