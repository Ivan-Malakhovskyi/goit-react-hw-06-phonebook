import { useState,useEffect, useMemo } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from "nanoid";
import { GlobalStyle } from "GlobalStyle";
import { Layout } from "Layout";
import { Filter } from "./phoneBook/contactFilter/conatactFilter";
import { MainTitle, Title } from "./phoneBook/contactList/contactList.styled";
import { FormUser } from "./phoneBook/contactForm/contactForm";
import { ContactList } from "./phoneBook/contactList/contactList";


    
export const App = () => {
  
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },]
 

  const savedContacts = window.localStorage.getItem('contacts')
 
  
  const [contacts, setContacts] = useState(() => savedContacts ? JSON.parse(savedContacts) : initialContacts) 
  const [filter, setFilter] = useState('')

    useEffect(() => {
      window.localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts])
  

  const handleSubmit = (values, { resetForm }) => {
    const {number, name } = values; 


     const newContact = {
      name: name,
      number: number,
      id: nanoid(),
    }
    if (contacts.find((contact) => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
      toast.error(`${name} already exists.`)
      resetForm()
      return
    } 

     
   

    setContacts(prevS => [...prevS, newContact])
    
    toast.success(`${name} has succesfully added to your phonebook`)
    resetForm()
  }
  



  const changeFilter = (e) => {
    setFilter(e.currentTarget.value)
  }


  const filteredContacts = useMemo(() => {

    const normalizedFilter = filter.toLowerCase()
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
  }, [contacts,filter])



  const onDeleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id))
 
  }


  const resetFilters = () => {
    setFilter('')
  }
  
    return (
      <Layout>

        <MainTitle>Phone book</MainTitle>

        <FormUser initialValue={initialContacts} handleSubmit={handleSubmit} />
        <ToastContainer />
      
        <Title>Contacts</Title>
        
        <Filter value={filter} changeFilter={changeFilter} onReset={resetFilters} />

        <ContactList filter={filteredContacts} onDeleteContact={onDeleteContact} />
        <GlobalStyle />
      </Layout>
    );
  }
