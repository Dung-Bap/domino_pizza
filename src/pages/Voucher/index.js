import classNames from 'classnames/bind';
import styles from './Voucher.module.scss';

const cx = classNames.bind(styles);

function Voucher() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <div className={cx('body')}>
                        <h4 className={cx('header')}> Bạn có mã E-voucher tại Domino's Pizza?</h4>
                        <p className={cx('text')}>Nhập mã E-voucher của bạn ở khung dưới đây để được ưu đãi</p>
                        <div className={cx('form')}>
                            <input className={cx('input')} placeholder="Nhập mã E-voucher" />
                            <span className={cx('btn')}>Áp dụng</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Voucher;
