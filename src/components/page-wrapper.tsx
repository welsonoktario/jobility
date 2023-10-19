import { cn } from '@/lib/utils';

export type PageWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageWrapper({ children, className }: PageWrapperProps) {
  return <div className={cn('container grow py-8', className)}>{children}</div>;
}
