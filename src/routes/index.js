import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Page from '../containers/page'

export default class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path='/' component={Page} />
            </Router>
        )
    }
}
