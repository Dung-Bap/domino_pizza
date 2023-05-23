import classNames from 'classnames/bind';
import styles from './ProductIten.module.scss';
import Image from '~/component/Image/Image';

const cx = classNames.bind(styles);

function ProductItem({ data, className }) {
    const classes = cx('product-item', {
        [className]: className,
    });

    return (
        <div className={classes}>
            <div className={cx('wrapper-item')}>
                <div className={cx('item-img')}>
                    {data ? (
                        <Image className={cx('img')} src={data.img} alt="" />
                    ) : (
                        <Image className={cx('img')} src="https://img.dominos.vn/Menu+BG.jpg" alt="" />
                    )}
                </div>
                <div className={cx('body')}>
                    {data ? (
                        <div className={cx('name')}>{data.name}</div>
                    ) : (
                        <div className={cx('name')}>
                            Pizza Bangkok Cà Ri Xanh Tôm Gà - Bangkok Green Curry Shrimp Chicken
                        </div>
                    )}
                    {data ? <p className={cx('price')}>{data.price}</p> : <p className={cx('price')}>209.000d</p>}
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
