import generateHash from 'random-hash'
import { CLIENTID, ACCESSURL, REDIRECTURI, SCOPE } from '../var/enviVariable'

export function giveUserAccessToken () {
  const STATE = generateHash({ length: 8 })
  const url = `${ACCESSURL}?client_id=${CLIENTID}&redirect_uri=${REDIRECTURI}&scope=${SCOPE}&response_type=token&state=${STATE}`

  window.localStorage.setItem('state', STATE)

  window.location.href = url
}
