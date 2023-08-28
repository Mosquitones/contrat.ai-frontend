import { from } from 'common/theme'
import styled from 'styled-components'

export const HeaderMainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  ${from.sm} {
    flex-direction: row;
  }
`
