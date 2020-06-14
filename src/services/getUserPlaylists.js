export function getUserPlaylists (setData) {
  const token = window.localStorage.getItem('access_token')
  const baseURL = 'https://api.spotify.com/v1/me/playlists'

  window.fetch(baseURL, {
    headers: {
      // eslint-disable-next-line quote-props
      'Authorization': `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(data => {
      // console.log(data)
      const items = data.items
      setData(items)
    })
}
