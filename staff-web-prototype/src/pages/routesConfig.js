import {BiAlignLeft} from 'react-icons/bi';
const routesConfig = [
  {
    id: 'app',
    title: 'Sample',
    messageId: 'Managements',
    type: 'group',
    children: [
      {
        id: 'customer-table',
        title: 'Customers Table',
        messageId: 'Customers Table',
        type: 'item',
        icon: <BiAlignLeft />,
        url: '/sample/CustomerTable',
      },
    ],
  },
];
export default routesConfig;
