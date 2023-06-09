import classNames from 'classnames/bind';
import styles from './AboutDominos.module.scss';
import { dataAboutDominos } from '~/Variable/Variable';

const cx = classNames.bind(styles);

function AboutDominos() {
    return (
        <div className={cx('container')}>
            <div className={cx('content')}>
                <div className={cx('wrapper')}>
                    <div class="row py-2 py-md-4">
                        <div class="col-md-6 pb-4 pb-md-0">
                            <img alt="" src="https://dominos.vn/img/about-us-delivery.png"></img>
                        </div>
                        <div class="col-md-6">
                            <p className={cx('title')}>{dataAboutDominos.title1}</p>
                            <p>{dataAboutDominos.content1}</p>
                        </div>
                    </div>
                    <div class="row py-2 py-md-4 flex-row-reverse">
                        <div class="col-md-6 pb-4 pb-md-0">
                            <img alt="" src="https://dominos.vn/img/about-us-commitment.png"></img>
                        </div>
                        <div class="col-md-6">
                            <p class="mb-3">{dataAboutDominos.content2}</p>
                            <p className={cx('title')}>{dataAboutDominos.title2}</p>
                            <ul className={cx('list')}>
                                <li>{dataAboutDominos.condition1}</li>
                                <li>{dataAboutDominos.condition2}</li>
                                <li>{dataAboutDominos.condition3}</li>
                                <li>{dataAboutDominos.condition4}</li>
                                <li>{dataAboutDominos.condition5}</li>
                                <li>{dataAboutDominos.condition6}</li>
                                <li>{dataAboutDominos.condition7}</li>
                            </ul>
                            <p>{dataAboutDominos.condition8}</p>
                        </div>
                    </div>
                    <div class="row py-2 py-md-4">
                        <div class="col-md-6 pb-4 pb-md-0">
                            <img alt="" src="https://dominos.vn/img/about-us-condition.png"></img>
                        </div>
                        <div class="col-md-6">
                            <p class="mb-3">{dataAboutDominos.content3}</p>
                            <p className={cx('title')}>{dataAboutDominos.apply_title}</p>
                            <p>{dataAboutDominos.apply_content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutDominos;
