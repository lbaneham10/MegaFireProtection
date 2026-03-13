import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  asChild?: boolean;
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, href, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-none font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-kr-red disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wider text-xs";
    
    const variants = {
      primary: "bg-kr-red text-white hover:bg-[#c92221]",
      secondary: "bg-kr-panel text-white hover:bg-[#1a1a1a] border border-kr-border",
      outline: "border border-kr-border bg-transparent hover:bg-kr-panel text-white",
      ghost: "hover:bg-kr-panel text-kr-text",
      danger: "bg-red-600 text-white hover:bg-red-700",
    };

    const sizes = {
      sm: "h-10 px-5",
      md: "h-12 px-6",
      lg: "h-14 px-8",
      icon: "h-12 w-12",
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      return (
        <Link to={href} className={classes}>
          {props.children as React.ReactNode}
        </Link>
      );
    }

    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
