import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './SearchAddress.module.scss';
import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';

const cx = classNames.bind(styles);

function SearchAddress({ className, primary = false, small = false, ...passProps }) {
    const selectDeli = [
        {
            id: 1,
            name: 'Giao hàng tận nơi',
        },
        {
            id: 2,
            name: 'Đặt đến lấy',
        },
    ];

    const [active, setActive] = useState(1);

    const props = {
        ...passProps,
    };

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        small,
    });

    const [value, setValue] = useState('');
    const inputRef = useRef();

    const handleClearInput = () => {
        setValue('');
        inputRef.current.focus();
    };

    return (
        <div className={classes} {...props}>
            <div className={cx('container')}>
                <div className={cx('label')}>
                    {selectDeli.map((item, index) => (
                        <div
                            className={cx('label-item', item.id === active ? 'active' : '')}
                            onClick={() => setActive(item.id)}
                            key={index}
                        >
                            {item.name}
                        </div>
                    ))}
                </div>
                <div className={cx('wrapper-from')}>
                    <form className={cx('form')}>
                        <div className={cx('wrapper-content')}>
                            <input
                                ref={inputRef}
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                className={cx('input')}
                                placeholder="Vui lòng nhập địa chỉ nhận hàng"
                            />
                            <FontAwesomeIcon className={cx('close_btn')} onClick={handleClearInput} icon={faClose} />
                            <FontAwesomeIcon className={cx('icon')} icon={faSearch} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SearchAddress;
