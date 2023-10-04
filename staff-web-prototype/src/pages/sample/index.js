import React from 'react';
import {RoutePermittedRole} from 'shared/constants/AppConst';

const Page1 = React.lazy(() => import('./CustomerTable'));
const Page2 = React.lazy(() => import('./ProductServiceCreation'));
const Page3 = React.lazy(() => import('./PromotionCreation'));

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
];
