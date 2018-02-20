import { observable, computed, action, extendObservable } from "mobx"

export default class Template {
    @observable name = 'Foo'

    @action changeName(newName) {
        this.name = 'Bar'
    }
    
    @computed get nameAndNumber() => this.name + '123'
}
