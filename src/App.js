import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbars } from './components/index'
import {Button} from 'reactstrap'

import './styles.css'

const App = () => {

    return (
        <div className="main-container">
            <Navbars />
        </div>
    )
}

export default App
