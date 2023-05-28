import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('header')}>
                    <p className={cx('connect')}>Kết nối Domino's Pizza Việt Nam:</p>
                    <FontAwesomeIcon className={cx('icon-1')} icon={faFacebookF} />
                    <FontAwesomeIcon className={cx('icon-2')} icon={faInstagram} />
                </div>
                <div className={cx('main')}>
                    <img className={cx('logo')} src="https://dominos.vn/img/logo/domino.svg" alt="" />
                    <div className={cx('hotline-wrapper')}>
                        <FontAwesomeIcon icon={faPhone} />
                        <p className={cx('hotline')}> Hotline Đặt Hàng </p>
                        <p className={cx('phone')}>1900 6099</p>
                    </div>
                    <div className={cx('group')}>
                        <ul className={cx('group-list')}>
                            <li className={cx('group-item')}>Blog</li>
                            <li className={cx('group-item')}>Tuyển dụng</li>
                        </ul>
                        <ul className={cx('group-list')}>
                            <li className={cx('group-item')}>Thực đơn</li>
                            <li className={cx('group-item')}>Mã e-voucher</li>
                            <li className={cx('group-item')}>Khuyến mãi</li>
                        </ul>
                        <ul className={cx('group-list')}>
                            <li className={cx('group-item')}>Theo dõi đơn hàng</li>
                            <li className={cx('group-item')}>Danh sách cửa hàng</li>
                        </ul>
                    </div>
                    <div className={cx('credential')}>
                        <img src="https://dominos.vn/img/credentials.png" alt="" />
                    </div>
                </div>
                <div className={cx('policy')}>
                    <p className={cx('text')}>© 2020 Domino’s Pizza Vietnam | Privacy Policy</p>
                    <span className={cx('change-language')}>Switch to English version</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
