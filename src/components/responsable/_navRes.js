import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilSpeedometer,
  cilLocationPin,
  cilTrash,
  cilUser,
  cilBasket,
} from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _navRes = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavItem,
    name: 'Map',
    to: '/map',
    icon: <CIcon icon={cilLocationPin} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: ' ',
  },
  {
    component: CNavItem,
    name: 'Poubelles',
    to: '/poubelles',
    icon: <CIcon icon={cilTrash} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Réparationss',
    to: '/reparations',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Commandes',
  },
  {
    component: CNavItem,
    name: 'Commander',
    to: '/catalogue',
    icon: <CIcon icon={cilBasket} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Commandes Poubelles',
    to: '/commandes-poubelles',
    icon: <CIcon icon={cilTrash} customClassName="nav-icon" />,
  },
]

export default _navRes
