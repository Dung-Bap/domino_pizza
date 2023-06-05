import Button from '../Button/Button';
import classNames from 'classnames/bind';
import styles from './PromotionItem.module.scss';

const cx = classNames.bind(styles);

function PromotionItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('deal')}>
                    <img className={cx('img')} alt="" src={data.image} />
                </div>
                <div className={cx('description')}>
                    <div className={cx('content')}>
                        <div className={cx('card')}>
                            <h2 className={cx('header')}>{data.title}</h2>
                            <hr className={cx('line')}></hr>
                            <div className={cx('text-list')}>{data.blog_content}</div>
                            <div className={cx('button')}>
                                {data.meta_datas.map((item, index) => (
                                    <Button key={index} large>
                                        {item.text}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PromotionItem;
