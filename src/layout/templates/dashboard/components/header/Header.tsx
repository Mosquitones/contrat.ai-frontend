/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import { Menu, NotificationsOutlined } from '@mui/icons-material'
import {
  Avatar,
  Badge,
  Box,
  ButtonBase,
  Container,
  IconButton,
  Slide,
  SvgIcon,
  Tooltip,
  Typography,
  useScrollTrigger,
} from '@mui/material'
import {
  NavLink,
  Link as RouterLink,
  useLocation,
  useNavigate,
} from 'react-router-dom'

import { Logo } from 'components'
import { useAuth, useLayout } from 'contexts'
import { useDisclosure, useIsDevice } from 'hooks'
import { ROUTES } from 'router'

import {
  AccountNotifications,
  AccountSettings,
  LeftNavigationComponent,
  NavItemTypes,
} from './components'
import * as S from './Header.styles'

export const GET_HEADER_TRIGGER = () => useScrollTrigger({ threshold: 200 })
export const Header: React.FC = () => {
  const device = useIsDevice()
  const location = useLocation()
  const navigate = useNavigate()
  const { user, isUserRole } = useAuth()
  const { userNavItems } = useLayout()

  const drawerHandlers = useDisclosure()

  const isDesktopScreen = isUserRole.SUPER_ADMIN
    ? device.from.lg
    : device.from.sm

  const defaultPath = userNavItems?.find((item) => item.isDefaultPath)

  const trigger = GET_HEADER_TRIGGER()

  return (
    <S.Header showOnScroll={!trigger}>
      <Container>
        <S.Wrapper>
          {defaultPath && (
            <ButtonBase href={defaultPath.path} disableRipple>
              <Logo extended={isDesktopScreen} />
            </ButtonBase>
          )}

          {isDesktopScreen ? (
            <S.Nav>
              {userNavItems?.map((item) => (
                <NavLink
                  tabIndex={item.disabled ? -1 : 0}
                  key={item.path}
                  to={item.path}
                  onClick={(e) => {
                    if (item.disabled) e.preventDefault()
                  }}
                  aria-disabled={item.disabled}
                >
                  {({ isActive }) => (
                    <S.NavLinkItem
                      isActive={isActive}
                      style={{
                        cursor: item.disabled ? 'not-allowed' : 'pointer',
                      }}
                    >
                      <Typography>{item.label}</Typography>
                    </S.NavLinkItem>
                  )}
                </NavLink>
              ))}
            </S.Nav>
          ) : (
            <Typography
              py={2}
              variant='h5'
              component='h1'
              fontWeight={({ typography }) => typography.fontWeightBold}
            >
              {userNavItems?.find((item) => item.path === location.pathname)
                ?.label || 'Desconhecido'}
            </Typography>
          )}
          <Box display='flex' alignItems='center' gap={{ xs: 1, md: 3 }}>
            {isDesktopScreen ? (
              <>
                <AccountNotifications />
                <AccountSettings />
              </>
            ) : (
              <>
                <IconButton onClick={drawerHandlers.onToggle} sx={{ mr: -1.2 }}>
                  <Menu />
                </IconButton>
                {userNavItems && (
                  <LeftNavigationComponent
                    items={userNavItems}
                    dialogHandlers={drawerHandlers}
                  />
                )}
              </>
            )}
          </Box>
        </S.Wrapper>
      </Container>
    </S.Header>
  )
}

export * from './Header.types'
export * from './components'
