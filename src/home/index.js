import React, { useState } from 'react'
import {
  HomeWrapper,
  HomeContainer,
  Container,
  HomeButton,
  ButtonContainer,
  HomeAlert
} from './styles'
import Snackbar from '@material-ui/core/Snackbar'

const Home = () => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
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
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <HomeAlert elevation={6} variant='filled'>
          This is a success message!
        </HomeAlert>
      </Snackbar>
    </Container>
  )
}

export default Home
