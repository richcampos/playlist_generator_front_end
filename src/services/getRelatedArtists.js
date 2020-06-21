export function getRelatedArtists (id, setArtists) {
  const token = window.localStorage.getItem('access_token')
  const url = `https://api.spotify.com/v1/artists/${id}/related-artists`

  window.fetch(url, {
    headers: {
      // eslint-disable-next-line quote-props
      'Authorization': `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(data => {
      const ids = data.artists.map(artist => {
        return artist.id
      })
      setArtists(ids)
    })
}
