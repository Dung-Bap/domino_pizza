import Button from '../Button/Button';
import classNames from 'classnames/bind';
import styles from './PromotionItem.module.scss';

const cx = classNames.bind(styles);

function PromotionItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('deal')}>
                    <img
                        className={cx('img')}
                        alt=""
                        src="https://img.dominos.vn/Banner+Promotion_+HAPPY+SUNDAY_BOGO+M1T1-v03.png"
                    />
                </div>
                <div className={cx('description')}>
                    <div className={cx('content')}>
                        <div className={cx('card')}>
                            <h2 className={cx('header')}>MUA 1 TẶNG 1 - CHỦ NHẬT (KHÔNG ÁP DỤNG GIAO HÀNG)</h2>
                            <hr className={cx('line')}></hr>
                            <div className={cx('text-list')}>
                                <p className={cx('text')}>
                                    * Mua 1 bánh Pizza size M / L kèm thức uống lớn bất kỳ hoặc 2 thức uống nhỏ bất kỳ
                                    sẽ được Tặng 1 bánh Pizza cùng cỡ.
                                </p>
                                <p className={cx('text')}>
                                    * Áp dụng cho hình thức Đặt đến lấy khi đặt hàng qua website (không áp dụng cho Giao
                                    hàng tận nơi).
                                </p>
                                <p className={cx('text')}>* Chỉ áp dụng ngày Chủ Nhật.</p>
                                <p className={cx('text')}>* Chương trình không áp dụng ngày Lễ/ Tết.</p>
                            </div>
                            <div className={cx('button')}>
                                <Button large> Pizza size M + 1 nước lớn</Button>
                                <Button large> Pizza size L + 1 nước lớn</Button>
                                <Button large> Pizza size M + 2 nước nhỏ</Button>
                                <Button large> Pizza size L + 2 nước nhỏ</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PromotionItem;
