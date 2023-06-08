import React, { type ReactNode } from 'react'

interface ButtonProps {
    children: ReactNode;
    fontSize?: string;
    fontWeight?: string;
    borderRadius?: string;
}

const Button: React.FC<ButtonProps> = ({ children, fontSize= 'text-[24px]', fontWeight='font-normal', borderRadius = 'rounded-[2px]' }) => {
  
  const classes = `${fontSize} ${fontWeight} ${borderRadius}`

  return (
    <button className={`${classes}`}>
        {children}
    </button>
  )
}

export default Button