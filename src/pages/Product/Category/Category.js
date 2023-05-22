import classNames from 'classnames/bind';
import styles from './Category.module.scss';

import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function Category() {
    return (
        <div className={cx('category')}>
            <div className={cx('category_list')}>
                <NavLink
                    style={({ isActive }) => ({
                        color: isActive ? '#e31837' : '#25282d',
                    })}
                    to={'/promotion'}
                >
                    <div className={cx('category_item')}>Khuyến mãi mỗi ngày</div>
                </NavLink>
                <NavLink
                    to={'/product/pizza'}
                    style={({ isActive }) => ({
                        borderBottom: isActive ? '3px solid #e31837' : '',
                        color: isActive ? '#e31837' : '#25282d',
                    })}
                >
                    <div className={cx('category_item')}>Pizza</div>
                </NavLink>
                <NavLink
                    to={'/product/sides'}
                    style={({ isActive }) => ({
                        borderBottom: isActive ? '3px solid #e31837' : '',
                        color: isActive ? '#e31837' : '#25282d',
                    })}
                >
                    <div className={cx('category_item')}>Món phụ</div>
                </NavLink>
                <NavLink
                    to={'/product/dessert'}
                    style={({ isActive }) => ({
                        borderBottom: isActive ? '3px solid #e31837' : '',
                        color: isActive ? '#e31837' : '#25282d',
                    })}
                >
                    <div className={cx('category_item')}>Tráng miệng</div>
                </NavLink>
                <NavLink
                    to={'/product/drinks'}
                    style={({ isActive }) => ({
                        borderBottom: isActive ? '3px solid #e31837' : '',
                        color: isActive ? '#e31837' : '#25282d',
                    })}
                >
                    <div className={cx('category_item')}>Thức uống</div>
                </NavLink>
            </div>
        </div>
    );
}

export default Category;
