import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { ModalEnvironment } from '~/component/Context/Context';
import { useContext } from 'react';

import classNames from 'classnames/bind';
import styles from './ModalLogin.module.scss';
import Button from '~/component/Button/Button';

const cx = classNames.bind(styles);

function ModalLogin({ onHideLogin }) {
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
                    <p className={cx('text')}>Đăng nhập</p>
                    <p className={cx('text')} onClick={onHideLogin}>
                        Tạo tài khoản
                    </p>
                </div>
                <form className={cx('form')}>
                    <div className={cx('wrapper_input')}>
                        <span className={cx('name')}>Email</span>
                        <input className={cx('input')} placeholder="Nhập tên đăng nhập" />
                    </div>
                    <div className={cx('wrapper_input')}>
                        <span className={cx('name')}>Mật khẩu</span>
                        <input className={cx('input')} placeholder="Nhập mật khẩu" />
                    </div>

                    <Button className={cx('btn')} primary onClick={handleClickBtn}>
                        Đăng nhập
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default ModalLogin;
