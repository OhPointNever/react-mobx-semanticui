import * as firebase from 'firebase'

const config = {
    apiKey: "blahblashblah",
    authDomain: "foobar.firebaseapp.com",
    databaseURL: "https://foobar.firebaseio.com",
    projectId: "foobar",
    storageBucket: "foobar.appspot.com",
    messagingSenderId: "123456789"
};

firebase.initializeApp(config)

export default firebase
