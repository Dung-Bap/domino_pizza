import classNames from 'classnames/bind';
import styles from './BestSeller.module.scss';
import { Link, NavLink } from 'react-router-dom';
import ProductItem from './ProductItem/ProductItem';

const cx = classNames.bind(styles);

function BestSeller({ data }) {
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
                    {data.map((item) => (
                        <ProductItem key={item.product_id} bestSellerId={item.product_id} data={item} />
                    ))}
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
