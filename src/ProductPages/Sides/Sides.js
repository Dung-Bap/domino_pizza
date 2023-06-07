import classNames from 'classnames/bind';
import styles from '~/ProductPages/PizzaListing/Pizza.module.scss';
import FilterProduct from '~/component/FilterProduct/FilterProduct';
import ProductCollection from '../PizzaListing/ProductCollection/ProductCollection';

const cx = classNames.bind(styles);

function Sides() {
    return (
        <div className={cx('wrapper')}>
            <FilterProduct />
            <ProductCollection title={'GÀ'} />
            <ProductCollection title={'MỲ Ý'} />
            <ProductCollection title={'XÚC XÍCH'} />
            <ProductCollection title={'BÁNH MÌ'} />
            <ProductCollection title={'KHOAI TÂY'} />
        </div>
    );
}

export default Sides;
