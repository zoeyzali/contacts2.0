import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './css/style.css'
import { UserContextProvider } from './context/UserContext'
import ContactContextProvider from './context/ContactContext'
import { Header } from './components/Header'
import { HomePage } from './components/HomePage'
import ContactsList from './components/ContactsList'
import { NewContactForm } from './components/ContactForm'
import Stuff from './components/Stuff'
import { ContactDetails } from './components/ContactDetails'
import { LoginForm } from './components/LoginForm'


function App( contact ) {
    return (
        <UserContextProvider>
            <Router>
                <section className="container-fluid">
                    <Header />
                    <div className="container-margin">
                        <ContactContextProvider>
                            <Route exact path="/login/" component={LoginForm} />
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/contacts/add" component={NewContactForm} />
                            <Route exact path="/contacts" component={ContactsList} />
                            <Route exact path={`/contacts/${contact.id}`} component={ContactDetails} />
                            <Route exact path="/stuff" component={Stuff} />
                        </ContactContextProvider>
                    </div>
                </section>
            </Router>
        </UserContextProvider>
    )
}

export default App
