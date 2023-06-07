/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { type ReactNode } from 'react'
import { clsx } from 'clsx';

interface TextProps {
    tag: 'p' | 'span';
    children: ReactNode;
    fontFamily?: string;
    size: 'sm' | 'base' | 'lg';
}

const Text: React.FC<TextProps> = ({ tag, children, fontFamily= '', size='sm' }) => {
  
    const Tag = tag

    const classes = `${fontFamily}`

    const sizes = {
        sm: 'font-medium text-sm leading-normal',
        base: 'font-medium text-base leading-normal',
        lg: 'my-text-base md:text-2xl leading-relaxed'
    }

    return (
        <Tag className={clsx(sizes[size], classes)} >{children}</Tag>
  )
}

export default Text