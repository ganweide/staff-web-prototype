import {BiAlignLeft} from 'react-icons/bi';
const routesConfig = [
  {
    id: 'app',
    title: 'Sample',
    messageId: 'Management',
    type: 'group',
    children: [
      {
        id: 'customer-table',
        title: 'Customer',
        messageId: 'Customer',
        type: 'item',
        icon: <BiAlignLeft />,
        url: '/sample/CustomerTable',
      },
      {
        id: 'product-service-creation',
        title: 'Product/Service Creation',
        messageId: 'Product/Service Creation',
        type: 'item',
        icon: <BiAlignLeft />,
        url: '/sample/ProductServiceCreation',
      },
      {
        id: 'promotion-creation',
        title: 'Promotion Creation',
        messageId: 'Promotion Creation',
        type: 'item',
        icon: <BiAlignLeft />,
        url: '/sample/PromotionCreation',
      },
      {
        id: 'branches-creation',
        title: 'Branches Creation',
        messageId: 'Branches Creation',
        type: 'item',
        icon: <BiAlignLeft />,
        url: '/sample/BranchesCreation',
      },
    ],
  },
];
export default routesConfig;
