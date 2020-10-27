import React from 'react'
import {
  HomeWrapper,
  HomeContainer,
  Container,
  HomeButton,
  ButtonContainer
} from './styles'

const Home = () => {
  const handleClick = () => {
    // console.log('Hello all')
  }

  return (
    <Container>
      <HomeWrapper>
        <HomeContainer id='home-container' />
        <HomeContainer id='home-container' />
        <HomeContainer id='home-container' />
        <HomeContainer id='home-container' />
        <HomeContainer id='home-container' />
        <HomeContainer id='home-container' />
      </HomeWrapper>
      <ButtonContainer>
        <HomeButton variant='contained' color='primary' onClick={handleClick}>
          Open success snackbar
        </HomeButton>
      </ButtonContainer>
    </Container>
  )
}

export default Home
