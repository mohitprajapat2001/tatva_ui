import React, { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: FC<ButtonProps> = ({ children, className = '', ...props }) => {
  const classes = ` bg-neutral-300 text-white font-bold py-2 px-4 rounded ${className}`;
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
