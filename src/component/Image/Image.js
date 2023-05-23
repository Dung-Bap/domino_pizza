import classNames from 'classnames';
import styles from './Image.module.scss';
import { useState } from 'react';
import images from '~/assets/Img';

function Image({ alt, src, className, ...props }) {
    const [fallback, setFallback] = useState('');

    const handleFallback = () => {
        setFallback(images.noImage);
    };

    return (
        <img
            alt={alt}
            src={fallback || src}
            className={classNames(styles.wrapper, className)}
            {...props}
            onError={handleFallback}
        />
    );
}

export default Image;
