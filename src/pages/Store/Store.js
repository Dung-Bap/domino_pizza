import classNames from 'classnames/bind';
import styles from './Store.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Store() {
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);
    const [edit, setEdit] = useState(null);

    const handleAddItem = () => {
        setItems((prev) => [...prev, value]);
    };

    const handleClearItem = (index) => {
        setItems(items.filter((item, i) => index !== i));
    };

    const handleEditItem = (index, _value) => {
        setItems(items.map((item, i) => (index === i ? _value : item)));
    };
    return (
        <div className={cx('ahihi')}>
            <div>
                <input value={value} onChange={(e) => setValue(e.target.value)} />
                <button onClick={handleAddItem}>Add</button>
            </div>
            <ul>
                {items.map((item, index) =>
                    edit === index ? (
                        <li key={index}>
                            <input defaultValue={item} onChange={(e) => handleEditItem(index, e.target.value)} />
                            <button onClick={() => setEdit(null)}>Save</button>
                        </li>
                    ) : (
                        <li key={index}>
                            {item}
                            <button onClick={() => setEdit(index)}>Edit</button>
                            <button onClick={() => handleClearItem(index)}>Clear</button>
                        </li>
                    ),
                )}
            </ul>
        </div>
    );
}

export default Store;
