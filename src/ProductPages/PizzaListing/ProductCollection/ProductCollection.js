import classNames from 'classnames/bind';
import styles from '../Pizza.module.scss';
import ProductItem from '~/component/BestSeller/ProductItem/ProductItem';
import { dataProduct } from '~/Variable/Variable';

const cx = classNames.bind(styles);

function ProductCollection({ title }) {
    const getPizza = (item) => {
        return item?.collections[0]?.name === title;
    };
    const data = dataProduct?.filter(getPizza);

    return (
        <div className={cx('container')}>
            <div className={cx('title')}>{title}</div>
            <div className={cx('product_list')}>
                {data.map((item) => (
                    <ProductItem key={item.product_id} id={item.product_id} product={item} className={cx('item')} />
                ))}
            </div>
        </div>
    );
}

export default ProductCollection;
