import classNames from 'classnames/bind';
import styles from './StoreItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function StoreItem() {
    return (
        <div className={cx('wrapper')}>
            <FontAwesomeIcon className={cx('icon')} icon={faMapMarkerAlt} />
            <div className={cx('content')}>
                <p className={cx('name')}>Dominos - CONG HOA</p>
                <p className={cx('time')}>10:00 am 10:00 am</p>
                <p className={cx('adress')}>371 - 373 Cong Hoa Street, Ward 13, Tan Binh District</p>
            </div>
        </div>
    );
}

export default StoreItem;
