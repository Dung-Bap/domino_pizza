import classNames from 'classnames/bind';
import styles from './Pizza.module.scss';
import FilterProduct from '~/component/FilterProduct/FilterProduct';
import ProductCollection from './ProductCollection/ProductCollection';

const cx = classNames.bind(styles);

function PizzaListing() {
    const collections = [
        {
            id: 1,
            name: 'FLAVORS OF THE WORLD',
        },
        {
            id: 2,
            name: 'SEAFOOD CRAVERS',
        },
        {
            id: 3,
            name: 'KID FAVORS',
        },
        {
            id: 4,
            name: 'TRADITIONAL & MEAT LOVERS',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <FilterProduct />
            {collections.map((item) => (
                <ProductCollection key={item.id} title={item.name} />
            ))}
        </div>
    );
}
export default PizzaListing;
