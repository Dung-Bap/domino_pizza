import classNames from 'classnames/bind';
import styles from './ProductIten.module.scss';
import Image from '~/component/Image/Image';

const cx = classNames.bind(styles);

function ProductItem({ data, className, product }) {
    let price2 = product?.price2;
    price2 = price2?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });

    const classes = cx('product-item', {
        [className]: className,
    });

    return (
        <div className={classes}>
            <div className={cx('wrapper-item')}>
                <div className={cx('item-img')}>
                    <Image className={cx('img')} src={data?.img || product?.pic_url} alt="" />
                </div>
                <div className={cx('body')}>
                    <div className={cx('name')}>{data?.name || product?.product_name}</div>
                    <p className={cx('price')}>{data?.price || price2}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
