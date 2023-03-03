import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Welcome !',
    iconComponent: { name: 'cil-user' },
    
  },
 
  {
    name: 'Dashboard',
    url: '/base',
    iconComponent: { name: ' cil-home' },
    children: [
      {
        name: '4G',
        url: '/base/accordion'
      },
      {
        name: '3G',
        url: '/base/breadcrumbs'
      },
      {
        name: '2G',
        url: '/base/cards'
      },
      
    ]
  },
  {
    name: 'Performance Monitoring',
    url: '/buttons',
    iconComponent: { name: 'cil3d' },
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons'
      },
      {
        name: 'Button groups',
        url: '/buttons/button-groups'
      },
      {
        name: 'Dropdowns',
        url: '/buttons/dropdowns'
      },
    ]
  },
  {
    name: 'Formula',
    url: '/forms',
    iconComponent: { name: 'cil-pen' },
    children: [
      {
        name: 'Form Control',
        url: '/forms/form-control'
      },
      {
        name: 'Select',
        url: '/forms/select'
      }
    ]
  },
  {
    name: 'Capacité audit',
    url: '/charts',
    iconComponent: { name: 'cil-chart-pie' }
  },
  {
    name: 'Icons',
    iconComponent: { name: 'cil-star' },
    url: '/icons',
    children: [
      {
        name: 'CoreUI Free',
        url: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'FREE'
        }
      },
      {
        name: 'CoreUI Flags',
        url: '/icons/flags'
      },
      {
        name: 'CoreUI Brands',
        url: '/icons/brands'
      }
    ]
  },
  {
    name: 'Throughput audit',
    url: '/notifications',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts'
      },
      {
        name: 'Badges',
        url: '/notifications/badges'
      },
      {
        name: 'Modal',
        url: '/notifications/modal'
      },
      {
        name: 'Toast',
        url: '/notifications/toasts'
      }
    ]
  },
  
  {
    name: 'Contact',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/login'
      },
      {
        name: 'Sign Up',
        url: '/Sign Up'
      },
    ]
  },
];
