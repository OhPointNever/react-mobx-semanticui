import { observable, computed, action } from 'mobx'
import firebase from './firebase'

class User {

    @observable displayName
    @observable email
    @observable emailVerified
    @observable photoURL
    @observable isAnonymous
    @observable uid
    @observable providerData

    constructor(userData) {
        if(userData) {
            this.setData(userData)
        }
    }

    setData(userData) {
        // console.log(userData)
        if (userData) {
            this.displayName = userData.displayName
            this.email = userData.email
            this.emailVerified = userData.emailVerified
            this.photoURL = userData.photoURL
            this.isAnonymous = userData.isAnonymous
            this.uid = userData.uid
            this.providerData = userData.providerData
        }
        else {
            this.displayName = null
            this.email = null
            this.emailVerified = null
            this.photoURL = null
            this.isAnonymous = null
            this.uid = null
            this.providerData = null
        }
    }

    @computed get signedIn() {
        return this.uid != null
    }
}

const userStore = new User()
export default userStore

firebase.auth().onAuthStateChanged((u) => {
    if (u) {
        userStore.setData(u)
    } else {
        userStore.setData()
    }
})
