export default function authHeader () {
  const userStr = localStorage.getItem('user')
  let userToken = null
  if (userStr) { userToken = JSON.parse(userStr) }
  if (userToken) {
    return ('Bearer ' + userToken)
  } else {
    return ''
  }
}
