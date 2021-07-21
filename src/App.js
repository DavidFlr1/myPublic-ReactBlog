import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbars, Main } from './components/index'

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
                    </Switch>
            </Router>
        </div>
    )
}

export default App
