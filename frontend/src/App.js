import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './css/style.css'
import { UserContextProvider } from './context/UserContext'
import ContactContextProvider from './context/ContactContext'

import { Header } from './components/Header'
import { HomePage } from './components/HomePage'
import { ContactsList } from './components/ContactsList'
import Stuff from './components/Stuff'
import { NewContactForm } from './components/ContactForm'


function App() {
    return (
        <UserContextProvider>
            <Router>
                <>
                    <section className="container-fluid">
                        <Header />
                        <Switch>
                            <ContactContextProvider>
                                <Route exact path="/" component={HomePage} />
                                <Route exact path="/contacts" component={ContactsList} />
                                <Route exact path="/contacts/add" component={NewContactForm} />
                                <Route exact path="/stuff" component={Stuff} />
                            </ContactContextProvider>
                        </Switch>
                    </section>
                </>
            </Router>
        </UserContextProvider>
    )
}

export default App
