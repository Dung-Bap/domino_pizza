import classNames from 'classnames/bind';
import styles from './Promotion.module.scss';

import PromotionItem from '~/component/PromotionItem';

const cx = classNames.bind(styles);

function Promotion() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <PromotionItem />
                <PromotionItem />
                <PromotionItem />
            </div>
        </div>
    );
}

export default Promotion;
