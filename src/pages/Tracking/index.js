import { Form, Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './Tracking.module.scss';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Button from '~/component/Button/Button';

const cx = classNames.bind(styles);

function Tracking() {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('img')}>
                    <img src="https://dominos.vn/img/stock-stracking.png" alt="" />
                </div>
                <div className={cx('tracking')}>
                    <div className={cx('content')}>
                        <h4 className={cx('text')}>Theo Dõi Đơn Hàng - Domino's Pizza Việt Nam</h4>
                        <Form onFinish={onFinish}>
                            <div className={cx('search')}>
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
                                <Form.Item>
                                    <Button htmltype="submit" className={cx('btn')}>
                                        <FontAwesomeIcon className={cx('btn-search')} icon={faSearch} />
                                    </Button>
                                </Form.Item>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tracking;
