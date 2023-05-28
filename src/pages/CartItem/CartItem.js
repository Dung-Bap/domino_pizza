import classNames from 'classnames/bind';
import styles from './CartItem.module.scss';
import Image from '~/component/Image/Image';
import Button from '~/component/Button/Button';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function CartItem() {
    return (
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
