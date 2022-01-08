import http from './http'

const logOut = () => http.post('/api/auth/logout/')

export {
  logOut
}
