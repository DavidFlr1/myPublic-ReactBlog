import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbars, Main, Profile, SignIn, LogIn } from './components/index'
import { createBrowserHistory } from 'history'

import './styles.css'

const App = () => {
    const activeLog = () => {
        localStorage.setItem('session', true);
        localStorage.setItem('data', JSON.stringify({user: 'david', password: 'pass'}));
        console.log(localStorage.getItem('data'))
        console.log(window.localStorage)
        localStorage.clear()

        createBrowserHistory().push("/Profile")
        createBrowserHistory().go()
    }

    return (
        <div style={{background: '#2C2E31'}}>
            <Router>
                <Navbars />
                    <Switch>
                        <Route exact path="/">
                            <Main />
                        </Route>
                        <Route exact path="/Profile">
                            <Profile />
                        </Route>
                        <Route exact path="/SignIn">
                            <SignIn />
                        </Route>
                        <Route exact path="/LogIn">
                            <LogIn />
                        </Route>
                    </Switch>
            </Router>
        </div>
    )
}

export default App
