import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import background from '../../assets/images/background1.jpg'

export const Top = styled.div`
  min-height: 100vh;
  background-image: url(${background});
  background-position: 100% 0%;
  background-repeat: no-repeat;
`

export const Logo = styled(LinkRouter)`
  width: 150px;
  position: fixed;
  top: 0%;
  left: 0%;
`

export const SearchCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;

  form {
    width: 65%;

    p {
      text-align: center;
      margin-bottom: 3%;
      font-size: 1.8em;
      font-weight: 700;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center
    }
  }
`
