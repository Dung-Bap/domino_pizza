import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import {
    faBagShopping,
    faBox,
    faListSquares,
    faPersonBiking,
    faUserAlt,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ModalEnvironment } from '~/component/Context/Context';
import { faGalacticRepublic } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    const ModalContext = useContext(ModalEnvironment);

    return (
        <nav className={cx('wrapper')}>
            <Link to={'/'}>
                <img
                    className={cx('logo', 'hide-on-mobile')}
                    src="https://dominos.vn/img/logo/domino-horizontal-dark.svg"
                    alt=""
                />
            </Link>
            {/* Hide-on-mobile */}
            <div className={cx('nav')}>
                <div className={cx('nav-list')}>
                    {/* Hide-on-mobile */}
                    <Link to={'/'}>
                        <img className={cx('logo2')} src="https://dominos.vn/img/logo/domino.svg" alt="" />
                    </Link>
                    <Link to={'/tracking'}>
                        <FontAwesomeIcon className={cx('logo-bike')} icon={faPersonBiking} />
                    </Link>
                    <Link to={'/promotion'}>
                        <FontAwesomeIcon className={cx('logo-sale')} icon={faGalacticRepublic} />
                    </Link>
                    <Link to={'/product/pizza'}>
                        <FontAwesomeIcon className={cx('logo-menu')} icon={faBox} />
                    </Link>
                    {/* Hide-on-tablet > */}
                    <Link to={'/voucher'}>
                        <div className={cx('nav-item', 'hide-on-mobile')}>MÃ E-VOUCHER</div>
                    </Link>
                    <Link to={'/promotion'}>
                        <div className={cx('nav-item', 'hide-on-mobile')}>KHUYẾN MÃI</div>
                    </Link>
                    <Link to={'/product/pizza'}>
                        <div className={cx('nav-item', 'hide-on-mobile')}>THỰC ĐƠN</div>
                    </Link>
                    <Link to={'/tracking'}>
                        <div className={cx('nav-item', 'hide-on-mobile')}>THEO DÕI ĐƠN HÀNG</div>
                    </Link>
                    <Link to={'/store'}>
                        <div className={cx('nav-item', 'hide-on-mobile')}>DANH SÁCH CỬA HÀNG</div>
                    </Link>
                    <Link to={'/blog'}>
                        <div className={cx('nav-item', 'hide-on-mobile')}>BLOG</div>
                    </Link>
                </div>
            </div>
            <div className={cx('language')}>
                <img className={cx('img-1', 'hide-on-mobile')} src="https://dominos.vn/img/icon/flag-vn.png" alt="" />
                <img className={cx('img-2', 'hide-on-mobile')} src="https://dominos.vn/img/icon/flag-en.png" alt="" />
            </div>
            <div className={cx('nav-right')}>
                <FontAwesomeIcon onClick={ModalContext.handleShowModal} className={cx('icon')} icon={faUserAlt} />
                <Link to={'/cart'}>
                    {' '}
                    <FontAwesomeIcon className={cx('icon')} icon={faBagShopping} />
                </Link>
                {/* Hide-on-tablet > */}
                <span className={cx('notify-cart')}>0</span>

                {ModalContext.showMenu ? (
                    <FontAwesomeIcon
                        className={cx('logo-menu-list')}
                        icon={faXmark}
                        onClick={ModalContext.handleShowModalMenu}
                    />
                ) : (
                    <FontAwesomeIcon
                        className={cx('logo-menu-list')}
                        icon={faListSquares}
                        onClick={ModalContext.handleShowModalMenu}
                    />
                )}
            </div>
        </nav>
    );
}

export default Header;
