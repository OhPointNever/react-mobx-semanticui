import React from 'react'
import { observer } from 'mobx-react'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import { Container } from 'semantic-ui-react'
import firebase from '../stores/firebase'
import Widget from '../components/widget'
import './page.styl'

@withRouter
@observer
export default class Dash extends React.Component {

    render() {
        return (
            <Container>
                <Widget />
            </Container>
        )
    }
}
