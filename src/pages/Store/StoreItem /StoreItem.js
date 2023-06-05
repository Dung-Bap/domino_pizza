import classNames from 'classnames/bind';
import styles from './StoreItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function StoreItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <FontAwesomeIcon className={cx('icon')} icon={faMapMarkerAlt} />
            <div className={cx('content')}>
                <p className={cx('name')}>{data.name}</p>
                <p className={cx('time')}>10:00 am - 09:30 pm</p>
                <p className={cx('adress')}>{data.address_en}</p>
            </div>
        </div>
    );
}

export default StoreItem;
