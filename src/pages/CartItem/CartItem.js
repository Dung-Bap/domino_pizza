import classNames from 'classnames/bind';
import styles from './CartItem.module.scss';
import Image from '~/component/Image/Image';
import Button from '~/component/Button/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '~/redux/selector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { cartsSlice } from '../Product/Cart/cartsSlice';
import { useContext } from 'react';
import { ModalEnvironment } from '~/component/Context/Context';

const cx = classNames.bind(styles);

function CartItem() {
    const { showNoti, setShowNoti } = useContext(ModalEnvironment);

    const handleShowModalNoti = () => {
        setShowNoti(true);
        document.body.style.overflow = !showNoti ? 'hidden' : 'overlay';
    };

    const productList = useSelector(getProduct);

    const handleDecreaceProduct = (id) => {
        dispatch(cartsSlice.actions.decreaseCart(id));
    };

    const handleIncreaceProduct = (id) => {
        dispatch(cartsSlice.actions.increaseCart(id));
    };

    const dispatch = useDispatch();

    const deletedItem = (id) => {
        dispatch(cartsSlice.actions.deletedProduct(id));
    };
    const sumQuantity = productList.reduce((acc, curr) => {
        return acc + curr.cartQuantity;
    }, 0);

    const sumWithInitial = productList.reduce((acc, curr) => {
        return acc + curr.price * curr.cartQuantity;
    }, 0);

    let totalPrice = sumWithInitial;
    totalPrice = totalPrice?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });

    return productList.length ? (
        <main className={cx('wrapper-cart')}>
            <section className={cx('container-cart')}>
                <div className={cx('header')}>
                    <div className={cx('header-title')}>Giỏ hàng của bạn</div>
                    <div className={cx('quantity-cart')}>{`${sumQuantity} món`}</div>
                </div>
                <ul className={cx('product-list')}>
                    {productList.map((item) => {
                        let price2 = item.price;
                        price2 = price2.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
                        return (
                            <li key={item.id} className={cx('product-item')}>
                                <div className={cx('product-left')}>
                                    <img className={cx('product-img')} alt="" src={item.img}></img>
                                    <ul className={cx('content-list')}>
                                        <li className={cx('content-name')}>{item.name}</li>
                                        {item.name.includes('Pizza') && (
                                            <>
                                                <li className={cx('content-size')}>Cỡ 9 inch</li>
                                                <li className={cx('content-thin')}>Đế dày xốp</li>
                                            </>
                                        )}
                                    </ul>
                                    <FontAwesomeIcon
                                        onClick={() => deletedItem(item.id)}
                                        className={cx('btn-deleted')}
                                        icon={faTimesCircle}
                                    />
                                </div>
                                <div className={cx('product-right')}>
                                    <span className={cx('price')}>{price2}</span>
                                    <div className={cx('adjust')}>
                                        <div className={cx('quantity-wrapper')}>
                                            <FontAwesomeIcon
                                                onClick={() => handleDecreaceProduct(item.id)}
                                                className={cx('minus', item.cartQuantity === 1 ? '' : 'active')}
                                                icon={faMinus}
                                            />
                                            <span className={cx('quantity')}>{item.cartQuantity}</span>
                                            <FontAwesomeIcon
                                                onClick={() => handleIncreaceProduct(item.id)}
                                                className={cx('plus')}
                                                icon={faPlus}
                                            />
                                        </div>
                                        <span onClick={() => deletedItem(item.id)} className={cx('deleted')}>
                                            Xoá
                                        </span>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <div className={cx('footer-cart')}>
                    <div className={cx('total')}>
                        <div className={cx('total-amount')}>
                            <span className={cx('text')}>Tổng</span>
                            <span className={cx('amount')}>{totalPrice}</span>
                        </div>
                        <Button
                            onClick={handleShowModalNoti}
                            primary
                            className={cx('submit')}
                        >{`Thanh toán ${totalPrice}`}</Button>
                    </div>
                </div>
            </section>
        </main>
    ) : (
        <div className={cx('wrapper')}>
            <div className="py-4 pb-md-6">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 ">
                            <div className="col-12">
                                <div className="d-flex justify-content-center">
                                    <Image src={'https://dominos.vn/img/illustration/empty-cart.svg'} />
                                </div>
                                <div className={cx('footer')}>
                                    <h3 className={cx('title')}>Giỏ hàng trống</h3>
                                    <p className={cx('description')}>
                                        Hiện tại bạn chưa có sản phẩm nào trong giỏ hàng. Hãy dạo một vòng Thực đơn để
                                        chọn sản phẩm yêu thích nhé, Domino's Pizza có nhiều món ngon lắm!
                                    </p>
                                    <Link to={'/product/pizza'}>
                                        <Button className={cx('btn')} primary>
                                            Tiếp tục chọn món
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
