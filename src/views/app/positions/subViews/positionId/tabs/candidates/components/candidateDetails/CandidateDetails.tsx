/* eslint-disable no-constant-condition */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactElement } from 'react'

import {
  CheckCircleRounded,
  Close,
  DoneRounded,
  Email,
  ErrorOutlineRounded,
  GavelRounded,
  HandshakeRounded,
  LocalPhoneRounded,
  TrendingFlatRounded,
} from '@mui/icons-material'
import {
  Dialog,
  DialogTitle,
  Typography,
  IconButton,
  DialogContent,
  DialogActions,
  Drawer,
  Divider,
  Box,
  Avatar,
  SvgIcon,
  ButtonBase,
  Button,
  ButtonProps,
  CircularProgress,
  Chip,
  useTheme,
  Tooltip,
} from '@mui/material'
import { AxiosError } from 'axios'
import ConfettiExplosion from 'react-confetti-explosion'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useParams } from 'react-router-dom'
import { AdditionalFilters } from 'views/app/positions/components'

import { DialogTitleComponent, Position, TopicList } from 'components'
import { useFeedback, useTabContext } from 'contexts'
import { useDisclosure, useIsDevice } from 'hooks'
import { ROUTES } from 'router'
import { ApiResponseTypes, CandidateServices, PositionTypes } from 'services'
import { getPositionScores, openPdfInAnotherPage } from 'utils'

import * as S from './CandidateDetails.styles'
import { CandidateDetailPropTypes } from './CandidateDetails.types'

const PADDING_PROPS = {
  py: 2,
  px: 3,
} as const

const ButtonComponent: React.FC<
  {
    title: string
    icon: React.ElementType
    value: string
  } & ButtonProps
> = ({ icon, title, value, ...rest }) => {
  return (
    <Button
      {...rest}
      tabIndex={0}
      sx={{
        justifyContent: 'flex-start',
        borderRadius: 0,
        textAlign: 'left',
        py: PADDING_PROPS.py,
        overflow: 'hidden',
      }}
    >
      <Box display='flex' alignItems='center' gap={2}>
        <SvgIcon
          component={icon}
          sx={{
            borderRadius: 100,
            p: 1,
            fontSize: 40,
            backgroundColor: ({ palette }) => palette.grey[50],
            color: ({ palette }) => palette.text.secondary,
          }}
        />
        <Box display='flex' flexDirection='column'>
          <Typography
            variant='body1'
            color='text.primary'
            // noWrap
            fontWeight={({ typography }) => typography.fontWeightBold}
          >
            {title}
          </Typography>
          <Box
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              width: '14.5rem',
            }}
          >
            <Typography
              variant='body2'
              color='text.secondary'
              noWrap
              fontWeight={({ typography }) => typography.fontWeightBold}
            >
              {value}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Button>
  )
}

