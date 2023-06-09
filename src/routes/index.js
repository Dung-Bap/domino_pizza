import Home from '~/pages/Home/Home';
import Voucher from '~/pages/Voucher';
import Promotion from '~/pages/Promotion';
import Tracking from '~/pages/Tracking';
import Store from '~/pages/Store/Store';
import PizzaListing from '~/ProductPages/PizzaListing/PizzaListing';
import ProductItems from '~/Layout/ProductItems/ProductItems';
import Sides from '~/ProductPages/Sides/Sides';
import Dessert from '~/ProductPages/Dessert/Dessert';
import Drinks from '~/ProductPages/Drinks/Drinks';
import CartItem from '~/pages/CartItem/CartItem';
import AboutDominos from '~/pages/Blog/AboutDominos/AboutDominos';
import Recruitment from '~/pages/Blog/Recruitment/Recruitment';
import MoreInformation from '~/pages/Blog/MoreInformation/MoreInformation';
import BlogLayout from '~/Layout/BlogLayout/BlogLayout';
import BlogContent from '~/pages/Blog/BlogContent/BlogContent';

const publishRoutes = [
    { path: '/', component: Home },
    { path: '/voucher', component: Voucher },
    { path: '/promotion', component: Promotion },
    { path: '/tracking', component: Tracking },
    { path: '/store', component: Store },
    { path: '/cart', component: CartItem },
    { path: '/product/pizza', component: PizzaListing, layout: ProductItems },
    { path: '/product/sides', component: Sides, layout: ProductItems },
    { path: '/product/dessert', component: Dessert, layout: ProductItems },
    { path: '/blog/content', component: BlogContent, layout: BlogLayout },
    { path: '/product/drinks', component: Drinks, layout: ProductItems },
    { path: '/blog/about-dominos', component: AboutDominos, layout: BlogLayout },
    { path: '/blog/recruitment', component: Recruitment, layout: BlogLayout },
    { path: '/blog/more-information', component: MoreInformation, layout: BlogLayout },
];

export { publishRoutes };
