import styled, { keyframes } from 'styled-components'

const levitate = keyframes`
  0% {
    transform: translateY(0)
  }

  40% {
    transform: translateY(-5px)
  }

  100% {
    transform: translateY(0px)
  }
`

export const Container = styled.div`
  background-color: #fbb03b;
  border-radius: 5px;
  padding: 1%;
  display: inline;
  margin: 1%;
  cursor: pointer;
  animation: ${levitate} 3s alternate infinite ease-in-out;

  &:hover {
    background-color: #ff584f;
    animation: none;
  }
`

export const Title = styled.span`
  font-size: 1.5em;
  font-weight: 700;
  margin-bottom: 0;
  line-height: 1;
  color: white;
`

export const Subtitle = styled.span`
  font-size: 0.8em;
  color: white;
`
