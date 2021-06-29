import { makeAutoObservable, observable, action } from 'mobx'

export class AppStorage {
  @observable activeEpic: string = 'categories'

  constructor() {
    makeAutoObservable(this)
  }

  @action changeActiveEpic = (val: string) => {
    this.activeEpic = val
    console.log(this.activeEpic, 'this.activeEpic')
  }
}
