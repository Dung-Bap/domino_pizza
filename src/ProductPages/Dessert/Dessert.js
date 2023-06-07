import classNames from 'classnames/bind';
import styles from '~/ProductPages/PizzaListing/Pizza.module.scss';
import FilterProduct from '~/component/FilterProduct/FilterProduct';
import ProductCollection from '../PizzaListing/ProductCollection/ProductCollection';

const cx = classNames.bind(styles);

function Dessert() {
    return (
        <div className={cx('wrapper')}>
            <FilterProduct />
            <ProductCollection title={'TRÁNG MIỆNG'} />
        </div>
    );
}

export default Dessert;
