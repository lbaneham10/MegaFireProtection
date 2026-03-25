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
    const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kr-red focus-visible:ring-offset-2 focus-visible:ring-offset-kr-bg disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wider text-xs cursor-pointer";
    
    const variants = {
      primary: "bg-kr-red text-white hover:bg-kr-red-hover hover:shadow-[0_0_24px_rgba(220,38,38,0.3)] active:scale-[0.98]",
      secondary: "bg-kr-panel text-white hover:bg-kr-panel-hover border border-kr-border hover:border-kr-border-hover",
      outline: "border border-kr-border bg-transparent hover:bg-kr-panel hover:border-kr-border-hover text-white",
      ghost: "hover:bg-kr-panel text-kr-text",
      danger: "bg-red-600 text-white hover:bg-red-700",
    };

    const sizes = {
      sm: "h-10 px-5 rounded-sm",
      md: "h-12 px-6 rounded-sm",
      lg: "h-14 px-8 rounded-sm text-sm",
      icon: "h-12 w-12 rounded-sm",
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
