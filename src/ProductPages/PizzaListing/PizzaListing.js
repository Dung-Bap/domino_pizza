import classNames from 'classnames/bind';
import styles from './Pizza.module.scss';
import FilterProduct from '~/component/FilterProduct/FilterProduct';
import ProductCollection from './ProductCollection/ProductCollection';

const cx = classNames.bind(styles);

function PizzaListing() {
    return (
        <div className={cx('wrapper')}>
            <FilterProduct />
            <ProductCollection title={'FLAVORS OF THE WORLD'} />
            <ProductCollection title={'SEAFOOD CRAVERS'} />
            <ProductCollection title={'KID FAVORS'} />
            <ProductCollection title={'TRADITIONAL & MEAT LOVERS'} />
        </div>
    );
}
export default PizzaListing;
