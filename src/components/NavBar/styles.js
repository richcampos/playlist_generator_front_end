import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import background from '../../assets/images/background1.jpg'

export const Logo = styled(LinkRouter)`
  width: 150px;
  position: fixed;
  top: 0%;
  left: 0%;
`

export const Background = styled.div`
  height: 80vh;
  width: 50vw;
  top: 0;
  right: 0%;
  background-image: url(${background});
  background-size: cover;
  background-position: 100% 0%;
  background-repeat: no-repeat;
  position: fixed;
  z-index: -1;
`
