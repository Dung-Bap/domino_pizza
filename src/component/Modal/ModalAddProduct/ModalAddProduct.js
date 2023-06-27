import React, { useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { remainingIdProduct } from '~/redux/selector';

import classNames from 'classnames/bind';
import styles from './ModalAddProduct.module.scss';

import Button from '~/component/Button/Button';
import { ModalEnvironment } from '~/component/Context/Context';
import { dataProduct } from '~/Variable/Variable';
import { cartsSlice } from '~/pages/Product/Cart/cartsSlice';

const cx = classNames.bind(styles);
const ModalAddProduct = () => {
    const selectProduct = [
        {
            title: 'Chọn đế bánh',
            select: [
                {
                    id: 1,
                    title: 'Đế mỏng giòn',
                    img: 'https://dominos.vn/img/icon/pizza-base-1.png',
                },
                {
                    id: 2,
                    title: 'Đế dày xốp',
                    img: 'https://dominos.vn/img/icon/pizza-base-1.png',
                },
                {
                    id: 3,
                    title: 'Đế vừa',
                    img: 'https://dominos.vn/img/icon/pizza-base-1.png',
                },
            ],
        },
        {
            title: 'Chọn cỡ bánh',
            select: [
                {
                    id: 1,
                    title: 'Cỡ 9 inch =  209,000₫',
                    img: 'https://dominos.vn/img/icon/pizza-size-2.png',
                },
                {
                    id: 2,
                    title: 'Cỡ 12 inch =  289,000₫',
                    img: 'https://dominos.vn/img/icon/pizza-size-2.png',
                },
            ],
        },
        {
            title: 'Tùy chọn thêm',
            select: [
                {
                    id: 1,
                    title: 'Thêm phô mai 9"=25,000₫',
                    img: 'https://img.dominos.vn/1phomai-v.png',
                },
                {
                    id: 2,
                    title: 'Gấp đôi phô mai 9"=45,000₫',
                    img: 'https://img.dominos.vn/1phomai-v.png',
                },
                {
                    id: 3,
                    title: 'Gấp ba phô mai 9"=65,000₫',
                    img: 'https://img.dominos.vn/1phomai-v.png',
                },
            ],
        },
        {
            title: 'Tùy chọn viền',
            select: [
                {
                    id: 1,
                    title: 'Viền phô mai 9"=59,000₫',
                    img: 'https://img.dominos.vn/phomaixucxich.png',
                },
                {
                    id: 2,
                    title: 'Viền xúc xích 9"=69,000₫',
                    img: 'https://img.dominos.vn/phomaixucxich.png',
                },
                {
                    id: 3,
                    title: 'Viền xúc xích phô mai 9"=99,000₫',
                    img: 'https://img.dominos.vn/phomaixucxich.png',
                },
            ],
        },
    ];
    const idProduct = useSelector(remainingIdProduct);
    const [detail, setDetail] = useState(false);
    const [products, setProducts] = useState({});
    const { showAddProduct, setShowAddProduct } = useContext(ModalEnvironment);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    document.body.style.overflow = showAddProduct ? 'hidden' : 'overlay';

    const handleCloseBtn = () => {
        setQuantity(1);
        setShowAddProduct(!showAddProduct);
    };

    const handleAddProduct = () => {
        setShowAddProduct(!showAddProduct);
        setQuantity(1);
        dispatch(
            cartsSlice.actions.addProduct({
                id: idProduct,
                name: products.product_name,
                img: products.pic_url,
                price: products.price2,
                thin: 'Đế dày xốp',
                size: 'Cỡ 9 inch',
                cartQuantity: quantity,
            }),
        );
    };

    const handleDecreaseItems = () => {
        setQuantity((prev) => {
            if (prev > 1) return prev - 1;
            return 1;
        });
    };

    const handIncreaseItems = () => {
        setQuantity((prev) => prev + 1);
    };
    useEffect(() => {
        const data = dataProduct.filter((item) => item.product_id === idProduct);
        // eslint-disable-next-line array-callback-return
        data.map((item) => {
            setProducts(item);
            item.product_name.includes('Pizza') ? setDetail(true) : setDetail(false);
        });
    }, [idProduct]);

    let price2 = products?.price2 * quantity;
    price2 = price2?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    return (
        <>
            {showAddProduct &&
                createPortal(
                    <div className={cx('wrapper')}>
                        <div className={cx('container')}>
                            <div className={cx('content')}>
                                <div className={cx('content-left')}>
                                    <img className={cx('image')} alt="" src={products.thumbnail}></img>
                                </div>
                                <div className={cx('content-right')}>
                                    <div className={cx('ahihi')}>
                                        <div className={cx('header')}>
                                            <h2>{products.product_name}</h2>
                                            <p>{products.description}</p>
                                        </div>
                                        <hr className={cx('title-hr')}></hr>
                                        {detail && (
                                            <div className={cx('detail')}>
                                                {selectProduct.map((item, index) => (
                                                    <div key={index} className={cx('select')}>
                                                        <p className={cx('title')}>{item.title}</p>
                                                        <ul className={cx('select-list')}>
                                                            {item.select.map((data) => (
                                                                <li key={data.id} className={cx('select-item')}>
                                                                    <p className={cx('select-name')}>{data.title}</p>
                                                                    <img
                                                                        className={cx('img')}
                                                                        alt=""
                                                                        src={data.img}
                                                                    ></img>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <div className={cx('footer')}>
                                        <div className={cx('count')}>
                                            <span
                                                className={cx('counting', quantity === 1 ? '' : 'active')}
                                                onClick={handleDecreaseItems}
                                            >
                                                <FontAwesomeIcon className={cx('minus')} icon={faMinus} />
                                            </span>
                                            <span className={cx('counting')}>{quantity}</span>
                                            <span className={cx('counting')} onClick={handIncreaseItems}>
                                                <FontAwesomeIcon className={cx('plus')} icon={faPlus} />
                                            </span>
                                        </div>
                                        <Button onClick={handleAddProduct} className={cx('add-cart')} primary>
                                            {`Thêm vào giỏ hàng ${price2}`}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <FontAwesomeIcon className={cx('close')} onClick={handleCloseBtn} icon={faClose} />
                            </div>
                        </div>
                    </div>,
                    document.body,
                )}
        </>
    );
};

export default ModalAddProduct;
