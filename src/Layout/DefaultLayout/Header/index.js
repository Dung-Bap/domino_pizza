import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { faBasketShopping, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ModalEnvironment } from '~/component/Context/Context';

const cx = classNames.bind(styles);

function Header() {
    const ModalContext = useContext(ModalEnvironment);

    return (
        <nav className={cx('wrapper')}>
            <Link to={'/'}>
                <img className={cx('logo')} src="https://dominos.vn/img/logo/domino-horizontal-dark.svg" alt="" />
            </Link>
            <div className={cx('nav')}>
                <div className={cx('nav-list')}>
                    <Link to={'/voucher'}>
                        <div className={cx('nav-item')}>MÃ E-VOUCHER</div>
                    </Link>
                    <Link to={'/promotion'}>
                        <div className={cx('nav-item')}>KHUYẾN MÃI</div>
                    </Link>
                    <Link to={'/product/pizza'}>
                        <div className={cx('nav-item')}>THỰC ĐƠN</div>
                    </Link>
                    <Link to={'/tracking'}>
                        <div className={cx('nav-item')}>THEO DÕI ĐƠN HÀNG</div>
                    </Link>
                    <Link to={'/store'}>
                        <div className={cx('nav-item')}>DANH SÁCH CỬA HÀNG</div>
                    </Link>
                    <Link to={'/blog'}>
                        <div className={cx('nav-item')}>BLOG</div>
                    </Link>
                </div>
            </div>
            <div className={cx('language')}>
                <img className={cx('img-1')} src="https://dominos.vn/img/icon/flag-vn.png" alt="" />
                <img className={cx('img-2')} src="https://dominos.vn/img/icon/flag-en.png" alt="" />
            </div>
            <div className={cx('nav-right')}>
                <FontAwesomeIcon onClick={ModalContext.handleShowModal} className={cx('icon')} icon={faUserAlt} />
                <Link to={'/cart'}>
                    {' '}
                    <FontAwesomeIcon className={cx('icon')} icon={faBasketShopping} />
                </Link>
                <span className={cx('notify-cart')}>0</span>
            </div>
        </nav>
    );
}

export default Header;
