import React from 'react';
import {RoutePermittedRole} from 'shared/constants/AppConst';

const Page1 = React.lazy(() => import('./CustomerTable'));
const Page2 = React.lazy(() => import('./ProductServiceCreation'));
const Page3 = React.lazy(() => import('./PromotionCreation'));
const Page4 = React.lazy(() => import('./BranchesCreation'));

export const samplePagesConfigs = [
  {
    path: '/sample/CustomerTable',
    element: <Page1 />,
    permittedRole: [RoutePermittedRole.Admin, RoutePermittedRole.Teacher],
  },
  {
    path: '/sample/ProductServiceCreation',
    element: <Page2 />,
  },
  {
    path: '/sample/PromotionCreation',
    element: <Page3 />,
  },
  {
    path: '/sample/BranchesCreation',
    element: <Page4 />,
  },
];
