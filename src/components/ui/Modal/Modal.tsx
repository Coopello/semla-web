import type { FC, ReactNode } from "react";

/**
 * @package
 */
export const Modal: FC<{
  children: ReactNode;
  isModalOpen: boolean;
  onClose: () => void;
  outsideClickClose?: boolean;
}> = ({ children, isModalOpen, onClose, outsideClickClose = true }) => (
  <div
    className={isModalOpen ? "fixed left-0 top-0 h-screen w-full" : "hidden"}
  >
    <div
      className="fixed left-1/2 top-1/2 z-50 w-[362px] bg-white p-6"
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      {children}
    </div>
    <div
      className="fixed left-0 top-0 h-screen w-full bg-black opacity-60"
      onClick={outsideClickClose ? onClose : undefined}
    />
  </div>
);
