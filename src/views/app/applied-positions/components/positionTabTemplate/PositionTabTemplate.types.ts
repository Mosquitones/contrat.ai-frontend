import { CandidatePositionTypes, PositionTypes } from 'services'

export interface PositionTabTemplatePropTypes {
  positions?: (CandidatePositionTypes | PositionTypes)[]
  isLoading?: boolean
  variant?: 'saved' | 'default' | 'archived'
}
