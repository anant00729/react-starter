import styled from 'styled-components'
// import { DESKTOP_VIEWPORT } from 'common/styles'
import { XS, SM, MD, LG, XL } from 'common/styles'

export const Container = styled.div`
  border: 10px solid purple;
  @media ${XS} {
    padding: 10px;
  }

  @media ${SM} {
    padding: 20px;
  }
`

export const HomeWrapper = styled.div`
  margin: 0 20px;
  height: 100%;
  display: grid;
  border: 10px solid yellow;
  grid-template-columns: 100px auto 100px;
  column-gap: 10px;
  row-gap: 15px;

  @media ${XS} {
    grid-template-columns: 100px 100px auto;
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
export const HomeContainer = styled.div`
  border: 10px solid green;
  height: 100px;
`
