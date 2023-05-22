import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    className,
    children,
    to,
    href,
    onClick,
    small = false,
    large = false,
    primary = false,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        small,
        large,
    });

    return (
        <Comp className={classes} {...props}>
            <span className={cx('title')}> {children}</span>
        </Comp>
    );
}

export default Button;
