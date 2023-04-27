import Home from '~/pages/Home';
import Voucher from '~/pages/Voucher';
import Product from '~/pages/Product';
import HeaderOnly from '~/Layout/HeaderOnly';
import Promotion from '~/pages/Promotion';
import Tracking from '~/pages/Tracking';

const publishRoutes = [
    { path: '/', component: Home },
    { path: '/voucher', component: Voucher },
    { path: '/promotion', component: Promotion },
    { path: '/product', component: Product, layout: HeaderOnly },
    { path: '/tracking', component: Tracking },
];

export { publishRoutes };
