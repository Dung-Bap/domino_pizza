import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import { bannerImg } from '~/assets/Img/banner';
import SearchAddress from '~/component/SearchAddress';
import BestSeller from '~/component/BestSeller';
const cx = classNames.bind(styles);

function Home() {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return <div className={className} style={{ ...style, display: 'none' }} onClick={onClick} />;
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return <div className={className} style={{ ...style, display: 'none' }} onClick={onClick} />;
    }
    const settings = {
        dots: true,
        centerMode: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        centerPadding: '100px',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner')}>
                <div className={cx('banner-img')}>
                    <Slider {...settings}>
                        {bannerImg.map((img, index) => (
                            <img className={cx('banner-item')} key={index} src={img.linkImg} alt="" />
                        ))}
                    </Slider>
                </div>
            </div>
            <SearchAddress />
            <BestSeller />
        </div>
    );
}

export default Home;
