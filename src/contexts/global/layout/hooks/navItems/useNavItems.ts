import {
  DashboardOutlined,
  DashboardTwoTone,
  BusinessOutlined,
  BusinessTwoTone,
  InboxOutlined,
  MoveToInboxTwoTone,
  AddchartOutlined,
  AddchartTwoTone,
} from '@mui/icons-material'
import { EnumValueTypes, ROLE_ENUM } from '@types'
import { NavItemTypes } from 'layout'
// import { NavItemTypes } from 'layout/templates/dashboard/components/header/components'

import { ROUTES } from 'router'

type RouteBasedOnRoleTypes = {
  [key in EnumValueTypes<typeof ROLE_ENUM>]: NavItemTypes[]
}

type NavItemWithoutLabel = Omit<NavItemTypes, 'label'>

export const useNavItems = () => {
  const POSITION_ITEM_PROPERTIES: NavItemWithoutLabel = {
    path: `/${ROUTES.APP}/${ROUTES.POSITIONS}`,
    icon: DashboardOutlined,
    filledIcon: DashboardTwoTone,
  }

  const COURSE_ITEM: NavItemTypes = {
    label: 'Cursos',
    path: `/${ROUTES.APP}/${ROUTES.COURSES}`,
    icon: DashboardOutlined,
    filledIcon: DashboardTwoTone,
  }

  const ABOUT_US_ITEM: NavItemTypes = {
    label: 'Sobre nós',
    path: `/${ROUTES.APP}/${ROUTES.ABOUT_US}`,
    icon: BusinessOutlined,
    filledIcon: BusinessTwoTone,
    disabled: true,
  }

  const REPORT_ITEM: NavItemTypes = {
    label: 'Relatórios',
    path: `/${ROUTES.APP}/${ROUTES.REPORTS}`,
    icon: AddchartOutlined,
    filledIcon: AddchartTwoTone,
  }

  const _APP_MOCK_ITEM: NavItemTypes = {
    label: 'App',
    path: `/${ROUTES.APP}/${ROUTES.APP}`,
    icon: DashboardOutlined,
    filledIcon: DashboardTwoTone,
  }

  const navItems: RouteBasedOnRoleTypes = {
    CANDIDATE: [
      {
        label: 'Vagas',
        ...POSITION_ITEM_PROPERTIES,
        isDefaultPath: true,
      },
      {
        label: 'Vagas Aplicadas',
        path: `/${ROUTES.APP}/${ROUTES.APPLIED_POSITIONS}`,
        icon: InboxOutlined,
        filledIcon: MoveToInboxTwoTone,
      },
      COURSE_ITEM,
      ABOUT_US_ITEM,
    ],
    RECRUITER: [
      {
        label: 'Minhas Vagas',
        ...POSITION_ITEM_PROPERTIES,
        isDefaultPath: true,
      },
      REPORT_ITEM,
      // COURSE_ITEM,
      ABOUT_US_ITEM,
    ],
    COMPANY: [
      { ...REPORT_ITEM, isDefaultPath: true },
      COURSE_ITEM,
      ABOUT_US_ITEM,
    ],
    ADMIN: [
      { ...REPORT_ITEM, isDefaultPath: true },
      COURSE_ITEM,
      ABOUT_US_ITEM,
    ],
  }

  return navItems
}
