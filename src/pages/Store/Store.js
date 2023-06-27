import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Store.module.scss';
import Map from '~/component/GoogleMaps/Map';
import Button from '~/component/Button/Button';
import StoreItem from './StoreItem /StoreItem';
import * as provinceService from '~/services/provinceService';
import { dataStore } from '~/Variable/Variable';
const cx = classNames.bind(styles);

function Store() {
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [valueProvince, setValueProvince] = useState();

    useEffect(() => {
        const fecthApi = async () => {
            const result = await provinceService.getProvince();
            setProvinces(result);
        };
        fecthApi();
    }, []);

    useEffect(() => {
        const fecthApi = async () => {
            const result = await provinceService.getDistrict(valueProvince);
            setDistricts(result);
        };
        fecthApi();
    }, [valueProvince]);

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
                    <select
                        defaultValue={provinces?.province_id}
                        value={provinces?.province_id}
                        onChange={(e) => {
                            setValueProvince(e.target.value);
                        }}
                        className={cx('selector')}
                        name="city"
                    >
                        <option value="" selected="">
                            Chọn Tỉnh/Thành phố
                        </option>
                        {provinces?.map((province, index) => (
                            <option key={index} value={province.province_id}>
                                {province.province_name}
                            </option>
                        ))}
                    </select>
                    <FontAwesomeIcon className={cx('btn_down1')} icon={faCaretDown} />
                    <FontAwesomeIcon className={cx('btn_down2')} icon={faCaretDown} />
                    <select
                        defaultValue={districts?.district_id}
                        value={districts?.district_id}
                        className={cx('selector')}
                        name="district"
                    >
                        <option value="" selected="">
                            Chọn Quận/Huyện
                        </option>
                        {districts?.map((district, index) => (
                            <option key={index} value={district.district_id}>
                                {district.district_name}
                            </option>
                        ))}
                    </select>
                    <p className={cx('list_store')}>Danh sách cửa hàng</p>
                    <div className={cx('store_list')}>
                        {dataStore.map((item, index) => (
                            <StoreItem key={index} data={item} />
                        ))}
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Store;
