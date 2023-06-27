import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './ModalNotification.module.scss';

import { ModalEnvironment } from '~/component/Context/Context';
import { createPortal } from 'react-dom';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { getProduct } from '~/redux/selector';
import Button from '~/component/Button/Button';

const cx = classNames.bind(styles);

function ModalNotification() {
    const { showNoti, setShowNoti } = useContext(ModalEnvironment);
    const productList = useSelector(getProduct);
    const [scale, setScale] = useState(false);
    const [hide, setHide] = useState(false);

    const handleScale = () => {
        setScale(true);
        setTimeout(() => {
            setScale(false);
        }, 200);
    };
    const handleHideModal = () => {
        setHide(true);
        setTimeout(() => {
            setShowNoti(false);
            setHide(false);
            document.body.style.overflow = !showNoti ? 'hidden' : 'overlay';
        }, 200);
    };

    const handlePropagation = (e) => {
        e.stopPropagation();
    };
    return (
        <>
            {showNoti &&
                createPortal(
                    <div className={cx('wrapper')} onClick={handleScale}>
                        <div
                            onClick={handlePropagation}
                            className={cx('container', {
                                active: scale,
                                inactive: hide,
                            })}
                        >
                            <div className={cx('content')}>
                                <h4 className={cx('header')}> Thông báo</h4>
                                {productList.length ? (
                                    <span className={cx('title')}> Mình không thích bán nữa ! </span>
                                ) : (
                                    <span className={cx('title')}>
                                        {`Vui lòng nhập địa chỉ để tiếp tục mua hàng ( đang phát triển )`}
                                    </span>
                                )}
                                <Link to={'/store'}>
                                    <Button onClick={handleHideModal} className={cx('button')} primary>
                                        Đã hiểu
                                    </Button>
                                </Link>
                            </div>
                            <FontAwesomeIcon className={cx('close')} onClick={handleHideModal} icon={faClose} />
                        </div>
                    </div>,
                    document.body,
                )}
        </>
    );
}

export default ModalNotification;
