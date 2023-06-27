import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '~/redux/selector';
import Button from '~/component/Button/Button';
import { cartsSlice } from './cartsSlice';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Cart() {
    const productList = useSelector(getProduct);
    const dispatch = useDispatch();

    const sumQuantity = productList.reduce((acc, curr) => {
        return acc + curr.cartQuantity;
    }, 0);

    const sumWithInitial = productList.reduce((acc, curr) => {
        return acc + curr.price * curr.cartQuantity;
    }, 0);

    let totalPrice = sumWithInitial;
    totalPrice = totalPrice?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });

    const deletedItem = (id) => {
        dispatch(cartsSlice.actions.deletedProduct(id));
    };
    return productList?.length ? (
        <div className={cx('wrapper')}>
            <div className={cx('product-list')}>
                <div className={cx('header')}>
                    <span className={cx('header-title')}>Đơn hàng của bạn</span>
                    <span className={cx('header-des')}>{`${sumQuantity} món`}</span>
                </div>
                {productList.map((item) => {
                    let price2 = item?.price * item.cartQuantity;
                    price2 = price2?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
                    return (
                        <table key={item.id} className={cx('table')}>
                            <tbody className={cx('body')}>
                                <tr className={cx('container')}>
                                    <td className={cx('amount')}>{item.cartQuantity}</td>
                                    <td className={cx('symbol')}>x</td>
                                    <td className={cx('product')}>
                                        <div className={cx('product-header')}>
                                            <p className={cx('name')}>{item.name}</p>
                                            <span className={cx('price')}>{price2}</span>
                                        </div>
                                        <div className={cx('content')}>
                                            <ul>
                                                {item.name.includes('Pizza') ? (
                                                    <>
                                                        <li className={cx('select')}>Đế dày xốp</li>
                                                        <li className={cx('select')}>Cỡ 9 inch</li>
                                                    </>
                                                ) : (
                                                    <></>
                                                )}
                                                <li onClick={() => deletedItem(item.id)} className={cx('deleted')}>
                                                    Xoá
                                                </li>
                                            </ul>
                                            <img className={cx('image')} alt="" src={item.img} />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    );
                })}
            </div>
            <div className={cx('footer')}>
                <div className={cx('total')}>
                    <span className={cx('sum')}>Tổng</span>
                    <span className={cx('total-price')}>{totalPrice}</span>
                </div>
                <Link to={'/cart'} className={cx('ahihi')}>
                    <Button className={cx('btn')} primary>
                        {`HOÀN TẤT ĐƠN HÀNG ${totalPrice}`}
                    </Button>
                </Link>
            </div>
        </div>
    ) : (
        <div className={cx('cart')}>
            <div className={cx('cart_item')}>
                <img className={cx('cart_img')} alt="" src="https://dominos.vn/img/illustration/empty-cart.svg"></img>
                <h6 className={cx('cart_text')}>Giỏ hàng chưa có sản phẩm. Xin mời bạn mua hàng</h6>
            </div>
        </div>
    );
}

export default Cart;
