import classNames from 'classnames/bind';
import styles from './ModalMenu.module.scss';
import { createPortal } from 'react-dom';
import { useContext } from 'react';
import { ModalEnvironment } from '~/component/Context/Context';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ModalMenu() {
    const ModalContext = useContext(ModalEnvironment);

    return (
        <>
            {ModalContext.showMenu &&
                createPortal(
                    <div className={cx('wrapper')}>
                        <ul className={cx('memu_list')} onClick={ModalContext.handleShowModalMenu}>
                            <li className={cx('menu_item')} onClick={ModalContext.handleShowModal}>
                                Đăng nhập / Tạo tài khoản
                            </li>
                            <Link to={'voucher/'}>
                                <li className={cx('menu_item')}>Mã E-Voucher</li>
                            </Link>
                            <Link to={'/promotion'}>
                                {' '}
                                <li className={cx('menu_item')}>Khuyến mãi</li>
                            </Link>
                            <Link to={'/product/pizza'}>
                                {' '}
                                <li className={cx('menu_item')}>Thực đơn</li>
                            </Link>
                            <Link to={'/tracking'}>
                                <li className={cx('menu_item')}>Theo dõi đơn hàng</li>
                            </Link>
                            <Link to={'/blog'}>
                                {' '}
                                <li className={cx('menu_item')}>Blog</li>
                            </Link>
                            <Link to={'/store'}>
                                {' '}
                                <li className={cx('menu_item')}>Danh sách cửa hàng</li>
                            </Link>
                        </ul>
                    </div>,
                    document.body,
                )}
        </>
    );
}

export default ModalMenu;
