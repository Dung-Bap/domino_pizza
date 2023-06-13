import Button from '~/component/Button/Button';
import Image from '~/component/Image/Image';
import classNames from 'classnames/bind';
import styles from './FilterProduct.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function FilterProduct() {
    const [active, setActive] = useState(1);

    const handleOnclick = (id, name) => {
        setActive(id);
        // setTag(name);
    };

    const listProduct = [
        {
            id: 1,
            name: 'Tất cả',
        },
        {
            id: 2,
            name: 'Hải sản',
            srcIcon: 'https://img.dominos.vn/fried-shrimp_1f364.png',
        },
        {
            id: 3,
            name: 'Bò',
            srcIcon: 'https://img.dominos.vn/cut-of-meat_1f969.png',
        },
        {
            id: 4,
            name: 'Gà',
            srcIcon: 'https://img.dominos.vn/poultry-leg_1f357.png',
        },
        {
            id: 5,
            name: 'Heo',
            srcIcon: 'https://img.dominos.vn/bacon_1f953.png',
        },
        {
            id: 6,
            name: 'Ăn chay',
            srcIcon: 'https://img.dominos.vn/leafy-green_1f96c.png',
        },
    ];

    return (
        <nav className="col-12 col-md-10 mx-auto">
            <div className={cx('product_list')}>
                {listProduct.map((item, index) => (
                    <Button
                        key={index}
                        className={cx('button', active === item.id ? 'active' : '')}
                        small
                        iconLeft={!!item.srcIcon && <Image className={cx('icon')} src={item.srcIcon} />}
                        onClick={() => handleOnclick(item.id, item.name)}
                    >
                        {item.name}
                    </Button>
                ))}
            </div>
        </nav>
    );
}

export default FilterProduct;
