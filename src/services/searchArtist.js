/* eslint-disable quote-props */
export function searchArtist (query, setArtists) {
  const token = window.localStorage.getItem('access_token')
  const url = `https://api.spotify.com/v1/search?q=${query}&type=artist`

  window.fetch(url, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      const queryArtist = {}
      queryArtist.id = data.artists.items[0].id
      queryArtist.name = data.artists.items[0].name
      // console.log(firstArtistID)
      setArtists(queryArtist)
    })
}
