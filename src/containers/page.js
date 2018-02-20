import React from 'react'
import { observer } from 'mobx-react'
import { withRouter } from 'react-router'
import { Container } from 'semantic-ui-react'
import Widget from '../components/widget'
import './page.styl'

@withRouter
@observer
export default class Dash extends React.Component {
    render() {
        return (
            <Container style={{marginTop: "20px"}}>
                <Widget/>
            </Container>
        )
    }
}
