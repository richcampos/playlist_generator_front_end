import styled, { keyframes } from 'styled-components'

const show = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

export const Image = styled.div`
  background-image: url(${props => props.background});
  background-size: cover;
  background-position: center;
  height: 250px;
  width: 250px;
`

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    .overlay {
      animation: ${show} 0.3s forwards ease-out;

      p {
      animation: ${show} 0.3s 0.5s forwards ease-out;
      }
    }
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 3%;

  img {
    width: 180px;
  }

  p {
    font-weight: bold;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0 ;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0, 0.8);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: translateY(30%);

  p {
    opacity: 0;
    transform: translateY(30%);
  }
`
