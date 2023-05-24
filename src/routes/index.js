import Home from '~/pages/Home/Home';
import Voucher from '~/pages/Voucher';
// import Product from '~/pages/Product/Product';
import HeaderOnly from '~/Layout/HeaderOnly';
import Promotion from '~/pages/Promotion';
import Tracking from '~/pages/Tracking';
import Store from '~/pages/Store/Store';
import PizzaListing from '~/ProductPages/PizzaListing/PizzaListing';
import ProductItems from '~/Layout/ProductItems/ProductItems';
import Sides from '~/ProductPages/Sides';
import Dessert from '~/ProductPages/Dessert';
import Drinks from '~/ProductPages/Drinks';
import Blog from '~/pages/Blog/Blog';
import CartItem from '~/pages/CartItem/CartItem';

const publishRoutes = [
    { path: '/', component: Home },
    { path: '/voucher', component: Voucher },
    { path: '/promotion', component: Promotion },
    { path: '/tracking', component: Tracking },
    { path: '/store', component: Store },
    { path: '/blog', component: Blog },
    { path: '/cart', component: CartItem },
    { path: '/product/pizza', component: PizzaListing, layout: ProductItems },
    { path: '/product/sides', component: Sides, layout: ProductItems },
    { path: '/product/dessert', component: Dessert, layout: ProductItems },
    { path: '/product/drinks', component: Drinks, layout: ProductItems },
];

export { publishRoutes };
