import classNames from 'classnames/bind';
import styles from './ProductIten.module.scss';
import Image from '~/component/Image/Image';
import { useDispatch } from 'react-redux';
import productSlice from '~/ProductPages/PizzaListing/productSlice';
import { useContext } from 'react';
import { ModalEnvironment } from '~/component/Context/Context';

const cx = classNames.bind(styles);

function ProductItem({ data, bestSellerId, className, product, id }) {
    let price2 = product?.price2 || data?.price2;
    price2 = price2?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });

    const classes = cx('product-item', {
        [className]: className,
    });
    const { setShowAddProduct } = useContext(ModalEnvironment);

    const dispatch = useDispatch();
    const handleGetIdProduct = () => {
        setShowAddProduct(true);
        dispatch(productSlice.actions.getIdProduct(id || bestSellerId));
    };

    return (
        <div className={classes} onClick={handleGetIdProduct}>
            <div className={cx('wrapper-item')}>
                <div className={cx('item-img')}>
                    <Image className={cx('img')} src={data?.pic_url || product?.pic_url} alt="" />
                </div>
                <div className={cx('body')}>
                    <div className={cx('name')}>{data?.product_name || product?.product_name}</div>
                    <p className={cx('price')}>{price2}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
