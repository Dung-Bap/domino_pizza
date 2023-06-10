import classNames from 'classnames/bind';
import styles from './ModalMenu.module.scss';
import { createPortal } from 'react-dom';
import { useContext } from 'react';
import { ModalEnvironment } from '~/component/Context/Context';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ModalMenu() {
    const { handleShowModalMenu, handleShowModal, showMenu, hideModal } = useContext(ModalEnvironment);

    return (
        <>
            {showMenu &&
                createPortal(
                    <div
                        className={cx('wrapper', {
                            inactive: hideModal,
                        })}
                    >
                        <ul className={cx('memu_list')} onClick={handleShowModalMenu}>
                            <Link to={'/'} className={cx('menu_item')} onClick={handleShowModal}>
                                Đăng nhập / Tạo tài khoản
                            </Link>
                            <Link to={'/voucher'}>
                                <li className={cx('menu_item')}>Mã E-Voucher</li>
                            </Link>
                            <Link to={'/promotion'}>
                                <li className={cx('menu_item')}>Khuyến mãi</li>
                            </Link>
                            <Link to={'/product/pizza'}>
                                <li className={cx('menu_item')}>Thực đơn</li>
                            </Link>
                            <Link to={'/tracking'}>
                                <li className={cx('menu_item')}>Theo dõi đơn hàng</li>
                            </Link>
                            <Link to={'/blog/content'}>
                                <li className={cx('menu_item')}>Blog</li>
                            </Link>
                            <Link to={'/store'}>
                                <li className={cx('menu_item')}>Danh sách cửa hàng</li>
                            </Link>
                        </ul>
                        `Clone `Domino's Pizza` By `Dung Bap`
                    </div>,
                    document.body,
                )}
        </>
    );
}

export default ModalMenu;
