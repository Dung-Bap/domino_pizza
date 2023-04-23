import Home from '~/pages/Home';
import Voucher from '~/pages/Voucher';
import Product from '~/pages/Product';
import HeaderOnly from '~/Layout/HeaderOnly';
import Promotion from '~/pages/Promotion';

const publishRoutes = [
    { path: '/', component: Home },
    { path: '/voucher', component: Voucher },
    { path: '/promotion', component: Promotion },
    { path: '/product', component: Product, layout: HeaderOnly },
];

export { publishRoutes };
