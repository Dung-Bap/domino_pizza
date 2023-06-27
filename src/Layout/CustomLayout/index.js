import Footer from '../DefaultLayout/Footer';
import Header from '../DefaultLayout/Header';

import classNames from 'classnames/bind';
import styles from './CustomLayout.module.scss';
import { useSelector } from 'react-redux';
import { getProduct } from '~/redux/selector';

const cx = classNames.bind(styles);

function CustomLayout({ children }) {
    const productList = useSelector(getProduct);
    return (
        <div>
            <Header />
            {children}
            <div className={cx(productList.length ? 'none' : '')}>
                <Footer />
            </div>
        </div>
    );
}

export default CustomLayout;
