export default class LocalStorageManager {

  constructor() {
    this.localStorage = window.localStorage;
  }

  writeDataByKey(key, data) {
    this.localStorage.setItem(key, JSON.stringify(data));
  }

  getDataByKey(key) {
    return JSON.parse(this.localStorage.getItem(key));
  }
}
