import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import { bannerImg } from '~/assets/Img/banner';
import SearchAddress from '~/component/SearchAddress';
import BestSeller from '~/component/BestSeller/BestSeller';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

function Home() {
    const [width, setWidth] = useState(true);
    const [deviceSize, changeDeviceSize] = useState(window.innerWidth);

    useEffect(() => {
        const resizeW = () => changeDeviceSize(window.innerWidth);

        window.addEventListener('resize', resizeW); // Update the width on resize

        return () => window.removeEventListener('resize', resizeW);
    });

    useEffect(() => {
        setWidth(!(deviceSize <= 739));
    }, [deviceSize]);

    const settings = {
        dots: true,
        centerMode: width,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        centerPadding: '100px',
    };

    const bestSellerItems = [
        {
            name: 'Pizza Bangkok Cà Ri Xanh Tôm Gà - Bangkok Green Curry Shrimp Chicken',
            img: 'https://img.dominos.vn/Menu+BG.jpg',
            price: '209,000đ',
        },
        {
            name: 'Pizza Bò Beefsteak Phô Mai Kiểu New York - New York CheeseSteak',
            img: 'https://img.dominos.vn/Menu+BG+1.jpg',
            price: '219,000đ',
        },

        {
            name: 'Pizza Xúc Xích Xốt Phô Mai - Sausage Kid Mania',
            img: 'https://img.dominos.vn/Sausage-Kid-Mania-1.jpg',
            price: '99,000đ',
        },

        {
            name: 'Pizza Hải Sản Nhiệt Đới  Xốt Tiêu - Pizzamin Sea',
            img: 'https://img.dominos.vn/Pizzaminsea-Hai-San-Nhiet-Doi-Xot-Tieu.jpg',
            price: '119,000đ',
        },
    ];
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
            <BestSeller data={bestSellerItems} />
        </div>
    );
}

export default Home;
