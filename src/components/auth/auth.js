import React, { Component } from 'react'
import { Button, Image } from 'semantic-ui-react'
import { observer } from 'mobx-react'
import userStore from '../../stores/user'
import { withRouter } from 'react-router'
import firebase from '../../stores/firebase'

import './auth.styl'

@withRouter
@observer
export class AuthDisplay extends Component {

    isLoggedIn() {
        if(userStore.displayName) {
            return true
        } else {
            return false
        }
    }

    openGoogleAuthPage() {
        var provider = new firebase.auth.GoogleAuthProvider()
        provider.addScope('https://www.googleapis.com/auth/userinfo.profile')
        firebase.auth().signInWithPopup(provider)
    }

    renderLoggedIn() {
        return (
            <div className='auth-wrapper'>
                <Image avatar src={userStore.photoURL} /><span className='display-name'>{userStore.displayName}</span>
            </div>
        )
    }

    renderLoggedOut() {
        return (
            <div className='auth-wrapper'>
                <Button onClick={e => this.openGoogleAuthPage() }>
                    Sign in with Google
                </Button>
            </div>
        )
    }

    render() {
        if(this.isLoggedIn()) {
            return this.renderLoggedIn();
        } else {
            return this.renderLoggedOut();
        }
    }
}

export default AuthDisplay
