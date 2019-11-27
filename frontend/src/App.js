import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './css/style.css'
import { UserContextProvider } from './context/UserContext'
import { Header } from './components/Header'
import { HomePage } from './components/HomePage'
import { ContactsList } from './components/ContactsList'
import Stuff from './components/Stuff'


function App() {
    return (
        <UserContextProvider>
            <Router>
                <>
                    <section className="container-fluid">
                        <Header />
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/contacts" component={ContactsList} />
                            <Route exact path="/stuff" component={Stuff} />
                        </Switch>
                    </section>
                </>
            </Router>
        </UserContextProvider>
    )
}

export default App
