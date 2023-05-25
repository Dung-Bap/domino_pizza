import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Store.module.scss';
import Map from '~/component/GoogleMaps/Map';
import Button from '~/component/Button/Button';
import StoreItem from './StoreItem /StoreItem';
const cx = classNames.bind(styles);

function Store() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('map')}>
                    <div className={cx('search')}>
                        <input className={cx('input')} placeholder="Vui lòng nhập địa chỉ nhận hàng" />
                        <Button className={cx('btn')} primary>
                            <FontAwesomeIcon className={cx('icon')} icon={faSearch} />
                        </Button>
                    </div>
                    <Map />
                </div>
                <form className={cx('bar')} action="get" target="/">
                    <select className={cx('selector')} name="city">
                        <option selected="" value="null">
                            Chọn Tỉnh/Thành phố
                        </option>
                        <option value="1">Hồ Chí Minh</option>
                        <option value="2">Hà Nội</option>
                        <option value="33"> Đà Nẵng</option>
                        <option value="48"> Bình Dương</option>
                        <option value="49"> Đồng Nai</option>
                        <option value="59">Cần Thơ</option>
                        <option value="70">Hải Phòng</option>
                    </select>
                    <FontAwesomeIcon className={cx('btn_down1')} icon={faCaretDown} />
                    <FontAwesomeIcon className={cx('btn_down2')} icon={faCaretDown} />
                    <select className={cx('selector')} name="district">
                        <option selected="" value="null">
                            Chọn Quận/Huyện
                        </option>
                    </select>
                    <p className={cx('list_store')}>Danh sách cửa hàng</p>
                    <div className={cx('store_list')}>
                        <StoreItem />
                        <StoreItem />
                        <StoreItem />
                        <StoreItem />
                        <StoreItem />
                        <StoreItem />
                        <StoreItem />
                        <StoreItem />
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Store;
