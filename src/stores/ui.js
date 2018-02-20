import { observable, action } from 'mobx'
// import firebase from './firebase'

class Ui {
    @observable sidebarOpen = false

    @action toggleSidebar() {
        this.sidebarOpen = !this.sidebarOpen
    }
}

const ui = new Ui()
export default ui
