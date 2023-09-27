import { cva, VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, forwardRef } from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva('btn', {
  variants: {
    color: {
      default: 'btn-primary',
      info: 'btn-info',
      error: 'btn-error dark:text-white',
    },
    variant: {
      default: 'btn-primary',
      outline: 'btn-outline',
      ghost: 'btn-ghost',
    },
    size: {
      default: '',
      sm: 'btn-sm',
      lg: 'btn-lg',
      icon: 'btn-circle',
    },
  },
  defaultVariants: {
    color: 'default',
    variant: 'default',
    size: 'default',
  },
});

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, color, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ color, variant, size, className }))}
      ref={ref}
      {...props}
    />
  ),
);
Button.displayName = 'Button';

export { Button, buttonVariants };
