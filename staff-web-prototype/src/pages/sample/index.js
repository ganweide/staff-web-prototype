import React from 'react';
import {RoutePermittedRole} from 'shared/constants/AppConst';

const Page1 = React.lazy(() => import('./CustomerTable2'));
const Page2 = React.lazy(() => import('./ProductServiceCreation2'));
const Page3 = React.lazy(() => import('./PromotionCreation'));
const Page4 = React.lazy(() => import('./BranchesCreation2'));
const Page5 = React.lazy(() => import('./AppointmentTable'));

export const samplePagesConfigs = [
  {
    path: '/sample/CustomerTable2',
    element: <Page1 />,
    permittedRole: [RoutePermittedRole.Admin, RoutePermittedRole.Teacher],
  },
  {
    path: '/sample/ProductServiceCreation2',
    element: <Page2 />,
  },
  {
    path: '/sample/PromotionCreation',
    element: <Page3 />,
  },
  {
    path: '/sample/BranchesCreation2',
    element: <Page4 />,
  },
  {
    path: '/sample/AppointmentTable',
    element: <Page5 />,
  },
];
