import DOMPurify from 'dompurify';

import classNames from 'classnames/bind';
import styles from './BlogContent.module.scss';
import Button from '~/component/Button/Button';
import { dataBlog } from '~/Variable/Variable';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { ModalEnvironment } from '~/component/Context/Context';

const cx = classNames.bind(styles);

function BlogContent() {
    const { hide, setHide } = useContext(ModalEnvironment);

    return (
        <div className={cx('container')}>
            {hide && (
                <div>
                    <div className={cx('title')}>TIN TỨC - DOMINO'S PIZZA VIỆT NAM</div>
                    <div className={cx('blog_wrap')}>
                        <div className={cx('blog_left')}>
                            <img className={cx('img')} alt="" src={dataBlog[0]?.image} />
                            <h2>{dataBlog[0]?.title}</h2>
                            <div className={cx('content')}>{dataBlog[0]?.seo_description}</div>

                            <Button className={cx('button')} onClick={() => setHide(false)}>
                                Xem chi tiết
                            </Button>
                        </div>
                        <div className={cx('blog_right')}>
                            <div className={cx('item')}>
                                <img className={cx('img')} alt="" src={dataBlog[1]?.image} />
                                <h2 className={cx('title_blog')}>{dataBlog[1]?.title}</h2>
                                <div className={cx('content')}>{dataBlog[1]?.seo_description}</div>
                            </div>
                            <div className={cx('item')}>
                                <img className={cx('img')} alt="" src={dataBlog[2]?.image} />
                                <h2 className={cx('title_blog')}>{dataBlog[2]?.title}</h2>
                                <div className={cx('content')}>{dataBlog[2]?.seo_description}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {hide ? (
                ''
            ) : (
                <div>
                    <div className={cx('header')}>
                        <span className={cx('back_new')} onClick={() => setHide(true)}>
                            Mới nhất
                        </span>
                        <FontAwesomeIcon className={cx('icon')} icon={faChevronRight} />
                        <span className={cx('detail')}>Chi tiết tin tức</span>
                    </div>
                    <div>
                        {dataBlog.map((item, index) => (
                            <div
                                className={cx('blog_content')}
                                key={index}
                                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.blog_content) }}
                            ></div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
export default BlogContent;
