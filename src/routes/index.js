import Home from '~/pages/Home';
import Voucher from '~/pages/Voucher';
import Product from '~/pages/Product';
import HeaderOnly from '~/Layout/HeaderOnly';

const publishRoutes = [
    { path: '/', component: Home },
    { path: '/voucher', component: Voucher },
    { path: '/product', component: Product, layout: HeaderOnly },
];

export { publishRoutes };
