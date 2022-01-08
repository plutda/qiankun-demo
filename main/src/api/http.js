import axios from 'axios'

const _time = 600 * 1000
const http = axios.create({
  baseURL: '',
  timeout: _time,
  withCredentials: false
})

export default http
