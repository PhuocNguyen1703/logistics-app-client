import React from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

function Menu({ children }) {
    return (
        <Tippy
            interactive
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h2>menu</h2>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;