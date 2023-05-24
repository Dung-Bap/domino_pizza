import classNames from 'classnames/bind';
import styles from './Blog.module.scss';
import Image from '~/component/Image/Image';

const cx = classNames.bind(styles);

function Blog() {
    return (
        <div className={cx('wrapper')}>
            <nav className={cx('navbar')}>
                <div className={cx('navbar_item', 'active')}>Mới nhất</div>
                <div className={cx('navbar_item')}>Về Domino's</div>
                <div className={cx('navbar_item')}>Tuyển dụng</div>
                <div className={cx('navbar_item')}>Có thể bạn chưa biết</div>
            </nav>
            <h2 className={cx('bigtitle')}>TIN TỨC - DOMINO'S PIZZA VIỆT NAM</h2>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <Image
                        className={cx('image_1')}
                        alt=""
                        src={'https://img.dominos.vn/tiet-lo-tinh-cach-qua-cach-an-pizza-0.jpg'}
                    />
                    <h2 className={cx('title_1')}>Tiết lộ tính cách qua cách ăn pizza cực thú vị</h2>
                    <p className={cx('description_1')}>
                        Đọc vị tính cách qua cách ăn pizza siêu đơn giản với các thông tin thú vị mà Domino's Pizza chia
                        sẻ trong bài viết sau đây. Cùng khám phá ngay thôi nào!
                    </p>
                </div>
                <div className={cx('content')}>
                    <Image
                        className={cx('image_2')}
                        alt=""
                        src={'https://img.dominos.vn/+tai-sao-pizza-hinh-tron-hop-vuong-0.jpg'}
                    />
                    <h2 className={cx('title_2')}>
                        [Góc thắc mắc] Tại sao pizza hình tròn lại được để trong hộp vuông?
                    </h2>
                    <p className={cx('description_2')}>
                        Tại sao pizza hình tròn hộp vuông là thắc mắc của không ít tín đồ đam mê pizza. Hãy cùng
                        Domino's Pizza tìm hiểu chi tiết trong bài viết sau đây bạn nhé!
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Blog;
