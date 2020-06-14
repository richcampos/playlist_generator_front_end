import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% { 
    transform: rotate(0deg); 
  }

  100% { 
    transform: rotate(360deg); 
  }
`

export const Circle = styled.div`
  position: absolute;
  top: 45%;
  left: 45%;
  border: 2px solid #fbb03b; /* Light grey */
  border-top: 5px solid #ff584f; /* Blue */
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: ${spin} 2s linear infinite;
`
