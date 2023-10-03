import React from 'react';
import {RoutePermittedRole} from 'shared/constants/AppConst';

const CustomerTable = React.lazy(() => import('./CustomerTable'));

export const samplePagesConfigs = [
  {
    path: '/sample/CustomerTable',
    element: <CustomerTable />,
    permittedRole: [RoutePermittedRole.Admin, RoutePermittedRole.Teacher],
  },
  // {
  //   path: '/sample/AddmissionForm',
  //   element: <Page2 />,
  // },
];
