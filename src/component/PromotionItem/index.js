import DOMPurify from 'dompurify';

import Button from '../Button/Button';
import classNames from 'classnames/bind';
import styles from './PromotionItem.module.scss';
import { useContext } from 'react';
import { ModalEnvironment } from '../Context/Context';

const cx = classNames.bind(styles);

function PromotionItem({ data }) {
    let content = data.blog_content;
    const { showNoti, setShowNoti } = useContext(ModalEnvironment);
    const handleShowModalNoti = () => {
        setShowNoti(true);
        document.body.style.overflow = !showNoti ? 'hidden' : 'overlay';
    };

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
                            <div className={cx('text-list')}>
                                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}></div>
                            </div>
                            <div className={cx('button')}>
                                {data.meta_datas.map((item, index) => (
                                    <Button onClick={handleShowModalNoti} key={index} large>
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
