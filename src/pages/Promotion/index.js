import classNames from 'classnames/bind';
import styles from './Promotion.module.scss';

import PromotionItem from '~/component/PromotionItem';
import { dataPromotion } from '~/Variable/Variable';

const cx = classNames.bind(styles);

function Promotion() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {dataPromotion.map((item, index) => (
                    <PromotionItem key={index} data={item} />
                ))}
            </div>
        </div>
    );
}

export default Promotion;
