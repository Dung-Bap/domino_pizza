import Product from '~/pages/Product/Product';
import Header from '../DefaultLayout/Header';
import Footer from '../DefaultLayout/Footer';

function ProductItems({ children }) {
    return (
        <div>
            <Header />
            <Product children={children} />
            <Footer />
        </div>
    );
}

export default ProductItems;
