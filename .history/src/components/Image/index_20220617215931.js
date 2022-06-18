import React, { useState, forwardRef } from 'react';
import avatar from '~/assets/'

function Image({ src, alt, ...props }, ref) {


    return <img ref={ref} src={src} {...props} alt={alt}/>;
}

export default forwardRef(Image);