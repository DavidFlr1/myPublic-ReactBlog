import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbars, Main, Profile } from './components/index'

import './styles.css'

const App = () => {

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
                    </Switch>
            </Router>
        </div>
    )
}

export default App
