import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './css/style.css'
import UserContextProvider from './context/UserContext'
import AuthContext from './components/AuthContext'
import ContactContextProvider from './context/ContactContext'
import { Header } from './components/Header'
import { HomePage } from './components/HomePage'
import ContactsList from './components/ContactsList'
import { NewContactForm } from './components/ContactForm'
import Stuff from './components/Stuff'
import { LoginForm } from './components/LoginForm'
import SignUpForm from './components/SignUpForm'

// import { ContactDetails } from './components/ContactDetails'
// <Route exact path={`/contacts/${contact.id}`} component={ContactDetails} />


const App = () => {
    return (
        <UserContextProvider>
            <Router>
                <AuthContext>
                    <ContactContextProvider>
                        <section className="container-fluid">
                            <Header />
                            <div className="container-margin">
                                <Switch>
                                    <Route exact path="/login" component={LoginForm} />
                                    <Route exact path="/" component={HomePage} />
                                    <Route exact path="/contacts/add" component={NewContactForm} />
                                    <Route exact path="/contacts" component={ContactsList} />
                                    <Route exact path="/contacts/user-contacts" component={Stuff} />
                                    <Route exact path="/signup" component={SignUpForm} />
                                </Switch>
                            </div>
                        </section>
                    </ContactContextProvider>
                </AuthContext>
            </Router>
        </UserContextProvider>
    )
}

export default App
