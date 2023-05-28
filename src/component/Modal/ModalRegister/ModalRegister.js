import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { ModalEnvironment } from '~/component/Context/Context';
import { useContext } from 'react';
import { Form, Input } from 'antd';

import classNames from 'classnames/bind';
import styles from './ModalRegister.module.scss';
import Button from '~/component/Button/Button';

const cx = classNames.bind(styles);

function ModalRegister({ onHideAccount }) {
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
                    <p className={cx('text')} onClick={onHideAccount}>
                        Đăng nhập
                    </p>
                    <p className={cx('text')}>Tạo tài khoản</p>
                </div>
                <Form name="normal_register" className={cx('form')} onFinish={onFinish}>
                    <span className={cx('name')}>Họ và tên của bạn</span>
                    <Form.Item
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập họ và tên của bạn!',
                            },
                        ]}
                    >
                        <Input className={cx('input')} placeholder="Nhập họ và tên của bạn" />
                    </Form.Item>
                    <span className={cx('name')}>Số điện thoại</span>
                    <Form.Item
                        name="phone"
                        rules={[
                            {
                                type: 'string',
                                min: 10,
                                max: 10,
                                message: 'Số điện thoại không tồn tại!',
                            },
                            {
                                required: true,
                                message: 'Vui lòng nhập số điện thoại của bạn!',
                            },
                        ]}
                    >
                        <Input className={cx('input')} placeholder="Nhập số điện thoại của bạn" />
                    </Form.Item>
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
                        <Input className={cx('input')} placeholder="Nhập email của bạn" />
                    </Form.Item>
                    <span className={cx('name')}>Mật khẩu</span>
                    <Form.Item
                        name="password"
                        style={{ width: '308px' }}
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập mật khẩu!',
                            },
                            {
                                min: 8,
                                message: 'Mật khẩu ít nhất là 8 kí tự gồm chữ hoa, chữ thường, số và kí tự đặc biệt!',
                            },
                        ]}
                    >
                        <Input.Password className={cx('input')} type="password" placeholder="Nhập mật khẩu" />
                    </Form.Item>
                    <span className={cx('name')}>Xác nhận mật khẩu</span>
                    <Form.Item
                        name="confirm"
                        dependencies={['password']}
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập lại mật khẩu của bạn!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Mật khẩu không trùng khớp!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password
                            className={cx('input')}
                            type="password"
                            placeholder="Xác nhận mật khẩu của bạn"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button htmltype="submit" className={cx('btn')} primary>
                            Tạo tài khoản
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default ModalRegister;
