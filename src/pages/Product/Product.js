import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import SearchAddress from '~/component/SearchAddress';
import Category from './Category/Category';
import Cart from './Cart/Cart';

const cx = classNames.bind(styles);

function Product({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('container')}>
                    <SearchAddress small />
                    <Category />
                </div>
                {children}
            </div>
            <Cart />
        </div>
    );
}

export default Product;
