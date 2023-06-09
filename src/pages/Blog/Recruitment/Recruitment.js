import classNames from 'classnames/bind';
import styles from './Recruitment.module.scss';
import DOMPurify from 'dompurify';
import { dataRecruitment } from '~/Variable/Variable';

const cx = classNames.bind(styles);

function Recruitment() {
    return (
        <div className={cx('container')}>
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(dataRecruitment[0].blog_content) }}></div>
        </div>
    );
}

export default Recruitment;
