import classNames from 'classnames/bind';
import styles from './Tracking.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Tracking() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('img')}>
                    <img src="https://dominos.vn/img/stock-stracking.png" alt="" />
                </div>
                <div className={cx('tracking')}>
                    <div className={cx('content')}>
                        <h4 className={cx('text')}>Theo Dõi Đơn Hàng - Domino's Pizza Việt Nam</h4>
                        <div className={cx('search')}>
                            <input type="text" placeholder="Nhập số điện thoại của bạn" />
                            <p>
                                <FontAwesomeIcon className={cx('btn-search')} icon={faSearch} />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tracking;
