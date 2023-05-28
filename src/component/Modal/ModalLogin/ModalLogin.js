import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { ModalEnvironment } from '~/component/Context/Context';
import { useContext } from 'react';
import { Form, Input } from 'antd';

import classNames from 'classnames/bind';
import styles from './ModalLogin.module.scss';
import Button from '~/component/Button/Button';

const cx = classNames.bind(styles);

function ModalLogin({ onHideLogin }) {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const ModalContext = useContext(ModalEnvironment);
    const handlePropagation = (e) => {
        e.stopPropagation();
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
                <Form name="normal_login" className={cx('form')} onFinish={onFinish}>
                    <span className={cx('name')}>Email</span>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                type: 'email',
                                message: 'Email không hợp lệ!',
                            },
                            {
                                required: true,
                                message: 'Vui lòng nhập địa chỉ email của bạn!',
                            },
                        ]}
                    >
                        <Input className={cx('input')} placeholder="Nhập tên đăng nhập" />
                    </Form.Item>
                    <span className={cx('name')}>Mật khẩu</span>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập mật khẩu!',
                            },
                        ]}
                    >
                        <Input.Password className={cx('input')} type="password" placeholder="Nhập mật khẩu" />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" className={cx('btn')} primary>
                            Đăng nhập
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default ModalLogin;
