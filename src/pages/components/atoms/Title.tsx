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
}

const Title: React.FC<TitleProps> = ({ tag, children, fontFamily= '', hover='', size='base', className='' }) => {
  
    const Tag = tag

    const classes = `${fontFamily} ${hover} ${className}`

    const sizes = {
        sm: 'font-semibold text-sm leading-normal',
        base: 'font-bold text-base leading-normal',
        lg: 'font-bold text-xl leading-relaxed',
        xl: 'font-extrabold text-3xl leading-relaxed'
    }

    return (
        <Tag className={clsx(sizes[size], classes)}>{children}</Tag>
  )
}

export default Title