import styled from 'styled-components'
// import { DESKTOP_VIEWPORT } from 'common/styles'
import { XS, SM, MD, LG, XL } from 'common/styles'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

export const Container = styled.div`
  border: 10px solid purple;
  @media ${XS} {
    padding: 10px;
  }

  @media ${SM} {
    padding: 20px;
  }

  display: flex;
  flex-direction: column;
`

export const HomeWrapper = styled.div`
  height: 100%;
  display: grid;
  border: 10px solid yellow;
  grid-template-columns: 100px auto 100px;
  column-gap: 10px;
  row-gap: 15px;

  @media ${XS} {
    grid-template-columns: auto auto;
  }

  @media ${SM} {
    grid-template-columns: 100px 300px auto;
  }

  @media ${MD} {
    grid-template-columns: 100px 400px auto;
  }

  @media ${LG} {
    grid-template-columns: 100px 800px auto;
  }

  @media ${XL} {
    grid-template-columns: 100px auto auto;
  }
`
export const HomeContainer = styled(Paper)`
  background: linear-gradient(45deg, #fe6888, #ff8e53);
  height: 100px;
`

export const HomeButton = styled(Button)`
  border: 0;
  border-radius: 15px;
  color: #fff;
  padding: 5px 30px;
  background: linear-gradient(45deg, #fe6888, #ff8e53);
  font-weight: 600;
  font-size: 20px;
  box-shadow: 0;
`

export const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`
