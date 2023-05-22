import classNames from 'classnames/bind';
import styles from './Cart.module.scss';

const cx = classNames.bind(styles);

function Cart() {
    return (
        <div className={cx('cart')}>
            <div className={cx('cart_item')}>
                <img className={cx('cart_img')} alt="" src="https://dominos.vn/img/illustration/empty-cart.svg"></img>
                <h6 className={cx('cart_text')}>Giỏ hàng chưa có sản phẩm. Xin mời bạn mua hàng</h6>
            </div>
        </div>
    );
}

export default Cart;
