import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './SearchAddress.module.scss';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function SearchAddress({ className, primary = false, small = false, ...passProps }) {
    const props = {
        ...passProps,
    };

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        small,
    });

    return (
        <div className={classes} {...props}>
            <div className={cx('container')}>
                <div className={cx('label')}>
                    <div className={cx('label-item')}>Giao hàng tận nơi</div>
                    <div className={cx('label-item')}>Đặt đến lấy</div>
                </div>
                <div className={cx('wrapper-from')}>
                    <form className={cx('form')}>
                        <div className={cx('wrapper-content')}>
                            <input className={cx('input')} placeholder="Vui lòng nhập địa chỉ nhận hàng" />
                            <FontAwesomeIcon className={cx('icon')} icon={faSearch} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SearchAddress;
