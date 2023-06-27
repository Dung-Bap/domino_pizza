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
            product_id: 5966,
            price1: 209000,
            price2: 209000,
            product_type_id: 6,
            product_type_name: 'Sản phẩm Master',
            product_code: 'PIZBCC',
            alternative_code: 'PIZBCC',
            general_product_id: null,
            category_id: 1057,
            tags: [
                {
                    id: 11,
                    name: 'Gà',
                    pic_url: 'poultry-leg_1f357.png',
                    thumbnail: null,
                    name_en: 'Chicken',
                },
            ],
            pic_url_mobile: '',
            thumbnail_mobile: 'https://img.dominos.vn/hinh+chi+tiet+375x200px+full+ga.jpg',
            pic_url_app: '',
            collection_id: [1022],
            collections: [
                {
                    id: 1022,
                    name: 'FLAVORS OF THE WORLD',
                    name_en: 'FLAVORS OF THE WORLD',
                },
            ],
            product_name: 'Pizza Bangkok Cà Ri Xanh Gà - Bangkok Green Curry Chicken',
            product_name_en: 'Bangkok Green Curry Chicken',
            pic_url: 'https://img.dominos.vn/Menu+BG+ful+ga.jpg',
            thumbnail: 'https://img.dominos.vn/menu+chi+tie%CC%82%CC%81t+PC+full+ga.jpg',
            product_category_code: 'Pizza',
            is_favorite: false,
            description: 'Phô Mai Mozzarella, Cà Ri Thái Xanh, Gà Viên, Cà Chua, Lá Chanh, Bột Ớt.',
            description_en: null,
            description_eng: null,
        },
        {
            product_id: 5970,
            price1: 219000,
            price2: 219000,
            product_type_id: 6,
            product_type_name: 'Sản phẩm Master',
            product_code: 'PIZBCS',
            alternative_code: 'PIZBCS',
            general_product_id: null,
            category_id: 1057,
            tags: [
                {
                    id: 14,
                    name: 'Hải sản',
                    pic_url: 'fried-shrimp_1f364.png',
                    thumbnail: null,
                    name_en: 'Seafood',
                },
            ],
            pic_url_mobile: '',
            thumbnail_mobile: 'https://img.dominos.vn/hinh+chi+tiet+2.jpg',
            pic_url_app: '',
            collection_id: [1022],
            collections: [
                {
                    id: 1022,
                    name: 'FLAVORS OF THE WORLD',
                    name_en: 'FLAVORS OF THE WORLD',
                },
            ],
            product_name: 'Pizza Bangkok Cà Ri Xanh Tôm - Bangkok Green Curry Shrimp',
            product_name_en: 'Bangkok Green Curry Shrimp',
            pic_url: 'https://img.dominos.vn/Menu+BG+full+tom.jpg',
            thumbnail: 'https://img.dominos.vn/hinh+chi+tiet+full+tom.jpg',
            product_category_code: 'Pizza',
            is_favorite: false,
            description: 'Phô Mai Mozzarella, Cà Ri Thái Xanh, Tôm, Cà Chua, Lá Chanh, Bột Ớt.',
            description_en: null,
            description_eng: null,
        },
        {
            product_id: 5925,
            price1: 219000,
            price2: 219000,
            product_type_id: 6,
            product_type_name: 'Sản phẩm Master',
            product_code: 'PIZNYCHE',
            alternative_code: 'PIZNYCHE',
            general_product_id: null,
            category_id: 1057,
            tags: [
                {
                    id: 10,
                    name: 'Bò',
                    pic_url: 'cut-of-meat_1f969.png',
                    thumbnail: null,
                    name_en: 'Beef',
                },
            ],
            pic_url_mobile: '',
            thumbnail_mobile: 'https://img.dominos.vn/MENU-MB_CHI-TIET_LTO-NewYork.jpg',
            pic_url_app: '',
            collection_id: [1022, 10],
            collections: [
                {
                    id: 1022,
                    name: 'FLAVORS OF THE WORLD',
                    name_en: 'FLAVORS OF THE WORLD',
                },
            ],
            product_name: 'Pizza Bò Beefsteak Phô Mai Kiểu New York - New York CheeseSteak',
            product_name_en: 'New York CheeseSteak',
            pic_url: 'https://img.dominos.vn/Menu+BG+1.jpg',
            thumbnail: 'https://img.dominos.vn/menu-chi-tie%CC%82%CC%81t-PC_LTO-NewYork.jpg',
            product_category_code: 'Pizza',
            is_favorite: false,
            description:
                'Bò Beefsteak, Xốt Demi-Glace (Xốt Bít Tết), Xốt Kem Chua, Phô Mai Mozzarella, Nấm, Cà Chua, Hành Tây, Bột Rong Biển.',
            description_en: null,
            description_eng: null,
        },
        {
            product_id: 3195,
            price1: 119000,
            price2: 119000,
            product_type_id: 6,
            product_type_name: 'Sản phẩm Master',
            product_code: 'ST',
            alternative_code: 'ST',
            general_product_id: null,
            category_id: 1057,
            tags: [
                {
                    id: 10,
                    name: 'Bò',
                    pic_url: 'cut-of-meat_1f969.png',
                    thumbnail: null,
                    name_en: 'Beef',
                },
                {
                    id: 14,
                    name: 'Hải sản',
                    pic_url: 'fried-shrimp_1f364.png',
                    thumbnail: null,
                    name_en: 'Seafood',
                },
            ],
            pic_url_mobile: '',
            thumbnail_mobile:
                'https://img.dominos.vn/MENU-MB_Pizza-B%C3%B2-_-T%C3%B4m-N%C6%B0%E1%BB%9Bng-Ki%E1%BB%83u-M%E1%BB%B9.jpg',
            pic_url_app: 'https://img.dominos.vn/Surf-_-turf.jpg',
            collection_id: [1023],
            collections: [
                {
                    id: 1023,
                    name: 'SEAFOOD CRAVERS',
                    name_en: 'SEAFOOD CRAVERS',
                },
            ],
            product_name: 'Pizza Bò & Tôm Nướng Kiểu Mỹ - Surf & Turf',
            product_name_en: 'Surf & Turf',
            pic_url: 'https://img.dominos.vn/Surf-turf-Pizza-Bo-Tom-Nuong-Kieu-My-1.jpg',
            thumbnail: 'https://img.dominos.vn/Surf-turf-thong-tin.jpg',
            product_category_code: 'Pizza',
            is_favorite: false,
            description: 'Xốt Cà Chua, Xốt Phô Mai, Phô Mai Mozzarella, Tôm, Thịt Bò Mexico, Cà Chua, Hành Tây',
            description_en: null,
            description_eng: null,
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
