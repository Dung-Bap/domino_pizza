import classNames from 'classnames/bind';
import styles from './BestSeller.module.scss';
import { Link, NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function BestSeller() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('header')}>
                    <h4 className={cx('header-slogan')}>Hôm Nay Ăn Gì ?</h4>
                    <ul className={cx('header-list')}>
                        <NavLink
                            style={({ isActive }) => ({
                                color: isActive ? '#e31837' : '#25282d',
                            })}
                            to={'/promotion'}
                        >
                            <li className={cx('header-item')}>Khuyến Mãi Mỗi Ngày</li>
                        </NavLink>
                        <li className={cx('header-item')}>Best sellers</li>
                    </ul>
                </div>
                <div className={cx('content')}>
                    <div className={cx('product-item')}>
                        <div className={cx('wrapper-item')}>
                            <div className={cx('item-img')}>
                                {' '}
                                <img
                                    className={cx('img')}
                                    src="https://img.dominos.vn/Menu-PC_LTO-NewYork.jpg"
                                    alt=""
                                />
                            </div>
                            <div className={cx('body')}>
                                <div className={cx('name')}>
                                    Pizza Bò Beefsteak Phô Mai Kiểu New York - New York CheeseSteak
                                </div>
                                <p className={cx('price')}>109,000đ</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('product-item')}>
                        <div className={cx('wrapper-item')}>
                            <div className={cx('item-img')}>
                                {' '}
                                <img
                                    className={cx('img')}
                                    src="https://img.dominos.vn/Menu-PC_LTO-NewYork.jpg"
                                    alt=""
                                />
                            </div>
                            <div className={cx('body')}>
                                <div className={cx('name')}>
                                    Pizza Bò Beefsteak Phô Mai Kiểu New York - New York CheeseSteak
                                </div>
                                <p className={cx('price')}>109,000đ</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('product-item')}>
                        <div className={cx('wrapper-item')}>
                            <div className={cx('item-img')}>
                                {' '}
                                <img
                                    className={cx('img')}
                                    src="https://img.dominos.vn/Menu-PC_LTO-NewYork.jpg"
                                    alt=""
                                />
                            </div>
                            <div className={cx('body')}>
                                <div className={cx('name')}>
                                    Pizza Bò Beefsteak Phô Mai Kiểu New York - New York CheeseSteak
                                </div>
                                <p className={cx('price')}>109,000đ</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('product-item')}>
                        <div className={cx('wrapper-item')}>
                            <div className={cx('item-img')}>
                                {' '}
                                <img
                                    className={cx('img')}
                                    src="https://img.dominos.vn/Menu-PC_LTO-NewYork.jpg"
                                    alt=""
                                />
                            </div>
                            <div className={cx('body')}>
                                <div className={cx('name')}>
                                    Pizza Bò Beefsteak Phô Mai Kiểu New York - New York CheeseSteak
                                </div>
                                <p className={cx('price')}>109,000đ</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('more-btn')}>
                    <Link to={'/product/pizza'}>
                        {' '}
                        <button className={cx('more')}>Xem Thêm</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BestSeller;
