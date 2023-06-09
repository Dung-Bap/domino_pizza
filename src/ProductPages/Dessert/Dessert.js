import classNames from 'classnames/bind';
import styles from '~/ProductPages/PizzaListing/Pizza.module.scss';
import ProductCollection from '../PizzaListing/ProductCollection/ProductCollection';

const cx = classNames.bind(styles);

function Dessert() {
    return (
        <div className={cx('wrapper')}>
            <ProductCollection title={'TRÁNG MIỆNG'} />
        </div>
    );
}

export default Dessert;
