import React from 'react'
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';

const ContactList = (props) => {
  console.log("Props: ", props);

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    console.log("Contact: ", contact);
    return (
      <ContactCard 
        contact={contact} 
        clickHandler={deleteContactHandler} 
        key={contact.id}
      />
    )
  })

  return (
    <div className="main">
      <h2 style={{display: 'flex', justifyContent: 'space-between'}}> 
        Contact List 
        <Link to="/add">
          <button className="ui button blue right"> Add Contact </button>
        </Link>
      </h2>
      <div className='ui celled list'>
        {renderContactList}
      </div>
    </div>
  )
}

export default ContactList
