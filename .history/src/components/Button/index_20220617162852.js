import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, children, onClick }) {
    let Comp = 'button';

    const props = {};

    const classes = cx('wrapper');

    return (
        <Comp className={classes} {...}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;