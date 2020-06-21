import { giveUserAccessToken } from './giveUserAccessToken'
export function getUserData (setData) {
  const token = window.localStorage.getItem('access_token')
  const baseURL = 'https://api.spotify.com/v1/me'

  window.fetch(baseURL, {
    headers: {
      // eslint-disable-next-line quote-props
      'Authorization': `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(data => {
      if (data.error) giveUserAccessToken()
      else setData(data)
    })
}
