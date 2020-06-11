export function setTokenInStorage () {
  const url = 'http://localhost:3000/access'
  window.fetch(url)
    .then(response => response.json())
    .then(data => {
      const date = new Date()
      const token = data.access_token
      const expirationDate = date.getTime() + (data.expires_in * 1000)

      window.localStorage.setItem('token', token)
      window.localStorage.setItem('expiration_date', expirationDate)
    })
}
