import { Paper as MUIPaper, Button as MuiButton } from '@mui/material'
import styled from 'styled-components'

export const Button = styled(MuiButton)`
  padding: 0 !important;
  text-align: left !important;
`

export const Paper = styled(MUIPaper)`
  display: grid;
  grid-template-rows: auto 1fr repeat(6, auto);
  /* flex-direction: column; */
  width: 100%;
  overflow: hidden;
  flex: 1;
  height: 100%;
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 2.4rem; */
  /* gap: 2.4rem; */
`

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 2.4rem;
`
