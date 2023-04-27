import classNames from 'classnames/bind';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function Product() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('nav-choice')}></div>
                <div className={cx('cart')}></div>
            </div>
        </div>
    );
}

export default Product;
