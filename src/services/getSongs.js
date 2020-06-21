export function getSongs (artists, setSongs) {
  const token = window.localStorage.getItem('access_token')
  let songs = []
  artists.forEach(artist => {
    const id = artist.id
    const url = `https://api.spotify.com/v1/artists/${id}/top-tracks`

    window.fetch(url, {
      headers: {
        // eslint-disable-next-line quote-props
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
  })
}
