import type { NavItem } from '@/types/NavBarType'

const NavData: NavItem[] = [
  {
    id: 'home',
    label: 'HOME',
    target: '/',
  },
  {
    id: 'about',
    label: 'ABOUT',
    target: '/about',
  },
  {
    id: 'menu',
    label: 'MENU',
    target: '/menu',
  },
  {
    id: 'outlets',
    label: 'OUTLETS',
    target: '/outlets',
  },
  {
    id: 'reservations',
    label: 'RESERVATIONS',
    target: '/reservations',
  },
  {
    id: 'delivery',
    label: 'DELIVERY',
    target: '/delivery',
  },
]

export { NavData }
