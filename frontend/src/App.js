import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './css/style.css'
import { UserContextProvider } from './context/UserContext'
import { Header } from './components/Header'
import { HomePage } from './components/HomePage'
import ContactContextProvider from './context/ContactContext'
import ContactsList from './components/ContactsList'
import { NewContactForm } from './components/ContactForm'
import Stuff from './components/Stuff'
import { EditContact } from './components/EditContact'



function App() {
    return (
        <UserContextProvider>
            <Router>
                <section className="container-fluid">
                    <Header />
                    <div className="container-margin">
                        <Route exact path="/" component={HomePage} />       <ContactContextProvider>
                            <Route exact path="/contacts" component={ContactsList} />
                            <Route exact path="/contacts/add" component={NewContactForm} />
                            <Route exact path="/contacts/edit" component={EditContact} />
                            <Route exact path="/stuff" component={Stuff} />
                        </ContactContextProvider>
                    </div>
                </section>
            </Router>
        </UserContextProvider>
    )
}

export default App
