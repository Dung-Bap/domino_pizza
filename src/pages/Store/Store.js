import classNames from 'classnames/bind';
import styles from './Store.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Store() {
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);
    const [indexEdit, setIndexEdit] = useState(null);

    const handleAddValue = () => {
        setItems((prev) => [...prev, value]);
        setValue('');
    };

    const handleDelete = (index) => {
        setItems(items.filter((item, i) => i !== index));
    };

    const handleEditItem = (index, _value) => {
        setItems(items.map((item, i) => (index === i ? _value : item)));
    };

    return (
        <div className={cx('ahihi')}>
            <div>
                <input value={value} onChange={(e) => setValue(e.target.value)} />
                <button onClick={handleAddValue}>Add</button>
            </div>
            <ul>
                {items.map((item, index) =>
                    indexEdit === index ? (
                        <li key={index}>
                            <input defaultValue={item} onChange={(e) => handleEditItem(index, e.target.value)} />
                            <button onClick={() => setIndexEdit(null)}>Save</button>
                        </li>
                    ) : (
                        <li key={index}>
                            {item}
                            <button onClick={() => setIndexEdit(index)}>Edit</button>
                            <button onClick={() => handleDelete(index)}>Clear</button>
                        </li>
                    ),
                )}
            </ul>
        </div>
    );
}

export default Store;
