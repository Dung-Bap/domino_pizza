import classNames from 'classnames/bind';
import styles from '~/ProductPages/PizzaListing/Pizza.module.scss';
import ProductCollection from '../PizzaListing/ProductCollection/ProductCollection';

const cx = classNames.bind(styles);

function Drinks() {
    return (
        <div className={cx('wrapper')}>
            <ProductCollection title={'Giải khát'} />
        </div>
    );
}

export default Drinks;
