import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Navbars, Main, Profile, Contact, Info, SignIn, LogIn, Footer,Alert } from './components/index'

import './styles.css'
const App = () => {
    const activeLog = () => {
        localStorage.setItem('session', true);
        localStorage.setItem('data', JSON.stringify({user: 'david', password: 'pass'}));
        console.log(localStorage.getItem('data'))
        console.log(window.localStorage)
        localStorage.clear()

        createBrowserHistory().push("/")
        createBrowserHistory().go()
    }

    useEffect(() => {
        
    }, [])



    return (
        
        <div style={{background: '#2C2E31'}}>
            
            <Router>
                <Navbars />
                <Alert />
                    <Switch>
                        <Route exact path="/">
                            <Main />
                        </Route>
                        <Route exact path="/Profile">
                            <Profile />
                        </Route>
                        <Route exact path="/Contact">
                            <Contact />
                        </Route>
                        <Route exact path="/Info">
                            <Info />
                        </Route>
                        <Route exact path="/SignIn">
                            <SignIn />
                        </Route>
                        <Route exact path="/LogIn">
                            <LogIn />
                        </Route>
                    </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default App
