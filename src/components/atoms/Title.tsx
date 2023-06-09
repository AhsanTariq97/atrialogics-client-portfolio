/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { type ReactNode } from 'react'
import { clsx } from 'clsx';

interface TitleProps {
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children: ReactNode;
    fontFamily?: string;
    hover?: string;
    size: 'sm' | 'base' | 'lg' | 'xl';
    className?: string;
    id?: string;
}

const Title: React.FC<TitleProps> = ({ tag, children, fontFamily= '', hover='', size='base', className='', id='' }) => {
  
    const Tag = tag

    const classes = `${fontFamily} ${hover} ${className} pb-2`

    const sizes = {
        sm: 'font-semibold text-sm leading-normal',
        base: 'font-bold text-base leading-normal',
        lg: 'font-semibold text-xl sm:text-2xl leading-relaxed',
        xl: 'font-semibold text-2xl sm:text-3xl leading-relaxed'
    }

    return (
        <Tag id={id} className={clsx(sizes[size], classes)}>{children}</Tag>
  )
}

export default Title