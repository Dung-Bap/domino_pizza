import { useContext, useState } from 'react';
import { ModalEnvironment } from '../Context/Context';
import { createPortal } from 'react-dom';

import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import ModalLogin from './ModalLogin/ModalLogin';
import ModalRegister from './ModalRegister/ModalRegister';

const cx = classNames.bind(styles);

function Modal() {
    const ModalContext = useContext(ModalEnvironment);
    const [login, setLogin] = useState(false);

    const handleHideLogin = () => {
        setLogin(true);
    };

    const handleHideAccount = () => {
        setLogin(false);
    };

    return (
        <>
            {ModalContext.show &&
                createPortal(
                    <div className={cx('wrapper')} onClick={ModalContext.handleHideModal}>
                        <div className={cx('ahihi')}>
                            {login ? (
                                <ModalRegister onHideAccount={handleHideAccount} />
                            ) : (
                                <ModalLogin onHideLogin={handleHideLogin} />
                            )}
                        </div>
                    </div>,
                    document.body,
                )}
        </>
    );
}

export default Modal;
