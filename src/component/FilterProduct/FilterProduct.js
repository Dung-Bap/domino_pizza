import Button from '~/component/Button/Button';
import Image from '~/component/Image/Image';
import classNames from 'classnames/bind';
import styles from './FilterProduct.module.scss';

const cx = classNames.bind(styles);

function FilterProduct() {
    return (
        <nav className="col-12 col-md-10 mx-auto">
            <div className={cx('product_list')}>
                <Button className={cx('button')} primary>
                    Tất cả
                </Button>
                <Button
                    className={cx('button')}
                    small
                    iconLeft={<Image className={cx('icon')} src="https://img.dominos.vn/fried-shrimp_1f364.png" />}
                >
                    Hải sản
                </Button>
                <Button
                    className={cx('button')}
                    small
                    iconLeft={<Image className={cx('icon')} src="https://img.dominos.vn/cut-of-meat_1f969.png" />}
                >
                    Bò
                </Button>
                <Button
                    className={cx('button')}
                    small
                    iconLeft={<Image className={cx('icon')} src="https://img.dominos.vn/poultry-leg_1f357.png" />}
                >
                    Gà
                </Button>
                <Button
                    className={cx('button')}
                    small
                    iconLeft={<Image className={cx('icon')} src="https://img.dominos.vn/bacon_1f953.png" />}
                >
                    Heo
                </Button>
                <Button
                    className={cx('button')}
                    small
                    iconLeft={<Image className={cx('icon')} src="https://img.dominos.vn/leafy-green_1f96c.png" />}
                >
                    Ăn chay
                </Button>
            </div>
        </nav>
    );
}

export default FilterProduct;
