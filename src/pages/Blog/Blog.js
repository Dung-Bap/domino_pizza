import classNames from 'classnames/bind';
import styles from './Blog.module.scss';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ModalEnvironment } from '~/component/Context/Context';

const cx = classNames.bind(styles);

function Blog() {
    const { setHide } = useContext(ModalEnvironment);

    return (
        <div className={cx('wrapper')}>
            <nav className={cx('navbar')}>
                <NavLink
                    onClick={() => setHide(true)}
                    to={'/blog/content'}
                    className={cx('navbar_item')}
                    style={({ isActive }) => ({
                        color: isActive ? '#e31837' : '#585c61',
                        borderBottom: isActive ? '2px solid #e31837' : '',
                    })}
                >
                    Mới nhất
                </NavLink>
                <NavLink
                    to={'/blog/about-dominos'}
                    className={cx('navbar_item')}
                    style={({ isActive }) => ({
                        color: isActive ? '#e31837' : '#585c61',
                        borderBottom: isActive ? '2px solid #e31837' : '',
                    })}
                >
                    Về Domino's
                </NavLink>
                <NavLink
                    to={'/blog/recruitment'}
                    className={cx('navbar_item')}
                    style={({ isActive }) => ({
                        color: isActive ? '#e31837' : '#585c61',
                        borderBottom: isActive ? '2px solid #e31837' : '',
                    })}
                >
                    Tuyển dụng
                </NavLink>
                <NavLink
                    to={'/blog/more-information'}
                    className={cx('navbar_item')}
                    style={({ isActive }) => ({
                        color: isActive ? '#e31837' : '#585c61',
                        borderBottom: isActive ? '2px solid #e31837' : '',
                    })}
                >
                    Có thể bạn chưa biết
                </NavLink>
            </nav>
        </div>
    );
}
export default Blog;
