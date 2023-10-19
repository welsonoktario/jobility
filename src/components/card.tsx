import { cn } from '@/lib/utils';

export type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn('card w-fit bg-base-100 shadow-md dark:bg-base-200', className)}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className }: CardProps) {
  return <h2 className={cn('card-title mb-4 text-2xl font-bold', className)}>{children}</h2>;
}
