export function setTokenInStorage () {
  const url = 'http://localhost:3000/access'
  fetch(url)
  .then(response => response.json())
  .then(data => {
    localStorage.setItem('token', data)
  })
}