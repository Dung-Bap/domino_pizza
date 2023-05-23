import classNames from 'classnames/bind';
import styles from './Pizza.module.scss';
import FilterProduct from '~/component/FilterProduct/FilterProduct';
import ProductItem from '~/component/BestSeller/ProductItem/ProductItem';

const cx = classNames.bind(styles);

function PizzaListing() {
    return (
        <div className={cx('wrapper')}>
            <FilterProduct />
            <div className={cx('container')}>
                <div className={cx('title')}>FLAVORS OF THE WORLD</div>
                <div className={cx('product_list')}>
                    <ProductItem className={cx('item')} />
                    <ProductItem className={cx('item')} />
                    <ProductItem className={cx('item')} />
                    <ProductItem className={cx('item')} />
                    <ProductItem className={cx('item')} />
                    <ProductItem className={cx('item')} />
                    <ProductItem className={cx('item')} />
                </div>
            </div>
            <div className={cx('container')}>
                <div className={cx('title')}>FLAVORS OF THE WORLD</div>
                <div className={cx('product_list')}>
                    <ProductItem className={cx('item')} />
                    <ProductItem className={cx('item')} />
                    <ProductItem className={cx('item')} />
                    <ProductItem className={cx('item')} />
                    <ProductItem className={cx('item')} />
                    <ProductItem className={cx('item')} />
                    <ProductItem className={cx('item')} />
                </div>
            </div>
            <div className={cx('container')}>
                <div className={cx('title')}>FLAVORS OF THE WORLD</div>
                <div className={cx('product_list')}>
                    <ProductItem className={cx('item')} />
                    <ProductItem className={cx('item')} />
                    <ProductItem className={cx('item')} />
                    <ProductItem className={cx('item')} />
                    <ProductItem className={cx('item')} />
                    <ProductItem className={cx('item')} />
                    <ProductItem className={cx('item')} />
                </div>
            </div>
        </div>
    );
}
export default PizzaListing;
