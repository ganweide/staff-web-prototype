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
        url: '/sample/CustomerTable2',
      },
      {
        id: 'appointment-table',
        title: 'Appointment',
        messageId: 'Appointment',
        type: 'item',
        icon: <BiAlignLeft />,
        url: '/sample/AppointmentTable',
      },
      {
        id: 'voucher-table',
        title: 'Voucher',
        messageId: 'Voucher',
        type: 'item',
        icon: <BiAlignLeft />,
        url: '/sample/VoucherTable',
      },
      {
        id: 'product-service-creation',
        title: 'Product/Service Creation',
        messageId: 'Product/Service Creation',
        type: 'item',
        icon: <BiAlignLeft />,
        url: '/sample/ProductServiceCreation2',
      },
      {
        id: 'branches-creation',
        title: 'Branches Creation',
        messageId: 'Branches Creation',
        type: 'item',
        icon: <BiAlignLeft />,
        url: '/sample/BranchesCreation2',
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
        id: 'voucher-invoice',
        title: 'Voucher Invoice',
        messageId: 'Voucher Invoice',
        type: 'item',
        icon: <BiAlignLeft />,
        url: '/sample/VoucherInvoice',
      },
    ],
  },
];
export default routesConfig;
