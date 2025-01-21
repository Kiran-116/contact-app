import React from 'react'
import ContactCard from './ContactCard';

const ContactList = (props) => {
  console.log("Props: ", props);

  const renderContactList = props.contacts.map((contact) => {
    console.log("Contact: ", contact);
    return (
      <ContactCard contact={contact} />
    )
  })

  return (
    <div className='ui celled list'>
      {renderContactList}
    </div>
  )
}

export default ContactList
