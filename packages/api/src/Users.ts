import Http from './Http'

export default class Users extends Http {
  constructor() {
    super('/api/users')
  }

  login(params) {
    return this.axios.post(`${this.url}/login`, params).then(this.useData)
  }

  getInfo() {
    return this.axios.get(`${this.url}/byToken`).then(this.useData)
  }
}
export { Users }