export const CandidateDetailsDialog: React.FC<CandidateDetailPropTypes> = ({
  isOpen,
  onClose,
  candidatePositionId,
  refetchRanking,
}) => {
  const theme = useTheme()
  const { alert } = useFeedback()

  const position = useTabContext<PositionTypes>()
  const queryClient = useQueryClient()
  const isDevice = useIsDevice()
  const candidatePositionStatusQuery = useQuery({
    queryKey: [
      `/candidates/positions/${candidatePositionId}/status`,
      { method: 'GET' },
    ],
    queryFn: () =>
      CandidateServices.positions.id.status.get(Number(candidatePositionId)),
    enabled: !!candidatePositionId,
  })

  const updateCandidatePhase = useMutation({
    mutationKey: [`/candidates/positions/phases`, { method: 'PUT' }],
    mutationFn: CandidateServices.positions.phases.put,
    onSuccess: () => {
      candidatePositionStatusQuery.refetch()
      refetchRanking?.()
      // alert.showSuccess('Candidato avançou no processo')
    },
    onError: (error: AxiosError<ApiResponseTypes<unknown>>) => {
      alert.showError(error.response?.data.message || error.message)
    },
  })

  const candidate = candidatePositionStatusQuery.data

  const lastPhaseIndex =
    position.phases[position.phases.length - 1].sequenceIndex

  const isCandidateOnePhaseBeforeToBeHired =
    candidate?.currentPhaseIndex === lastPhaseIndex - 1

  const isCandidateHired = candidate?.currentPhaseIndex === lastPhaseIndex

  const firstNameOfCandidate = candidate?.name.split(' ')[0] || ''

  return (
    <S.Drawer anchor='right' open={isOpen} onClose={onClose}>
      <DialogTitleComponent
        title='Informações do candidato'
        onClose={onClose}
      />
      <Divider />
      {candidatePositionStatusQuery.isLoading ? (
        <Box
          flex={1}
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <CircularProgress size={50} />
        </Box>
      ) : candidate ? (
        <>
          <Box
            {...PADDING_PROPS}
            display='flex'
            alignItems='center'
            gap={3}
            flexWrap='wrap'
          >
            <Tooltip title='Clique para visualizar perfil'>
              <IconButton
                href={`/${ROUTES.APP}/${ROUTES.PROFILES}/${candidatePositionId}`}
              >
                <Avatar
                  sx={{ width: 55, height: 55 }}
                  src={candidate.picture}
                />
              </IconButton>
            </Tooltip>
            <Box display='flex' flexDirection='column' gap={1}>
              <Typography
                variant='subtitle1'
                fontWeight={({ typography }) => typography.fontWeightBold}
              >
                {candidate.name}
              </Typography>
              <Box display='flex' flexWrap='wrap' gap={1} alignItems='center'>
                {candidate.skills
                  .sort((a, b) => a.id - b.id)
                  .map((skill) => (
                    <Chip
                      key={skill.id}
                      variant='outlined'
                      label={skill.name}
                    />
                  ))}
              </Box>
              {candidate.resume && (
                <Typography
                  color='secondary'
                  sx={{ cursor: 'pointer', textDecoration: 'underline' }}
                  onClick={() => {
                    openPdfInAnotherPage(candidate.resume, {
                      title: `Currículo - ${candidate.name}`,
                    })
                  }}
                >
                  Ver currículo
                </Typography>
              )}
            </Box>
          </Box>
          <Divider />

          <Box
            bgcolor='background.paper'
            display='flex'
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems='center'
          >
            <ButtonComponent
              fullWidth
              icon={Email}
              href={`mailto:${candidate.email}`}
              title='E-mail'
              value={candidate.email}
            />
            <Divider
              orientation={isDevice.from.sm ? 'vertical' : 'horizontal'}
              flexItem
            />
            <ButtonComponent
              fullWidth
              icon={LocalPhoneRounded}
              title='Telefone'
              href={`tel:${candidate.phoneNumber}`}
              value={candidate.phoneNumber}
            />
          </Box>
          <Divider />
          <Box
            px={PADDING_PROPS.px}
            py={4}
            display='flex'
            flexDirection='column'
            gap={4}
            flex={1}
          >
            <Position.Status
              phases={candidate.phases}
              currentPhaseIndex={candidate.currentPhaseIndex}
            />
            <Divider />
            <Position.Requirement
              title='Requisitos'
              topicListProps={{ requirements: candidate.requirements }}
            />
            <Divider />
            <Position.Score
              {...getPositionScores({ requirements: candidate.requirements })}
            />
            <Divider />
            <Position.Details appliedAt={new Date(candidate.appliedAt)} />
          </Box>
          <Box position='sticky' bottom={0} bgcolor='white' top='auto'>
            <Divider />
            <DialogActions sx={{ ...PADDING_PROPS }}>
              <Button
                variant='contained'
                fullWidth
                disabled={isCandidateHired || updateCandidatePhase.isLoading}
                color={isCandidateOnePhaseBeforeToBeHired ? 'primary' : 'black'}
                onClick={() => {
                  if (candidatePositionId) {
                    updateCandidatePhase.mutate({
                      candidatePositionId,
                      newPhaseIndex: candidate.currentPhaseIndex + 1,
                    })
                  }
                }}
                sx={{
                  height: 56,
                  display: 'flex',
                  alignItems: 'center',
                  gap: isCandidateHired ? 1 : 2,
                }}
              >
                {updateCandidatePhase.isLoading ? (
                  <CircularProgress color='inherit' />
                ) : isCandidateOnePhaseBeforeToBeHired ? (
                  <>
                    Contratar {firstNameOfCandidate}
                    <SvgIcon component={GavelRounded} fontSize='small' />
                  </>
                ) : isCandidateHired ? (
                  <>
                    {firstNameOfCandidate} foi contratado
                    <ConfettiExplosion
                      force={0.8}
                      duration={3000}
                      particleCount={200}
                      width={1000}
                      zIndex={theme.zIndex.drawer + 1}
                    />
                    <SvgIcon component={CheckCircleRounded} fontSize='small' />
                  </>
                ) : (
                  <>
                    Avançar candidato no processo
                    <SvgIcon component={TrendingFlatRounded} fontSize='large' />
                  </>
                )}

                {/* {updateCandidatePhase.isError && (
                  <>
                    Aconteceu um erro
                    <SvgIcon component={ErrorOutlineRounded} fontSize='large' />
                  </>
                )} */}
                {/* {updateCandidatePhase.isSuccess && (
                  <>
                    Movido com sucesso
                    <SvgIcon component={CheckCircleRounded} fontSize='large' />
                  </>
                )} */}
              </Button>
            </DialogActions>
          </Box>
        </>
      ) : (
        <Box
          flex={1}
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          gap={2}
        >
          <CircularProgress />
        </Box>
      )}
    </S.Drawer>
  )
}
