import { cn } from '@/lib/utils';

import { Button } from '.';

export type HeaderMenuProps = {
  /** Icon for the button */
  icon: React.ReactNode;
  /** Screen reader text to the button */
  srText?: string;
  /** The content of the header menu dropdown */
  children: React.ReactNode;
  /** Custom class name */
  className?: string;
};

export function HeaderMenu({ icon, srText, children, className }: HeaderMenuProps) {
  return (
    <div className={cn('dropdown dropdown-end', className)}>
      <label tabIndex={0} className="btn btn-circle btn-primary btn-ghost">
        {icon}
        {srText && <span className="sr-only">{srText}</span>}
      </label>
      <ul
        tabIndex={0}
        className="menu dropdown-content rounded-box z-[1] w-52 bg-base-100 p-2 shadow transition-all dark:bg-base-200"
      >
        {children}
      </ul>
    </div>
  );
}

export type HeaderMenuItemProps = {
  children: React.ReactNode;
  /** Screen reader text for the header menu item */
  srText?: string;
  /** Callback when the item is clicked */
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  /** Custom class name */
  className?: string;
};

export function HeaderMenuItem({
  children,
  srText = undefined,
  onClick,
  className,
}: HeaderMenuItemProps) {
  return (
    <li>
      <a className={cn(className)} onClick={onClick}>
        {children}
        {srText && <span className="sr-only">{srText}</span>}
      </a>
    </li>
  );
}

export type HeaderItemProps = Omit<HeaderMenuProps, 'children'> & {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export function HeaderItem({ icon, srText, className, onClick }: HeaderItemProps) {
  return (
    <Button
      className={cn('btn btn-circle btn-primary btn-ghost', className)}
      onClick={onClick}
    >
      {icon}
      {srText && <span className="sr-only">{srText}</span>}
    </Button>
  );
}
