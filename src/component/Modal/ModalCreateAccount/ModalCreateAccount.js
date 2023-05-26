import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { ModalEnvironment } from '~/component/Context/Context';
import { useContext } from 'react';

import classNames from 'classnames/bind';
import styles from './ModalCreateAccount.module.scss';
import Button from '~/component/Button/Button';

const cx = classNames.bind(styles);

function ModalCreateAccount({ onHideAccount }) {
    const ModalContext = useContext(ModalEnvironment);

    const handlePropagation = (e) => {
        e.stopPropagation();
    };
    const handleClickBtn = (e) => {
        e.preventDefault();
    };
    return (
        <div className={cx('container')} onClick={handlePropagation}>
            <span className={cx('close')} onClick={ModalContext.handleHideModal}>
                <FontAwesomeIcon className={cx('btn_close')} icon={faClose} />
            </span>
            <div>
                <div className={cx('image')}></div>
            </div>
            <div className={cx('content')}>
                <div className={cx('header')}>
                    <p className={cx('text')} onClick={onHideAccount}>
                        Đăng nhập
                    </p>
                    <p className={cx('text')}>Tạo tài khoản</p>
                </div>
                <form className={cx('form')}>
                    <div className={cx('wrapper_input')}>
                        <span className={cx('name')}>Họ và tên của bạn</span>
                        <input className={cx('input')} placeholder="Nhập họ và tên của bạn" />
                    </div>
                    <div className={cx('wrapper_input')}>
                        <span className={cx('name')}>Số điện thoại</span>
                        <input className={cx('input')} placeholder="Nhập số điện thoại của bạn" />
                    </div>
                    <div className={cx('wrapper_input')}>
                        <span className={cx('name')}>Email</span>
                        <input className={cx('input')} placeholder="Nhập email của bạn" />
                    </div>
                    <div className={cx('wrapper_input')}>
                        <span className={cx('name')}>Mật khẩu</span>
                        <input className={cx('input')} placeholder="Nhập mật khẩu" />
                    </div>
                    <div className={cx('wrapper_input')}>
                        <span className={cx('name')}>Xác nhận mật khẩu</span>
                        <input className={cx('input')} placeholder="Xác nhận mật khẩu của bạn" />
                    </div>

                    <Button className={cx('btn')} primary onClick={handleClickBtn}>
                        Tạo tài khoản
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default ModalCreateAccount;
