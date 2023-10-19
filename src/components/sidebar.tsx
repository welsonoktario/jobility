import { useSidebar } from '@/components/hooks';

export function Sidebar() {
  const { isOpen, toggleIsOpen } = useSidebar();

  return (
    <>
      <input
        className="drawer-toggle"
        type="checkbox"
        checked={isOpen}
        onChange={() => toggleIsOpen()}
      />
      <div className="drawer-side">
        <label
          className="drawer-overlay"
          onClick={() => toggleIsOpen()}
          aria-label="Close sidebar"
        />
        <ul className="dar:bg-base-200 menu min-h-full w-80 bg-base-100 p-4 text-base-content dark:bg-base-200">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </>
  );
}
